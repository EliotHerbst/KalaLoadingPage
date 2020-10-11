import React from 'react';
import instagram from './instagram.png';
import facebook from './FacebookLogo.png';
import linkedIn from './LI-In-Bug.png';
import { Container, Col, Row } from 'reactstrap';

export default function SocialLinks() {
    const imageCss = {
        width: "20px",
        height: "auto"
    }
    const fbPress = () => {
        setTimeout(function () { window.location.href = "https://www.facebook.com"; }, 25);
        window.location.href = "fb://";
    }
    const liPress = () => {
        setTimeout(function () { window.location.href = "https://www.linkedIn.com"; }, 25);
        window.location.href = "linkedin://";
    }
    const instaPress = () => {
        setTimeout(function () { window.location.href = "https://www.instagram.com"; }, 25);
        window.location.href = "fb://";
    }
    const contStyle = {
        width: '150px'
    }
    return (
        <Container style={contStyle}>
            <Row>
                <Col>
                <div onClick={fbPress}>
                    <img style={imageCss} src={facebook} alt="Facebook"/>
                </div>
                </Col>
                <Col>
                <div onClick={instaPress}>
                    <img style={imageCss} src={instagram} alt="Instagram"/>
                </div>
                </Col>
                <Col>
                <div onClick={liPress}>
                    <img style={imageCss} src={linkedIn} alt="LinkedIn"/>
                </div>
                </Col>
            </Row>
        </Container>
    )
}