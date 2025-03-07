import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import WorkFlow from './components/WorkFlow';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <Hero />
        <Features />
        <WorkFlow />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </div>
  )
}

export default App
