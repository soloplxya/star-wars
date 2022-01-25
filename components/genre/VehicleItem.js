import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CardActionArea } from "@material-ui/core";
import Modal from "react-modal";
import Typography from "@material-ui/core/Typography";
import { useState } from "react"; 
import { AiOutlineClose } from "react-icons/ai"


const VehicleItem = (props) => {
    // styles
    const [isOpen, setIsOpen] = useState(false);
    const customStyles = {
      content: {
        maxHeight: "100vh", 
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        background: "#14213D", 
        borderRadius: "9px",
        transform: 'translate(-50%, -50%)',
        border: "solid black 4px",
        color: "#FFF",
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
      },
    };

    const cardDivStyle = {
      content: {
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
      },

    }

    /** Function that is used to the toggle the person details modal */
    function toggleModal() {
      setIsOpen(!isOpen);
    }

    return (
          <div> 
            <CardActionArea>
              <Card
                variant="outlined"
                style={{
                  width: 200,
                  height: 100,
                  margin: "20px",
                  border: "3px solid black", 
                  boxShadow: "2px 2px 5px #FCA311",
                  backgroundColor: "#E5E5E5"
                }}
                variant="outlined"
                onClick={toggleModal}
              >
            
                <CardContent style={{
                  display: "flex",
                  justifyContent: "center",
                }}>
                  <Typography 
                    variant="h5" 
                    >
                    { props.label } 
                  </Typography>
                </CardContent>
            </Card>  
          </CardActionArea>  
          <Modal
            isOpen={isOpen}
            onRequestClose={toggleModal}
            contentLabel="editDialog"
            style={customStyles}> 
            <head> props.label </head>
            <body> 
            <div style={cardDivStyle}>
              <AiOutlineClose
                type="button"
                className="close-icon"
                onClick={toggleModal}
                style={{ float: "right" }}
                color="white"
              />
              <div style={{display: "flex", justifyContent: "center"}}>
                <b><h2>{props.vehicle.name}</h2></b>
              </div>
              <div>
                Model: {props.vehicle.model}
              </div>
              <div>
                Manufacturer: {props.vehicle.manufacturer}
              </div>
              <div>
                Cost in credits: ${props.vehicle.cost_in_credits}
              </div>
              <div> 
                Length: {props.vehicle.length} cm
              </div>
              <div> 
                Vehicle Class: {props.vehicle.vehicle_class}
              </div>
            </div> 
            </body>
          </Modal>
        </div>    
    );
}

export default VehicleItem;
