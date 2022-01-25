import axios from "axios"; 
import { useRouter } from 'next/router';
import { useEffect, useState } from "react"; 
import PersonItem from '../components/genre/PersonItem';
import StarshipItem from '../components/genre/StarshipItem';
import SpeciesItem from '../components/genre/SpeciesItem';
import PlanetItem from "../components/genre/PlanetItem";
import NotFound from "../components/errors/404NotFound";
import { BallTriangle } from 'react-loader-spinner';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Button from '@material-ui/core/Button';
import InputAdornment from "@material-ui/core/InputAdornment";
import {isMobile} from 'react-device-detect';
import styles from '../styles/IndexItem.module.css';
import { TiArrowBackOutline } from 'react-icons/ti';
import { FcSearch } from 'react-icons/fc';
import Link from "next/link";



const IndexItem = () => {
    const { asPath } = useRouter(); 
    const api_endPoint = asPath.substring(1,asPath.length).toLocaleLowerCase().toString();
     
    // Utility data
    const [loading, setLoading] = useState(false);
    const [currentUrl, setCurrentUrl] = useState("");
    const [query, setQuery] = useState("");
    const [notFound, setNotFound] = useState(false);

    // Types of data 
    const [people, setPeople] = useState([]); 
    const [starships, setStarships] = useState([]); 
    const [planets, setPlanets] = useState([]);
    const [species, setSpecies] = useState([]); 

    
    // Styles 
    const useStyles = makeStyles((theme) => ({
        input: {
          color: "#FFF",
        },
    }));

    const classes = useStyles(); 


    /* Function that fetches data from the api endPoints based on the apiEndPoint that has been indicated */
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


    // Search function 
    function handleSubmit(queryStatement) {
        setQuery(queryStatement);
        fetchData(queryStatement);
    };

    function keyPress(e) {
        if(e.keyCode == 13){
           handleSubmit(e.target.value);
        }
     }

     /** Function that displays the results of the search on the page */
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
      

    /**  Similar to component did mount, will fetch the Data from the api before the function runs  */
    useEffect(() => {
        setCurrentUrl(api_endPoint)
        fetchData("", api_endPoint)
    }, [api_endPoint]); 



    
    return (
        <body style={{height: "200vh", backgroundColor: '#14213D'}}>
            <div style={{ display: 'flex', justifyContent:'center', alignItems:'center', flexDirection:"column"}} >
                <div style={{ position: "absolute", left: "20px", top: "20px", width: "20px"}}> 
                    <Link href="/">
                        <TiArrowBackOutline 
                            size="25px"
                            color="white"
                        /> 
                    </Link> 
                </div>
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
                                variant="standard"
                                color="warning"
                                focused
                                onKeyDown={e => keyPress(e)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment>
                                          <IconButton>
                                            <FcSearch />
                                          </IconButton>
                                        </InputAdornment>
                                      )
                                }}
                            />
                            { isMobile 
                                ? <Button 
                                    variant="text" 
                                    size="small" 
                                    style={{ marginLeft:'20px'}}
                                    onClick={e => handleSubmit(e.target.value)}
                                    >Submit</Button>
                                : <div />
                            }
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
