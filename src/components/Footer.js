// import './Footer.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function Footer() {
  return (
    <div style={{background:"black", color:"white"}}>
      <Container fluid>
        <Row style={{padding:"20px 100px"}}>
            <Col xs={2}>Col 1</Col>
            <Col xs={4}>Col 2</Col>
            <Col style={{display:"flex", flexDirection:"row-reverse"}}><Button variant="danger" >Contact Today</Button></Col>
        </Row>
        <Row style={{textAlign:"center", padding:"3%", background:"grey"}}>
            <Col>Col 1</Col>
            <Col>Col 2</Col>
            <Col>Col 3</Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
