import { Container } from "react-bootstrap"
import '../assets/css/Section4.css'
import img from '../assets/images/Group34776.png'
const Section4 = () => {
    return (
        <Container id="section4" className="d-flex justify-content-center align-items-center flex-column section_Container " >
            <button className="text rounded" style={{padding:'10px 30px' , border:'none' , outline:'none' , background:'#FFD000'}}>button</button>
            <div className="section4_div d-flex justify-content-center align-items-center">
                <div>
                    <img src={img} alt="" />
                </div>
            <div>
                <p className="text">Initial Public Sale</p>
                <p className="text">Liquidity Pool</p>
                <p className="text">Development and Team</p>
                <p className="text">Community Rewards</p>
                <p className="text">LPartnership and Marketing</p>
                <p className="text">Future Development</p>
                <p className="text">Reserve Fund</p>
                <p className="text">Token Burn</p>
            </div>
            </div>
        </Container>
    )
}
export default Section4