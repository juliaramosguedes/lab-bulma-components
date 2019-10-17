import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import FormField from './components/FormField/FormField';
import CoolButton from './components/CoolButton/CoolButton';

const App = () => {
  return (
    <div>
      <Navbar />
      <section id="signup">
        <FormField label="Name" type="text" placeholder="Input your name" />
        <FormField label="E-mail" type="email" placeholder="Input your e-mail" />
        <FormField label="Password" type="password" />
        <CoolButton isSuccess text="Submit" />
      </section>
    </div>
  );
};

export default App;
