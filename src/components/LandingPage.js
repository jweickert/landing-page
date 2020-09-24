import React from 'react';

import Header from './Header';
import Card from './Card';
import Contact from './Contact';
import About from './About';

import '../styles/LandingPage.css';

const LandingPage = () => {
    return (
      <div id="body">
        <Header />
        <About />
        <Card className='patients'
              img='https://www.pngkey.com/png/full/33-337638_medicine-logo-png-1-medical-logo.png'
              title='Patients'
              description='HIMS is an all-in-one hub for patient/doctor/insurance communication and management of health plans.'/>
        <Card className='doctors'
              img='https://www.pngkey.com/png/full/33-337638_medicine-logo-png-1-medical-logo.png'
              title='Doctors'
              description='HIMS is an all-in-one hub for patient/doctor/insurance communication and management of health plans.'/>
        <Card className='insurance'
              img='https://www.pngkey.com/png/full/33-337638_medicine-logo-png-1-medical-logo.png'
              title='Insurance Providers'
              description='HIMS is an all-in-one hub for patient/doctor/insurance communication and management of health plans.'/>
        <Contact />
      </div> 
    )
  }

  export default LandingPage;