import axios from "axios"; 
import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from "react"; 
import PersonItem from '../components/genre/PersonItem';
import StarshipItem from '../components/genre/StarshipItem'
import { BallTriangle } from 'react-loader-spinner';


const IndexItem = (context) => {
    const { asPath } = useRouter(); 
    const api_endPoint = asPath.substring(1,asPath.length).toLocaleLowerCase().toString();
    const didmount = useRef();
     
    const [loading, setLoading] = useState(false)
    const [currentUrl, setCurrentUrl] = useState("")

    // types of data 
    const [people, setPeople] = useState([]); 
    const [starships, setStarships] = useState([]); 
   
    // fetchData from different api 
    function fetchData() {
        setLoading(true); 
        if (api_endPoint == "people") {
            axios.get(
                "https://swapi.dev/api/" + api_endPoint
                ).then(response => {
                    setPeople(response.data.results)
                    setLoading(false); 
            }).catch(error => {
                console.log("Task retrieving error", error)
            })
        } else if (api_endPoint == "starships") {
            axios.get(
                "https://swapi.dev/api/" + api_endPoint
                ).then(response => {
                    console.log(response.data.results);
                    setStarships(response.data.results)
                    setLoading(false); 
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



    if (currentUrl == "people" ) {
        return (
            <body style={{height: "200vh", backgroundColor: '#000'}}>
                <div style={{ display: 'flex', justifyContent:'center', alignItems:'center', flexDirection:"column"}} >
                    <h1 style={{ color: "#FFF"}}> {api_endPoint} </h1> 
                    { loading 
                        ? <BallTriangle
                            heigth="100"
                            width="100"
                            color="grey"
                            arialLabel="loading-indicator"
                        /> 
                        : ""
                    }
                </div> 
                <div
                    style={{display:"flex", margin: "40px", justifyContent:'center', flexDirection:"row", flexWrap:"wrap"}}
                > 
                    {
                    people.map((x,i) => {
                        return <PersonItem key={i} label={x.name} person={x}/> 
                    })
                    }
                </div> 
            </body> 
        )

    } else if (currentUrl == "starships") {
        return (
            <body style={{height: "200vh", backgroundColor: '#000'}}>
                <div style={{ display: 'flex', justifyContent:'center', alignItems:'center', flexDirection:"column" }} >
                    <h1 style={{ color: "#FFF"}}> {api_endPoint} </h1>
                    { loading 
                        ? <BallTriangle
                            heigth="100"
                            width="100"
                            color="grey"
                            arialLabel="loading-indicator"
                        /> 
                        : ""
                    }
                </div> 
                <div
                    style={{display:"flex", margin: "40px", justifyContent:'center', flexDirection:"row", flexWrap:"wrap"}}
                > 
                    {
                    starships.map((x,i) => {
                        return <StarshipItem key={i} label={x.name} starship={x}/> 
                    })
                    }
                </div> 
            </body>
        )
    }  else if (loading) {
        return ""
    } else {
        return "INVALID"
    }
    
}

export default IndexItem;
