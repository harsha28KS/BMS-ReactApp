// import './Premieres.css';

import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function Premieres() {
  return (
    <div style={{padding:"5%"}}>
      <h1>Premieres</h1>
      <Carousel fade variant='dark' indicators={false}>

        <Carousel.Item >
            <CardGroup style={{gap:"30px"}}>
            
                <Card>
                    <Card.Img variant="top" src="logo192.png" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
                
                <Card>
                    <Card.Img variant="top" src="logo192.png" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to
                            additional content.{' '}
                        </Card.Text>
                    </Card.Body>
                </Card>
                
                <Card>
                    <Card.Img variant="top" src="logo192.png" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
                        </Card.Text>
                    </Card.Body>
                </Card>

            </CardGroup>
        </Carousel.Item>

        <Carousel.Item >
            <CardGroup style={{gap:"30px"}}> 
                
                <Card className="bg-dark text-white">
                    <Card.Img variant="top" src="logo192.png" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                </Card>
                
                <Card className="bg-dark text-white">
                    <Card.Img variant="top" src="logo192.png" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This card has supporting text below as a natural lead-in to
                            additional content.{' '}
                        </Card.Text>
                    </Card.Body>
                </Card>
                
                <Card className="bg-dark text-white">
                    <Card.Img variant="top" src="logo192.png" />
                    <Card.Body>
                        <Card.Title>Card title</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in
                            to additional content. This card has even longer content than the
                            first to show that equal height action.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>    
        </Carousel.Item>
                
      </Carousel>
    </div>
  );
}

export default Premieres;
