import './App.css';
import {Navbar, CTA} from './components';
import Footer from './components/Footer';
import {Header, ContactUs, WhyUs, OurServices, OurTeam} from './containers';



function App() {
  return (
    <div >
      <Navbar />
      <Header />
      <WhyUs />
      <CTA />
      <OurServices />
      <OurTeam />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
