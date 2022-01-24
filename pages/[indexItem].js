import axios from "axios"; 
import { useRouter } from 'next/router';
import { useEffect, useState, useRef } from "react"; 
import PersonItem from '../components/genre/PersonItem';
import StarshipItem from '../components/genre/StarshipItem'
import { BallTriangle } from 'react-loader-spinner';
import TextField from '@material-ui/core/TextField'
import { makeStyles, withStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import styles from '../styles/IndexItem.module.css'



const IndexItem = () => {
    const { asPath } = useRouter(); 
    const api_endPoint = asPath.substring(1,asPath.length).toLocaleLowerCase().toString();
    const didmount = useRef();
     
    const [loading, setLoading] = useState(false)
    const [currentUrl, setCurrentUrl] = useState("")
    const [query, setQuery] = useState("")

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


    // fetchData from different api 
    function fetchData(query) {
        setLoading(true); 
        axios.get(
            "https://swapi.dev/api/" + api_endPoint + `?search=${query}`
            ).then(response => {
                setLoading(false); 
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
            console.log("Task retrieving error", error)
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
      

    // component did mount 
    useEffect(() => {
        setCurrentUrl(api_endPoint)
        fetchData("", api_endPoint)
    }, [api_endPoint]); 



    if (currentUrl == "people" ) {
        return (
            <body style={{height: "200vh", backgroundColor: '#000'}}>
                <div style={{ display: 'flex', justifyContent:'center', alignItems:'center', flexDirection:"column"}} >
                    <h1 style={{ color: "#FFF"}} className={styles.h1}> {api_endPoint} </h1> 
                    { loading 
                        ? <BallTriangle
                            heigth="100"
                            width="100"
                            color="grey"
                            arialLabel="loading-indicator"
                        /> 
                        : <form>
                            <div style={{display: "flex", justifyContent:"center"}}> 
                            <TextField 
                                className={classes.root}
                                inputProps={{ className: classes.input }}
                                id="outline-required" 
                                label="Search" 
                                variant="filled" 
                                onKeyDown={e => keyPress(e)}
                                focused
                            />
                            </div>
                        </form>
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
                    <h1 style={{ color: "#FFF"}} className={styles.h1}> {api_endPoint} </h1>
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
    } else if (loading) {
        return ""
    } else {
        return "INVALID"
    }
    
}


export default IndexItem;
