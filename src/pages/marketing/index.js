import Navbar from "../../component/Navbar";

import Feature from "../../component/Feature";

import Review from "../../component/Review";
import News from "../../component/News";
import Contact from "../../component/Contact";
import Footer from "../../component/Footer";


/**
 * Marketing component
 */
export default function Marketing() {
    return (
        <>
            <div>
                <Navbar />
                <Feature />

                <Review />
                <News />
                <Contact />
                <Footer />

            </div>
        </>
    )
}