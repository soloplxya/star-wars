import Link from "next/link"
import { TiArrowBackOutline } from "react-icons/ti";

const NotFound = () => {
    return  (
        <div style={{display: "flex", justifyContent: "center", margin:"auto"}}> 
            <div style={{ position: "absolute", left: "20px", top: "20px", width: "20px"}}> 
                    <Link href="/">
                        <TiArrowBackOutline 
                            size="25px"
                            color="white"
                        /> 
                    </Link> 
            </div>
            <h1 style={{color: "#FCA311"}}> Error! Page cannot be found. </h1>
        </div>
    )
}

export default NotFound; 
