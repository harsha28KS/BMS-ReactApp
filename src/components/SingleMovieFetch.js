import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

function SingleMovieFetch(){

    const {movid} = useParams();
    // console.log(movid);
    const [singledata, setSingleData] = useState([]);
    
    useEffect(() => {
        async function getSingleMovieFetch() {
            try {
                const response = await axios.get(`http://localhost:5000/movie/${movid}`);
                // console.log(response);
                // console.log([response.data]);
                setSingleData([response.data]);
            } catch (error) {
              console.error(error);
            }
        }
        getSingleMovieFetch()
    },[])

    return(
      <div>
        <Container fluid style={{textAlign:"center", padding:"5%", background:"crimson"}}>
          <Row>
            {singledata.map((mov) => {
              // console.log(singledata);
              return(
                <Col id={mov._id} key={mov._id} xs={6} md={4} lg={3} style={{marginTop:"2%"}} > 
                  <Card>
                    <Card.Img variant="top" src={mov.imageurl} />
                    <Card.Body>
                      <Card.Title>{mov.title}</Card.Title>
                      <Card.Text>{mov.actor}</Card.Text>
                    </Card.Body>
                  </Card>    
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>
    )
}

export default SingleMovieFetch;