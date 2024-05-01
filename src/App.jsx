import "./App.css";
import Banner from "./components/Banner";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <About />
      <Portfolio />
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
