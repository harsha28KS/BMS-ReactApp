import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import data from '../movies.json';
import { useParams } from 'react-router';

function SingleMovie(){
    const {movid} = useParams();
    console.log(movid)
    return(
      <div>
        <Container fluid style={{textAlign:"center", padding:"5%", background:"crimson"}}>
          <Row>
            {data.map((mov) => {
              if (mov.id == movid){
                console.log(mov.id)
                return(
                  <Col id={mov.id} key={mov.id} xs={6} md={4} lg={3} style={{marginTop:"2%"}} > 
                    <Card>
                      <Card.Img variant="top" src={mov.image} />
                      <Card.Body>
                        <Card.Title>{mov.title}</Card.Title>
                        <Card.Text>{mov.actor}</Card.Text>
                      </Card.Body>
                    </Card>    
                  </Col>
                )
              }
            })}
          </Row>
        </Container>
      </div>
    )
}

export default SingleMovie;