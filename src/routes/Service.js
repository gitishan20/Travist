import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../asset/1.jpg"
function Service (){
    return(
        <>
        <Navbar />

      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
         title="Service"
         
         
        
         url="/"
         
      />
    </>
        

         
    );
}
export default Service;
