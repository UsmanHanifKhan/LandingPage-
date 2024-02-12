import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <Navbar expand="lg" className="bg-transparent">
            <Container>
                <Navbar.Brand href="#home" className='text'>Web Icon</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="d-flex mx-auto">
                        <Nav.Link href="#home" className="text-white">Home</Nav.Link>
                        <Nav.Link href="#section1" className="text-white">Meme coin</Nav.Link>
                        <Nav.Link href="#section2" className="text-white">Ordinals</Nav.Link>
                        <Nav.Link href="#section3" className="text-white">NFT</Nav.Link>
                        <Nav.Link href="#section4" className="text-white">Roadmap</Nav.Link>
                        <Nav.Link href="#link" className="text-white">About us</Nav.Link>
                        <Nav.Link href="#section5" className="text-white">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
