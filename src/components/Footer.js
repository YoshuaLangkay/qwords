import { Col,Row, ListGroup } from "react-bootstrap";

function Footer(){
    return(
        <>
            <Row style={{
            backgroundColor:'#182747',
            }}>
                <Col style={{
                    margin:'12px'
                }}>
                    <h4 className="text-white">Contact</h4>
                    <ListGroup variant="flush">
                    <ListGroup.Item>Email</ListGroup.Item>
                    <ListGroup.Item>Phone</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col style={{
                    margin:'12px'
                }}>
                    <h4 className="text-white">About Us</h4>
                    <ListGroup variant="flush">
                    <ListGroup.Item>Gallery</ListGroup.Item>
                    <ListGroup.Item>Activity</ListGroup.Item>
                    </ListGroup>
                </Col>
                <Col style={{
                    margin:'12px'
                }}>
                    <h4 className="text-white">Resources</h4>
                    <ListGroup variant="flush">
                    <ListGroup.Item>Blog</ListGroup.Item>
                    <ListGroup.Item>Books</ListGroup.Item>
                    <ListGroup.Item>Address</ListGroup.Item>
                    </ListGroup>
                </Col>
            </Row>
        </>
    );
}

export default Footer;