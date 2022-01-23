import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Link from "next/link"
import Typography from "@material-ui/core/Typography";


const IndexItem = (props) => {
    const hrefLink = "/" + props.label; 
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
            <Card
              style={{
              width: 300,
              margin: "20px",
              backgroundColor: "white",
              border: "1px solid white",
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
        </Link> 
    );
}

export default IndexItem;
