import Introdaction from "../pages/Introdaction/introdaction";
import style from "./home.module.css";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Navbar/footer/footer";


function Home(){
  return (
    <div className={style.background}>
      
      <Navbar />
      <Introdaction />
      <Footer />
    </div>
  );
}

export default Home;
