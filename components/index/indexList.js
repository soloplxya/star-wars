import IndexItem from "./indexItem"

const IndexList = () => {
    return (
        <div style={{display: "flex", flexDirection: "column", marginTop: "40px"}}> 
            <IndexItem label="People" /> 
            <IndexItem label="Starships" /> 
            <IndexItem label="Planets" /> 
            <IndexItem label="Species" /> 
        </div> 
    ); 
}

export default IndexList; 
