import React from 'react';
import home from "../images/home.svg";
import Common from './Common';

const Home = () => {
    return (
        <>
            <Common 
                name='Example reactJS template' 
                imgsrc={home} 
                isCompName={true}
                compName="to deploy on AWS Amplify "
                visit='/services' 
                btnname="Get Started" 
            />
        </>
    )
}

export default Home;
