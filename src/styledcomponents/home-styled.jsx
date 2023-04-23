import styled from 'styled-components'
import image5 from '../images/image5.jpg'
import { Container, Row, Col } from 'react-bootstrap';

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