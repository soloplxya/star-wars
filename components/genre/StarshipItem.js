import Card from "@material-ui/core/Card";
import { CardActionArea } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Modal from "react-modal";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";  
import { AiOutlineClose } from "react-icons/ai"


const StarshipItem = (props) => {
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
        transform: 'translate(-50%, -50%)',
        border: "solid black 4px",
        color: "#FFF",
      },
    };

    /** Function that is used to the toggle the starship details modal */
    function toggleModal() {
      setIsOpen(!isOpen);
    }

    return (
      <div>
          <CardActionArea>  
            <Card
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
              <CardContent>
                <Typography 
                  variant="h5" 
                  component="h2"
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
              <AiOutlineClose
                type="button"
                className="close-icon"
                onClick={toggleModal}
                style={{ float: "right" }}
                color="white"
              />
              <head> props.label </head>
              <body> 
              <div className="card_info_people" style={{marginBottom: "20px"}}>
                <div style={{display: "flex", justifyContent: "center"}}>
                  <b><h2>{props.starship.name}</h2></b>
                </div>
                <div>
                  Model: {props.starship.model}
                </div>
                <div>
                  Manufacturer: {props.starship.manufacturer}
                </div>
                <div>
                  Cost In Credits: ${props.starship.cost_in_credits}
                </div>
                <div> 
                  Passengers: { props.starship.passengers}</div>
                <div>
                  Length: { props.starship.length} cm
                </div>
              </div> 
              </body>
            </Modal>
        </div>      
    );
}

export default StarshipItem;
