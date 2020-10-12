import React from 'react';
import instagram from './instagram.svg';
import facebook from './FacebookLogo.png';
import linkedIn from './LI-In-Bug.png';
import { Container, Col, Row } from 'reactstrap';

export default function SocialLinks() {
    const imageCss = {
        width: "50px",
        height: "auto"
    }
    const fbPress = () => {
        setTimeout(function () { window.location.href = "https://www.facebook.com/Kala_decor-106973361184646/"; }, 25);
        window.location.href = "fb://Kala_decor-106973361184646/";
    }
    const liPress = () => {
        setTimeout(function () { window.location.href = "https://www.linkedin.com/company/kala-design"; }, 25);
        window.location.href = "linkedin://company/kala-design";
    }
    const instaPress = () => {
        setTimeout(function () { window.location.href = "https://www.instagram.com/_kala.decor?r=nametag"; }, 25);
        window.location.href = "instagram://_kala.decor?r=nametag";
    }
    const contStyle = {
        width: '240px'
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