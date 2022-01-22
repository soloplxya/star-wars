import IndexItem from "./indexItem"

const IndexList = () => {
    return (
        <div 
            style={{display: "flex", flexDirection: "row"}}> 
            <IndexItem label="People" /> 
            <IndexItem label="Starships" /> 
        </div> 
    ); 
}

export default IndexList; 
