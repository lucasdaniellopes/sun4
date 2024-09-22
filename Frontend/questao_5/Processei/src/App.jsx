import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import FAQList from "./components/FAQList";
import ContactUsForm from "./components/ContactUsForm";
import "./styles/globals.css";
import HowItWorks from "./components/HowItWorks";
import Plans from "./components/Plans";

function App() {
  return (
    <>
      <Header />
      <main className="mt-[72px]">
        <Hero />
        <HowItWorks />
        <Plans />
        <FAQList />
        <ContactUsForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
