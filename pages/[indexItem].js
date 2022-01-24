import axios from "axios"; 
import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from "react"; 
import PersonItem from '../components/genre/PersonItem';
import StarshipItem from '../components/genre/StarshipItem';
import SpeciesItem from '../components/genre/SpeciesItem';
import PlanetItem from "../components/genre/PlanetItem";
import NotFound from "../components/errors/404NotFound";
import { BallTriangle } from 'react-loader-spinner';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import styles from '../styles/IndexItem.module.css';



const IndexItem = () => {
    const { asPath } = useRouter(); 
    const api_endPoint = asPath.substring(1,asPath.length).toLocaleLowerCase().toString();
     
    const [loading, setLoading] = useState(false);
    const [currentUrl, setCurrentUrl] = useState("");
    const [query, setQuery] = useState("");
    const [notFound, setNotFound] = useState(false);

    // types of data 
    const [people, setPeople] = useState([]); 
    const [starships, setStarships] = useState([]); 
    const [planets, setPlanets] = useState([]);
    const [species, setSpecies] = useState([]); 

    
    // styles 
    const useStyles = makeStyles((theme) => ({
        input: {
          color: "#FFF",
        },
    }));

    const classes = useStyles(); 


    // fetchData from different api links
    function fetchData(query) {
        setLoading(true); 
        axios.get(
            "https://swapi.dev/api/" + api_endPoint + `?search=${query}`
            ).then(response => {
                setLoading(false); 
                setNotFound(false);
                if (api_endPoint == "people") {
                    setPeople(response.data.results);
                } else if (api_endPoint == "starships") {
                    setStarships(response.data.results);
                } else if (api_endPoint == "species") {
                    setSpecies(response.data.results);
                } else if (api_endPoint == "planets") {
                    setPlanets(response.data.results);
                } 
        }).catch(error => {
            setLoading(false);
            console.log("Task retrieving error", error);
            setNotFound(true);
            return;
        })
    }

    // search function 
    function handleSubmit(queryStatement) {
        setQuery(queryStatement);
        fetchData(queryStatement);
    };

    function keyPress(e) {
        if(e.keyCode == 13){
           handleSubmit(e.target.value);
        }
     }

     const displayedItems = () => {
         if (api_endPoint == "people") {
             return ( 
                <div style={{display:"flex", margin: "40px", justifyContent:'center', flexDirection:"row", flexWrap:"wrap"}}> 
                    {
                    people.map((x,i) => {
                        return <PersonItem key={i} label={x.name} person={x}/> 
                    })
                    }
                </div>
            )
         } else if (api_endPoint == "starships") {
            return ( 
                <div style={{display:"flex", margin: "40px", justifyContent:'center', flexDirection:"row", flexWrap:"wrap"}}> 
                {
                starships.map((x,i) => {
                    return <StarshipItem key={i} label={x.name} starship={x}/> 
                })
                }
                </div> 
            )
         } else if (api_endPoint == "species") {
             return (
                <div style={{display:"flex", margin: "40px", justifyContent:'center', flexDirection:"row", flexWrap:"wrap"}}> 
                {
                species.map((x,i) => {
                    return <SpeciesItem key={i} label={x.name} species={x}/> 
                })
                }
            </div>
             )
         } else if (api_endPoint == "planets") {
            return (
                <div style={{display:"flex", margin: "40px", justifyContent:'center', flexDirection:"row", flexWrap:"wrap"}}> 
                {
                planets.map((x,i) => {
                    return <PlanetItem key={i} label={x.name} planet={x}/> 
                })
                }
                </div>
            )
         } else if (loading) {
             return (
                 <div></div>
             )
         } else if (notFound) {
             return (
                 <NotFound /> 
             )
         }
     }
      

    // component did mount 
    useEffect(() => {
        setCurrentUrl(api_endPoint)
        fetchData("", api_endPoint)
    }, [api_endPoint]); 



    
    return (
        <body style={{height: "200vh", backgroundColor: '#14213D'}}>
            <div style={{ display: 'flex', justifyContent:'center', alignItems:'center', flexDirection:"column"}} >
                <h1 style={{ color: "#E5E5E5"}} className={styles.h1}> {api_endPoint} </h1> 
                { loading 
                    ? <BallTriangle
                        heigth="100"
                        width="100"
                        color="grey"
                        arialLabel="loading-indicator"
                    /> 
                    : !notFound 
                        ? <form>
                            <div style={{display: "flex", justifyContent:"center"}}> 
                            <TextField 
                                className={classes.root}
                                inputProps={{ className: classes.input }}
                                id="outline-required" 
                                label="Search" 
                                color="warning"
                                focused
                                onKeyDown={e => keyPress(e)}
                            />
                            </div>
                         </form>
                         :<div> </div> 
                }
            </div> 
            { displayedItems() }
        </body> 
    )
}
           


export default IndexItem;
