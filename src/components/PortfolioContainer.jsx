import { useState } from "react";
import NavTabs from "./NavTabs";
import About from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Experience from "./pages/Experience";
import Footer from "./Footer";

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState("Home");

    // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
    const renderPage = () => {
        if (currentPage === "Home" || currentPage === "About Me") {
            return <About />;
        }
        if (currentPage === "Contact") {
            return <Contact />;
        }
        if (currentPage === "Experience") {
            return <Experience />;
        }
        return <Contact />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {/* We are passing the currentPage from state and the function to update it */}
            <NavTabs
                currentPage={currentPage}
                handlePageChange={handlePageChange}
            />
            {/* Here we are calling the renderPage method which will return a component  */}
            <main className="mx-3">{renderPage()}</main>
            {/* For the footer */}
            <Footer />
        </div>
    );
}
