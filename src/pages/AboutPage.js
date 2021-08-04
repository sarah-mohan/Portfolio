import React from 'react';
import { Container } from 'react-bootstrap';
import Hero from '../components/Hero';

function AboutPage(props){

    return(
        <div>
            <Hero title={props.title}></Hero>
            <Container>
            <p>Hi, I am Nicky. I am an MBA and front end developer with experience in JavaScript, AngularJS, React, Redux, HTML and CSS, and interest in Digital strategies for Gaming and entertainment industries.</p>
           <p>Four years of experience in the industry developed expertise with Agile Software development and Test-driven development. Instrumental in streamlining and improving processes, motivating professional teams, consulting clients, and delegating projects while under time constraints. With the new vision and knowledge of business and management achieved from the MBA, I am looking for a position to utilise my technical skills as well as learn and enhance from new challenges in user experience with a passionate, innovative, and purpose-driven organisation.</p>
           <p>Currently, I am practising React and learning User Experience. I also produce a comedy podcast on social issues- One Tea One.</p>
</Container>
        </div>
    );
}

export default AboutPage;