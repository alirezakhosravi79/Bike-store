import BestSeller from "../components/BestSeller"
import Features from "../components/Features"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import Products from "../components/Products"

function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Features />
        <BestSeller />
        <Products />
        <Footer />
    </div>
  )
}

export default Home