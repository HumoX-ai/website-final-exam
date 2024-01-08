import Contact from "./components/contact";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";

function App() {
  return (
    <div className="container mx-auto px-2">
      <Header />
      <Hero />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
