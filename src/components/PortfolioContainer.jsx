import { useState } from "react";
import Header from "./Header";
import NavTabs from "./Navbar";
import About from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Experience from "./pages/Experience";
import Footer from "./Footer";

export default function PortfolioContainer() {
    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
        },
        headerNav: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
            borderBottom: "2px solid black",
        },
    };

    const [currentPage, setCurrentPage] = useState("Home");

    const renderPage = () => {
        switch (currentPage) {
            case "Home":
            case "AboutMe":
                return <Experience />;
            case "Contact":
                return <Contact />;
            case "Experience":
                return <Experience />;
            case "Resume":
                return <Resume />;
            default:
                return <Contact />;
        }
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div style={styles.container}>
            <div style={styles.headerNav}>
                <Header />
                <NavTabs
                    currentPage={currentPage}
                    handlePageChange={handlePageChange}
                />
            </div>
            <main className="">{renderPage()}</main>
            <Footer />
        </div>
    );
}
