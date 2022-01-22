import axios from "axios"; 
import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from "react"; 
import GenreItem from '../components/genre/genreItem';
import { Hearts } from 'react-loader-spinner';


const IndexItem = (context) => {
    const isLoading = false; 
    const { asPath } = useRouter(); 
    const api_endPoint = asPath.substring(1,asPath.length).toLocaleLowerCase().toString();
    const didmount = useRef();
     

    const [currentUrl, setCurrentUrl] = useState("")

    // types of data 
    const [people, setPeople] = useState([]); 
    const [starships, setStarships] = useState([]); 
   
    // fetchData from different api 
    function fetchData() {
        isLoading = true; 
        if (api_endPoint == "people") {
            axios.get(
                "https://swapi.dev/api/" + api_endPoint
                ).then(response => {
                    setPeople(response.data.results)
                    isLoading = false;
            }).catch(error => {
                console.log("Task retrieving error", error)
            })
        } else if (api_endPoint == "starships") {
            axios.get(
                "https://swapi.dev/api/" + api_endPoint
                ).then(response => {
                    console.log(response.data.results);
                    setStarships(response.data.results)
                    isLoading = false;
            }).catch(error => {
                console.log("Task retrieving error", error)
            })
        }
    }

 
    // component did mount 
    useEffect(() => {
        if (didmount) {
            setCurrentUrl(api_endPoint)
            fetchData()
        } 
        didmount.current = true; 
    }, [api_endPoint]); 

    
    if (didmount) {
        
        if (currentUrl == "people" ) {
            console.log('here')

            return (
                <div style={{height:"100vh", backgroundColor: '#364156'}}>
                    <div style={{ display: 'flex', justifyContent:'center', alignItems:'center'}} >
                        <h1> {api_endPoint} </h1>
                    </div> 
                    { isLoading ? <Hearts arialLabel="loading-indicator"/> : ""}
                    <div
                        style={{display:"flex", margin: "40px", flexDirection:"row", flexWrap:"wrap"}}
                    > 
                        {
                        people.map((x,i) => {
                            return <GenreItem key={i} label={x.name} /> 
                        })
                        }
                    </div> 
                </div>
            )

        } else if (currentUrl == "starships") {
            return (
                <div style={{height:"100vh", backgroundColor: '#364156'}}>
                    <div style={{ display: 'flex', justifyContent:'center', alignItems:'center'}} >
                        <h1> {api_endPoint} </h1>
                    </div> 
                    { isLoading ? <Hearts arialLabel="loading-indicator"/> : ""}
                    <div
                        style={{display:"flex", margin: "40px", flexDirection:"row", flexWrap:"wrap"}}
                    > 
                        {
                        starships.map((x,i) => {
                            return <GenreItem key={i} label={x.name} /> 
                        })
                        }
                    </div> 
                </div>
            )
        } else {
            console.log("case here")
            return "test"
        }
    } else {
        console.log("case here 2")
        return  <div style={{height:"100vh", backgroundColor: '#364156'}}></div>
    }
}

export default IndexItem;
