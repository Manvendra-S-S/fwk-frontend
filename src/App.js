import './App.css';
import Nav from './navbar/Nav';
import HeroSection from "./heroSection/HeroSection";
import CategorySection  from './categorySection/CategorySection';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
      <Nav/>
      <HeroSection/>
      <CategorySection/>
      <Footer/>
    </div>
  );
}

export default App;
