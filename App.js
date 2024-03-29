import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Slide from "./components/Slide";
import Items from "./components/Items";
import SignUp from "./SignUp";
import ImageSlider from "./components/ImageSlider";
import Grid from "./components/Grid";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* <SignUp /> */}
      <header>
        <Navbar />
      </header>
      <main className="max-w-[1500px] mx-auto">
        <Items />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;
