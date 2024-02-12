import { Container } from "react-bootstrap";
import '../assets/css/Section1.css';
import Section2 from "./Section2";
import Section3 from "./Section3";
import Section4 from "./Section4";
import Section5 from "./Section5";

const Section1 = () => {
    return (
        <>
            <Container id="section1" fluid className="section">
              <div className="d-flex justify-content-center align-items-center" >
              <div className="Section_div "  >
                    <h1 className="text text-center">Lorem ipsum lorem ipsum</h1>
                    <div className="Section_text">
                        <p className="text text-center">it is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. t is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English.</p>
                    </div>
                </div>
              </div>
            </Container>
            <Container fluid className="section2">
                <Section2 />
                <Section3 />
            </Container>
            <Container fluid className="section4">
                <Section4 />
            </Container>
            <Container>
                <Section5 />
            </Container>
        </>
    )
}

export default Section1;
