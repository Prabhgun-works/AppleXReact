import Navbar from "./components/navbar";
import Hero from "./components/hero";
import ProductViewer from "./components/productViewer";
import Showcase from "./components/showcase";
import Performance from "./components/performance";
import gsap from 'gsap';
import Features from "./components/features";
import Highlights from "./components/highlights";
import { ScrollTrigger , SplitText} from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
export default function App() {
    return(
        <main>
            <Navbar/>
            <Hero/>
            <ProductViewer/>
            <Showcase/>
            <Performance/>
            <Features/>
            <Highlights/>
            <Footer/>
        </main>
    )
}