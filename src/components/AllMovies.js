import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import data from '../movies.json';

function AllMovies(){
    // console.log(data);
    return(
        <div>
            <Container fluid style={{textAlign:"center", padding:"5%", background:"crimson"}}>
                <Row>
                    {data.map((mov)=>
                        <Col id={mov.id} key={mov.id} xs={6} md={4} lg={3} style={{marginTop:"2%"}} > 
                            <Card onClick={()=>window.location.href="/movies/"+mov.id} style={{cursor:"pointer"}}>
                                <Card.Img variant="top" src={mov.image} />
                                <Card.Body>
                                    <Card.Title>{mov.title}</Card.Title>
                                    <Card.Text>{mov.actor}</Card.Text>
                                </Card.Body>
                            </Card>    
                        </Col>
                    )}
                </Row>
            </Container>
        </div>
    )
}

export default AllMovies;