import './App.css';
import {Navbar, CTA, Title, CenteredText, CTA2} from './components';
import Footer from './components/Footer';
import {Header, ContactUs, WhyUs, OurServices} from './containers';



function App() {
  return (
    <div >
      <Navbar />
      <Header />
      <Title />
      <OurServices />
      <CTA />
      <WhyUs />
      <CTA2 />
      <CenteredText />
      {/* <OurTeam /> */}
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
