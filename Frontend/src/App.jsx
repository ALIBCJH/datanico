import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Hero,
  Navbar,
  Works,
  Footer,
  Partners,
  Contact,
  Testimonial,
} from "./components";
import ScrollToTop from "./components/ScrollToTop";
import Service from "./pages/Services";
import Quote from "./pages/Quote";
import About from "./components/About";
import Claims from "./components/Claims";
import Resources from "./components/Resources";
import Blogs from "./pages/Blogs";
import InsuranceTips from "./pages/InsuranceTips";
import ClaimPage from "./pages/ClaimPage";
import RequirementClaim from "./pages/RequirementClaim";
import Faqs from "./pages/Faqs";

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-white min-h-screen">
        <Navbar />

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />

                <section id="about">
                  <About />
                </section>

                <section id="products">
                  <Works />
                </section>

                <section id="claims">
                  <Claims />
                </section>

                <section id="partners">
                  <Partners />
                </section>

                <section id="contact">
                  <Contact />
                </section>

                <Testimonial />

                <section id="resources">
                  <Resources />
                </section>

                <Footer />
              </>
            }
          />

          <Route path="/services" element={<Service />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/insurancetips" element={<InsuranceTips />} />
          <Route path="/claimpage" element={<ClaimPage />} />
          <Route path="/requirementclaim" element={<RequirementClaim />} />
          <Route path="/faqs" element={<Faqs />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
