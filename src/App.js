import {
  Navbar,
  Home,
  About,
  Teacher,
  Course,
  Contact,
  Footer,
} from "./components/main";

function App() {
  return (
    <div className="font-Poppins bg-Solitude">
      <Navbar />
      <Home />
      <About />
      <Course />
      <Teacher />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
