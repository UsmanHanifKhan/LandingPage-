import { Container, Row, Col } from 'react-bootstrap';
import '../assets/css/Home.css';
import Button from '../components/Button';
import img from '../assets/images/banner_img.png';

const Home = () => {
  return (
    <div className='container-fluid Home'>
      <Container style={{paddingTop:'10rem'}}>
        <Row className="align-items-center justify-content-center">
          <Col md={6} className="text-center text-md-start mb-5 mb-md-0"> {/* Align text column to the left */}
            <div>
              <h1 className='text'>Lorem ipsum, dolor sit amet consectetur adipisicing elit</h1>
              <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid <br/> molestiae nam tempore et magni sequi tempore et magni sequi.</p>
              <div className='d-flex flex-column flex-md-row gap-4 justify-content-center justify-content-md-start'>
                <Button children="WHITEPAPER" /> 
                <Button children="Buy Token" />
              </div>
            </div>
          </Col>
          <Col md={6} className="text-center text-md-end"> {/* Align image column to the right */}
            <img src={img} alt="" className="img-fluid" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
