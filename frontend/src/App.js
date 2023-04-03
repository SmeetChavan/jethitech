import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";
import Blogs from "./components/Blogs";
import TeamMembers from "./components/TeamMembers";
import Offerings from "./components/Offerings";

function App() {
  return (
    <>
      <Navbar/>

      <div className="container" id="one">
        <div className="container1-text">Making Your <span id="realEstate">Real Estate</span> Purchase Journey Faster And Transparent</div>
      </div>

      <div className="container" id="two">

        <div className="img-2"></div>

        <div>
          
          <div className="who">Who We Are</div>
          <div className="who-description">The Indian real estate sector is resilient despite global headwinds. Returns are impressive and the sector is expected to reach US$ 1 trillion in market size by 2030 (Niti Aayog report, 2021). However, the whole real estate purchase journey is very tedious and takes more than 2 years on average. Further, as the ticket size of this investment is large, security and trust become quite critical. Problems compound when you are currently away from your purchase destination. If you are experiencing difficulties in the real estate purchase journey, we are here to make it fast and transparent.</div>
        </div>
      </div>

      <Offerings/>

      <TeamMembers/>

      <Blogs/>

      <ContactUs/>

      <Footer/>

    </>

  );
}

export default App;