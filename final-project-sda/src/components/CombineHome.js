import Home from "../components/Home/Home";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/footer";
import About from "../components/About/About";
import Testimonial from "../components/Testimonial/Testimonial";
import Work from "../components/Work/Work";

const CombineHome = () =>{
    return(
        <>
        <Home/>
        <About/>
        <Work/>
        <Testimonial/>
        <Contact/>
        <Footer/>
        </>
    )

}
export default CombineHome;