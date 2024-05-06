import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
function Home() {
  return (
    <>
      <Navbar />

      <Hero
        cName="hero"
        heroImg="https://images.unsplash.com/photo-1586016413664-864c0dd76f53?q
         =80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1w
         YWdlfHx8fGVufDB8fHx8fA%3D%3D"
         title="Your Journey Your Story"
         text="Choose Your Favorite Destination"
         buttonText="Travel Plan"
         url="/"
         btnClass="Show"
      />
    </>
  );
}

export default Home;
