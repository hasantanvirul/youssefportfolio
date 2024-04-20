import Features from "../components/Features";
import Publishings from "../components/Publishings";
import Contact from "../components/Contact";
import VerticalNavbar from "../components/verticalNavbar";
import Hero from "./Hero";
import Footer from "../components/Footer";

const Home = () => {
    return ( 
        <div className="home w-screen">
            <VerticalNavbar className="z-0"/>
            <Hero className="z-0"/>
            <Publishings className="z-50"/>
            <Features className="z-50"/>
            <Contact className="z-50"/>
            <Footer className="z-50"/>
            
        </div>
     );
}
 
export default Home;