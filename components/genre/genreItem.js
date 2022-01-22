import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Modal from "react-modal";
import Typography from "@material-ui/core/Typography";
import { useState } from "react";  


const GenreItem = (props) => {
    // styles
    const [keys, setKeys] = useState([]);
    const [isOpen, setIsOpen] = useState(false);
    const customStyles = {
      content: {
        maxHeight: "100vh", 
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        background: "#A9927D", 
        transform: 'translate(-50%, -50%)',
        border: "solid black 2px",
      },
    };

    function toggleModal() {
      const temp = [];
      for (const property in props.data) {
        temp.push(property); 
        console.log(`${property}: ${props.data[property]}`);
      }
      setKeys(temp);
      setIsOpen(!isOpen);
    }

    return (
            <Card
              style={{
              width: 200,
              margin: "20px",
              backgroundColor: "transparent",
              border: "1px solid black"
              }}
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
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                contentLabel="editDialog"
                style={customStyles}> 
                {  keys.map((x,i) => {
                      return x;
                })
                }
              </Modal>  
            </Card>     
    );
}

export default GenreItem;
