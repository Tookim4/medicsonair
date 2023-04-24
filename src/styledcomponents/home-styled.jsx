import styled from 'styled-components'
import image5 from '../images/image5.jpg'
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export const LandDiv = styled.section`
    height: 80vh;
    width: 100%;
    background-image: url(${image5});
    background-size: cover;
    background-position: center;
    position: relative;

    .intro {
        width: 100%;
        position: absolute;
        top: 40%;
        left: 45%;
        transform: translate(-40%, -45%);
    }
    h1, p {
        color: #fff;
    }
`
export const OverLay = styled.div`
height: 80vh;
background: rgba(24, 24, 35, 0.904);
  
`
export const LandBtn = styled(Link)`
display: inline-block;
text-decoration: none;
  /* background-color: #ffffff; */
  border: 2px solid #C0EEF2;
  color: #C0EEF2;
  padding: 10px 20px;
  margin:10px;
  transition: all 1s ease;

    &:hover {
        background-color: #C0EEF2;
        color: #181823;
        /* width: 100%; */
    }
`
export const HomeButton = styled(Link)`
display: inline-block;
  background-color: #ffffff;
  border: 2px solid #C0EEF2;
  color: #000000;
  padding: 10px 20px;
  margin:10px;
  transition: all 1s ease;

    &:hover {
        background-color: #C0EEF2;
        color: #181823;
        /* width: 100%; */
    }
`

export const ServiceRow = styled(Row)`
padding: 50px;
`
export const ServiceCol = styled(Col)`
padding: 50px;
`
export const AboutRow = styled(Row)`
padding: 50px;
`
export const AboutCol = styled(Col)`
padding: 50px;
`
export const LastContainer = styled(Container)`
padding: 50px;
`