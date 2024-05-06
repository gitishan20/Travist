import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../asset/night.jpg"
function About (){
    return(
        <>
        <Navbar />

      <Hero
        cName=".hero-mid"
        heroImg={AboutImg}
         title="About"
         
         
        
         url="/"
         
      />
    </>
        

        
    );
}

export default About;