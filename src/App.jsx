import { BrowserRouter } from 'react-router-dom';

import { About, Contact, Education, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas, Publica } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        {/* <Feedbacks /> */}
        <div className='relative z-0'>
          <About />
          <Education />
          <Experience />
          <section className="">
            <Works />
            <Publica />
          </section>
          <section className="z-10">
            <Tech />
          </section>
          <Contact />
        </div>
          <StarsCanvas />
      </div>
    </BrowserRouter>
  );
}

export default App;
