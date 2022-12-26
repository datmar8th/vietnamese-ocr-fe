import React from "react";

import Header from "./containers/Header/Header";
import HowItWorks from "./containers/HowItWorks/HowItWorks";
import Ocr from "./containers/Ocr/Ocr";
import Footer from "./containers/Footer/Footer";

const App = () => {
  return (
    <React.Fragment>
      <Header />
      <Ocr />
      <HowItWorks />
      <Footer />
    </React.Fragment>
  );
};

export default App;
