import React from 'react';
import AppBar from '../Components/AppBar/Appbar';
import Header from '../Components/Header/Header';
import SubHeader from '../Components/SubHeader/SubHeader';
import Form from '../Components/Form/Form';
import Footer from '../Components/Footer/Footer';
// import SuperForm from '../Components/SuperForm/SuperForm';
// import Axios from '../Components/Axios';

export default (): React.ReactElement<React.FC> => (
  <>
    <AppBar />
    <Header />
    <SubHeader />
    <Form />
    <Footer />
    {/* <SuperForm />
    <Axios /> */}
  </>
);
