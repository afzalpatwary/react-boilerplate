import { BrowserRouter, Route, Routes } from "react-router-dom"
import Banner from "./Components/banner/Banner"
import CartSidebar from "./Components/cartSidebar/CartSidebar"
import Footer from "./Components/footer/Footer"
import Header from "./Components/header/Header"
import About from "./pages/about/About"
import Contact from "./pages/contact/Contact"
import Home from "./pages/home/Home"


function App() {

  return (
    <BrowserRouter>
      <Header />
      <CartSidebar />
      <Banner />
      <Footer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
