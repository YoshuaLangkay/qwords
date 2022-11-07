import { Card,ListGroup, Row,Col } from "react-bootstrap";
import img1 from '../img/fruits1.jpg';
import img4 from '../img/fruits4.jpg';
import img5 from '../img/fruits5.jpg';
import img6 from '../img/fruits6.jpg';

import 'bootstrap/dist/css/bootstrap.css';

function PricingList(){
    return(
        <div className="container">

            <h2 className="text-center">Pricing List</h2>

            <Row style={{
                margin:'auto',
                marginBottom:'24px',
                marginLeft:'2.5rem'
            }}>
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img4} />
                        <Card.Body>
                            <Card.Title>Paket 1</Card.Title>
                            <h3>Rp. 20.000</h3>
                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>2 Buah Apel</ListGroup.Item>
                            <ListGroup.Item>4 Buah Jeruk</ListGroup.Item>
                            <ListGroup.Item>6 Buah Pisang</ListGroup.Item>
                        </ListGroup>
                        </Card></Col>
                <Col>
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img5} />
                        <Card.Body>
                            <Card.Title>Paket 2</Card.Title>
                            <h3>Rp. 50.000</h3>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>6 Buah Apel</ListGroup.Item>
                            <ListGroup.Item>6 Buah Pisang</ListGroup.Item>
                            <ListGroup.Item>10 Buah Buah Naga</ListGroup.Item>
                        </ListGroup>
                        </Card>
                </Col>
                <Col>
                <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={img6} style={{height:'12rem'}} />
                        <Card.Body>
                            <Card.Title>Paket 3</Card.Title>
                            <h3>Rp. 100.000</h3>

                        </Card.Body>
                        <ListGroup className="list-group-flush">
                            <ListGroup.Item>2 Buah Semangka</ListGroup.Item>
                            <ListGroup.Item>8 Buah Mangga</ListGroup.Item>
                            <ListGroup.Item>12 Buah Strawberry</ListGroup.Item>
                        </ListGroup>
                        </Card>
                </Col>
            </Row>
            <hr/>
        </div>
    );
}

export default PricingList;