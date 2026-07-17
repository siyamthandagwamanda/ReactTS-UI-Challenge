import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Services from "./components/Services/Services"
import About from "./components/About/About";
import Statistics from "./components/Statistics/Statistics";
import Footer from "./components/Footer/Footer";

function App(){
    return (
        
        <>
            <main className="hykrox-label">
               <Navbar />
               <Hero />
               <Services />
               <About />
               <Statistics />
               <Footer />
            </main>
        </>
    );
}

export default App;