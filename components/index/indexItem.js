import Card from "@material-ui/core/Card";
import { CardActionArea } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Link from "next/link";
import Typography from "@material-ui/core/Typography";

/**  Card component for the different genres in indexList */
const IndexItem = (props) => {
    return (
        <Link
          href={{
            pathname: `/[route]`,
            query: {
              route: props.label, 
            },
          }}
          as={`/${props.label}`}
        >
            <CardActionArea> 
              <Card
               style={{
                  width: 300,
                  height: 100,
                  margin: "20px",
                  border: "3px solid black", 
                  boxShadow: "2px 2px 5px #FCA311",
                  backgroundColor: "#E5E5E5",
                  textAlign: "center",
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
            </CardActionArea>    
        </Link> 
    );
}

export default IndexItem;
