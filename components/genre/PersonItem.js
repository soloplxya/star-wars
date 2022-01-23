import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { CardActionArea } from "@material-ui/core";
import Modal from "react-modal";
import Typography from "@material-ui/core/Typography";
import { useState } from "react"; 
import styles from '../../styles/Card.module.css'


const PersonItem = (props) => {
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
        background: "#000", 
        borderRadius: "9px",
        transform: 'translate(-50%, -50%)',
        border: "solid black 2px",
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



    function toggleModal() {
      setIsOpen(!isOpen);
    }

    return (
          <div> 
            <CardActionArea>
              <Card
                variant="outlined"
                style={{
                  margin: "20px",
                  border: "1px solid black",
                  width: "200px", 
                  height: "100px"
                }}
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
              <div style={{display: "flex", justifyContent: "center"}}>
                <b><h2>{props.person.name}</h2></b>
              </div>
              <div>
                Birth year: {props.person.birth_year}
              </div>
              <div>
                Eye color: {props.person.eye_color}
              </div>
              <div>
                Hair color: {props.person.hair_color}
              </div>
              <div> 
                Mass: { props.person.mass} kg </div>
              <div>
                Height: { props.person.height} cm
              </div>
            </div> 
            </body>
          </Modal>
        </div>    
    );
}

export default PersonItem;
