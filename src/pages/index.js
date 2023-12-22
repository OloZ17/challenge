import React from 'react';
import Home from '../components/Home';
import Header from '../components/Header';
import Resume from '../components/Resume';

import { useState } from 'react';

import '../style/main.scss';
import About from '../components/About';

const IndexPage = () => {
  const [presentedPage, setPresentedPage] = useState('Home');

  function handlePresentation(linkId) {
    setPresentedPage(linkId);
    console.log(presentedPage);
  }

  console.log(presentedPage);

  return (
    <main>
      <Header onClickLink={handlePresentation} />
      {presentedPage == 'Home' && <Home />}
      {presentedPage == 'About' && <About />}
      {presentedPage == 'Resume' && <Resume />}
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Magic</title>;
