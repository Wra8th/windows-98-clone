import React from 'react';
import Styles from './App.module.css';
import About from './components/windows/AboutMe';
import IconComponent from './components/IconComponent';
import Footer from './components/FooterComponent'

const App = () => {
  return (
    <>
    <div className={Styles.mainer}>
      <div className={Styles.body}>
        <IconComponent />
      </div>
      <div className={Styles.footer}>
        <Footer />
      </div>
    </div>
    </>
  );
}

export default App;
