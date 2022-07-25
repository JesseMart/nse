import './App.css';
import {Navbar} from './components';
import {Header, ContactUs, WhyUs, OurServices, OurTeam} from './containers';



function App() {
  return (
    <div >
      <Navbar />
      <Header />
      <WhyUs />
      <OurServices />
      <OurTeam />
      <ContactUs />
    </div>
  );
}

export default App;
