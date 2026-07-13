import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Layout from "./components/Layout";
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ProductDetail from "./pages/ProductDetail";  // Neu: Import der Detailseite (passe Pfad an)
import AGB from "./pages/AGB";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";


export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Helmet>
          <title>Ursula Heinke - Lebensberatung & Coaching</title>
          <meta name="description" content="Lebensbeartung & Coaching - Ursula Heinke" />
        </Helmet>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" replace />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/product/:slug" element={<ProductDetail />} /> 
          <Route path="/agb" element={<AGB />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="*" element={<div>404 - Seite nicht gefunden</div>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

