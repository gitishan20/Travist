import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../asset/2.jpg"
function Contact (){
    return(
        <>
        <Navbar />

      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
         title="Contact"
         
         
        
         url="/"
         
      />
    </>
        

         
    );
}
export default Contact;