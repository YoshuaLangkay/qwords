import { Row,Col,Card,Button } from "react-bootstrap";
import profile from '../img/profile.jpg'

function Testi(){
    return(
        <div className="container">
            <h2 className="text-center">Testimonial</h2>
            <Row style={{
                margin:'auto',
                marginBottom:'24px',
                marginLeft:'2.5rem'
            }}>
                <Col><Card style={{ width: '18rem' }}>
                    <img style={{
                        borderRadius:'50%',
                        width:'30%',
                        margin:'auto',
                        marginTop:'12px'
                    }} variant="top" src={profile} />
                    <Card.Body>
                        <Card.Title>Adiputra</Card.Title>
                        <Card.Text>
                        "Some quick example text to build on the card title and make up the
                        bulk of the card's content.""
                        </Card.Text>
                    </Card.Body>
                    </Card></Col>
                    <Col><Card style={{ width: '18rem' }}>
                    <img style={{
                        borderRadius:'50%',
                        width:'30%',
                        margin:'auto',
                        marginTop:'12px'
                    }} variant="top" src={profile} />
                    <Card.Body>
                        <Card.Title>Adiputra</Card.Title>
                        <Card.Text>
                        "Some quick example text to build on the card title and make up the
                        bulk of the card's content.""
                        </Card.Text>
                    </Card.Body>
                    </Card></Col>
                    <Col><Card style={{ width: '18rem' }}>
                    <img style={{
                        borderRadius:'50%',
                        width:'30%',
                        margin:'auto',
                        marginTop:'12px'
                    }} variant="top" src={profile} />
                    <Card.Body>
                        <Card.Title>Adiputra</Card.Title>
                        <Card.Text>
                        "Some quick example text to build on the card title and make up the
                        bulk of the card's content.""
                        </Card.Text>
                    </Card.Body>
                    </Card></Col>
            </Row>
            <hr/>
        </div>
    );
}

export default Testi;