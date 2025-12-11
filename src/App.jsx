import Navbar from "./components/navbar";
import Hero from "./components/hero";
import ProductViewer from "./components/productViewer";
import gsap from 'gsap';
import { ScrollTrigger , SplitText} from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
export default function App() {
    return(
        <main>
            <Navbar/>
            <Hero/>
            <ProductViewer/>
        </main>
    )
}