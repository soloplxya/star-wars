import IndexItem from "./indexItem"

// List of various genres that is displayed on the homepage
const IndexList = () => {
    return (
        <div style={{display: "flex", flexDirection: "column", marginTop: "40px"}}> 
            <IndexItem label="People" /> 
            <IndexItem label="Starships" /> 
            <IndexItem label="Planets" /> 
            <IndexItem label="Species" /> 
            <IndexItem label="Films" /> 
            <IndexItem label="Vehicles" />
        </div> 
    ); 
}

export default IndexList; 
