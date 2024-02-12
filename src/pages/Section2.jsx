import { Container, Row, Col } from "react-bootstrap";
import '../assets/css/Section2.css';

const Section2 = () => {
    return (
        <Container id="section2" fluid className="px-0" >
            <Row className="justify-content-center">
                <Col md={8} lg={6} xl={4}>
                    <div className="section2_div d-flex flex-column p-4 gap-3 rounded" style={{ background: '#FFD000' }}>
                        <h1 className="text text-center">Lorem ipsum</h1>
                        <hr style={{ height: '10px', backgroundColor: '#fff', border: 'none' }} />
                        <p className="text-center">Final Stage Price</p>
                        <label htmlFor="" className="text-black fw-semibold">Email to Get Started</label>
                        <input type="text" className="form-control rounded" />
                        <button className="button text">Connect Wallet</button>
                        <button className="button text">Register</button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default Section2;
