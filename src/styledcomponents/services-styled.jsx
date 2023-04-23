import styled from 'styled-components'
import { Container, Row, Col, Card } from 'react-bootstrap'
import image5 from '../images/image3.jpg'

export const FirstDiv = styled.div`
    height: 55vh;
    background-image: url(${image5});
    background-size: cover;
    background-position: center;
    display: block;
    position: relative;

    .service {
        position: absolute;
        top: 40%;
        left: 25%;
        transform: translate(-40%, -45%); 
    }
    h1 {
    font-size: 4rem;
    }
`
export const OverLay = styled.div`
height: 55vh;
background: rgba(37, 186, 255, 0.623);
`
export const ServiceCard = styled(Card)`
    height: 60vh;
    padding: 0 20px;
    margin: 20px;
`
export const SecondRow = styled(Row)`
    padding: 50px;
`
export const ThirdRow = styled(Row)`
    padding: 50px;
`