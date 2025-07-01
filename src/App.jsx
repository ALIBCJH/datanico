import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  Navbar,
  Products,
  Footer,
  Partners,
  Contact,
  Testimonial,
} from "./components";
import ScrollToTop from "./components/ScrollToTop";
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
      <div className="bg-white min-h-screen flex flex-col">
        <Navbar />

        <div className="flex-grow">
          <Routes>
            {/* Home SPA page with scrollable sections */}
            <Route
              path="/"
              element={
                <>
                  <section id="home">
                    <Home />
                  </section>
                  <section id="about">
                    <About />
                  </section>
                  <section id="partners">
                    <Partners />
                  </section>
                  <Testimonial />
                  <section id="resources">
                    <Resources />
                  </section>
                </>
              }
            />

            {/* Other full pages */}
            <Route path="/products" element={<Products />} />
            <Route path="/claims" element={<Claims />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/quote" element={<Quote />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/insurancetips" element={<InsuranceTips />} />
            <Route path="/claimpage" element={<ClaimPage />} />
            <Route path="/requirementclaim" element={<RequirementClaim />} />
            <Route path="/faqs" element={<Faqs />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
