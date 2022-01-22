import { useRouter } from 'next/router';
import react, { useEffect, useState} from "react"; 
import axios from "axios"; 

const IndexItem = (context) => {
    const isLoading = false; 
    const { asPath } = useRouter(); 
    const api_endPoint = asPath.substring(1,asPath.length).toLocaleLowerCase().toString(); 

    const [currentUrl, setCurrentUrl] = useState("")
    const [people, setPeople] = useState([]); 
    
    useEffect(() => {
        setCurrentUrl(api_endPoint)
    }, [api_endPoint])

   

    function fetchData() {
        axios.get(
            "https://swapi.dev/api/people"
            ).then(response => {
              console.log(response);
              console.log(response.data.results)
              setPeople(response.data.results)
          }).catch(error => {
            console.log("Task retrieving error", error)
        })
    }

    // component did mount 
    useEffect(() => fetchData(), [api_endPoint]); 

    return (
        <div>
            {
              people.map((x,i) => {
                 return <h1>{ x.name }</h1>
              })
            }
        </div>
    )
}

export default IndexItem;
