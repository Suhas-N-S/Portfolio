import React from 'react';
import { Link } from 'react-router-dom';
import { arrow } from '../assets/icons';

const InfoBox = ({ text, link, btnText }) => (
    <div className='info-box'>
        <p className='font-medium sm:text-xl text-center'>
            {text}
        </p>
        <Link to={link} className='neo-brutalism-white neo-btn'>
            {btnText}
            <img src={arrow} className='w-4 h-4 object-contain' />
        </Link>
    </div>
)

const renderContent = {
    1: (
        <h1 className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
            Hi, I am <span className='font-semibold'>Suhas</span> 👋 <br />
            A Software Engineer from India
        </h1>
    ),
    2: (
        <InfoBox
            text={"Crafted scalable solutions as a Software Engineer at Thales India, contributing to critical systems with a focus on performance and reliability."}
            link="/about"
            btnText="Learn More"
        />
    ),
    3: (
        <InfoBox
            text={"Developed and launched real-world web applications with seamless UX and production-ready performance"}
            link="/projects"
            btnText="Visit my portfolio"
        />
    ),
    4: (
        <InfoBox
            text={"Looking for a developer to bring your vision to life? I'm only a click away"}
            link="/contact"
            btnText="Let's Talk"
        />
    ),
}

const HomeInfo = ({ currentStage }) => {
    return renderContent[currentStage] || null;
}

export default HomeInfo