import React from 'react';
import Hero from '../../component/home/hero/Hero';
import Container from '../../component/ui/container/Container';
import Views from '../../component/home/views/Views';
import TrandingApps from '../../component/home/trandingApps/TrandingApps';

const HomePage = () => {
    return (
        <div>
            <Container>
                <Hero/> 
            </Container>
                <Views/>
            <Container>
                <TrandingApps/>
            </Container>
        </div>
    );
};

export default HomePage;