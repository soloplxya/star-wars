import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";


const GenreItem = (props) => {
    return (
            <Card
              style={{
              width: 200,
              margin: "20px",
              backgroundColor: "transparent",
              border: "1px solid black"
              }}
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
    );
}

export default GenreItem;
