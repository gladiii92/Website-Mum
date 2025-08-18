import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
// Pages
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import Shop from "./pages/Shop";
import Home from "./pages/Home"; // Entfernt Pages.jsx, da Duplikat

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        {/* Redirect von Root */}
        <Route path="/" element={<Navigate to="/home" />} />
        {/* Hauptseiten */}
        <Route path="/home" element={<Layout><Home /></Layout>} />
        <Route path="/shop" element={<Layout><Shop /></Layout>} />
        <Route path="/services" element={<Layout><Services /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
        {/* Fallback für 404 */}
        <Route path="*" element={<Layout>404 - Seite nicht gefunden</Layout>} />
      </Routes>
    </>
  );
}
