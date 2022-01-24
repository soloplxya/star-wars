import Card from "@material-ui/core/Card";
import { CardActionArea } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Modal from "react-modal";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";  


const SpeciesItem = (props) => {
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
              <head> props.label </head>
              <body> 
              <div className="card_info_people" style={{marginBottom: "20px"}}>
                <div style={{display: "flex", justifyContent: "center"}}>
                  <b><h2>{props.species.name}</h2></b>
                </div>
                <div>
                  Classification: {props.species.classification}
                </div>
                <div>
                  Designation: {props.species.designation}
                </div>
                <div>
                  Language: {props.species.language}
                </div>
                <div>
                  Height: { props.species.average_height} cm
                </div>
              </div> 
              </body>
            </Modal>
        </div>      
    );
}

export default SpeciesItem;
