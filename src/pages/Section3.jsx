import { Container } from "react-bootstrap";
import img1 from '../assets/images/img1.png';
import img2 from '../assets/images/img3.png';
import img3 from '../assets/images/img3.png';
import img4 from '../assets/images/img4.png';
import img5 from '../assets/images/img5.png';
import img6 from '../assets/images/img6.png';
import img7 from '../assets/images/img8.png';
import img8 from '../assets/images/img8.png';
import img9 from '../assets/images/img10.png';
import img10 from '../assets/images/img10.png';
import '../assets/css/Section3.css'
const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

const Section3 = () => {
  return (
    <Container id="section3" className="section3_Main w-50" >
      <p className="text-center text pb-5" >AS FEATURED IN</p>
      <div className="d-flex flex-wrap justify-content-center align-align-items-center gap-5  ">
        {images.map((img, index) => (
          <div key={index} className="w-20 mb-4">
            <img src={img} alt={`Image ${index + 1}`} className="img-fluid" />
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Section3;
