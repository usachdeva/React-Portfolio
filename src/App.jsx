import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

function App() {
    return (
        <div>
            <Header />
            <Navbar />
            <AboutMe />
            <Portfolio />
            {/* <Contact /> */}
            <Footer />
        </div>
    );
}

export default App;
