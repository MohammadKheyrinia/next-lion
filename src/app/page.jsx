import Categories_card from "./components/Categories_card";
// import ForooshV from "./components/ForooshV";
import Nav from "./components/Nav";
// import Products from "./components/products";
import Slider from "./components/Slider";
import Footer from "./components/Footer";
import SystemA from "./components/SystemA";
import Brands from "./components/Brands";
import Usercomments from "./components/Usercomments";
// import Newestcpu from "./components/Newestcpu";
import Newestcpuu from "./components/Newestcpuu";
import NewestM from "./components/NewestM";


export default function Home() {


  return (
    <>
      <Nav />
      <Slider />
      {/* <ForooshV /> */}
      {/* <Products /> */}
      <Newestcpuu />
      <NewestM />
      {/* <Newestcpu /> */}
      <Categories_card />
      <Brands />
      <SystemA />
      <Usercomments />
      <Footer />
    </>
  )
}