import { Container } from "react-bootstrap";
import Button from '../components/Button';
import '../assets/css/Section5.css';

const Section5 = () => {
  return (
    <Container id="section5" className="section5">
      <div className="content-wrapper">
        <div style={{ background:'#FFD000' , padding:'20px' , borderRadius:'10px' }}>
          <h1 className="text">Do not Miss Our New Collection <br/> And Recent Updates!</h1>
          <p className="text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae, odit.</p>
          <div className="input-wrapper">
            <input type="text" placeholder="Enter Your EMail" />
            <div className="pt-2"><Button children="Subscribe" /></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Section5;
