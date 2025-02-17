import "./App.css";
import About from "./components/about/About";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Services from "./components/services/Services";
import Testimonials from "./components/testimonials/Testimonials";


function App() {
    return (
        <>
            <Header/>
            <main className="main">
                <Home/>
                <About/>
                <Services/>
                <Testimonials/>

                <Contact/>
            </main>
            <Footer/>
            <ScrollUp/>
        </>
    );
}

export default App;