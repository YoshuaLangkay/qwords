import { Row,Col,Card,Button } from "react-bootstrap";
import shop from '../img/shop.jpg'

function Features(){
    return(
        <div className="container">
            <h2 className="text-center">Features</h2>
            <Row style={{
                margin:'auto',
                marginBottom:'24px',
                marginLeft:'2.5rem'
            }}>
                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={shop} />
                    <Card.Body>
                        <Card.Title>Order Fruits</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Detail</Button>
                    </Card.Body>
                    </Card></Col>
                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={shop} />
                    <Card.Body>
                        <Card.Title>Order Fruit Juice</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Detail</Button>
                    </Card.Body>
                    </Card></Col>
                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={shop} />
                    <Card.Body>
                        <Card.Title>Order Fruit Plants</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Detail</Button>
                    </Card.Body>
                    </Card></Col>
            </Row>

            <Row style={{
                margin:'auto',
                marginBottom:'24px',
                marginLeft:'2.5rem'
            }}>
                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={shop} />
                    <Card.Body>
                        <Card.Title>Imported Fruit</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Detail</Button>
                    </Card.Body>
                    </Card></Col>
                <Col><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={shop} />
                    <Card.Body>
                        <Card.Title>Local Fruit</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Detail</Button>
                    </Card.Body>
                    </Card></Col>
                    <Col><Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={shop} />
                    <Card.Body>
                        <Card.Title>Location Available</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Detail</Button>
                    </Card.Body>
                    </Card></Col>
            </Row>
            <hr/>
        </div>
    );
}

export default Features;