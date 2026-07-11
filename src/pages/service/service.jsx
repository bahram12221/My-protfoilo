import Footer from "../../components/Navbar/footer/footer";
import Navbar from "../../components/Navbar/navbar";
import style from "./service.module.css";

function Service() {
  return(
    <div style={{backgroundColor:"rgb(8, 8, 33)"}}>
        <Navbar />
    <div className={style.container}>
      <div className={style.loptopPArent}>
        <div className={style.laptopDesign}>
        <div className={style.h2Parent}>
          <div className={style.lineLeft}></div>
          <h2>SERVICE</h2>
          <div className={style.lineRight}></div>
        </div>
        <div className={style.firstBox}>
          <h2>Dedign</h2>
          
          <hr />
          <p className={style.para}>
            Responsive Web Design Creating websites that work perfectly on all
              devices.
          </p>
        </div>
        <div className={style.secondBox}>
          <h2>Development</h2>
          <hr />
          <p className={style.para}>UI Design Clean and user-friendly interfaces</p>
        </div>
      </div>
        </div>
      <div className={style.mobilParent}>
        <div className={style.mobilDesign}>
        <div className={style.h3ParentMobil}>
          <div className={style.lineLeftMobil}></div>
          <h3>SERVICE</h3>
          <div className={style.lineRightMobil}></div>
          </div>
          <div className={style.mobilFirstBox}>
            <h3>Dedign</h3>
            <hr />
            <p style={{color:"gray", marginTop:"5px"}}>
              Responsive Web Design Creating websites that work perfectly on all
              devices.
            </p>
          </div>
          <div className={style.mobilSecondBox}>
            <h3>Development</h3>
            <hr />
            <p style={{color:"gray", marginTop:"5px"}}>UI Design Clean and user-friendly interfaces</p>
          </div>
      </div>
      </div>
    </div>
    <Footer />
    <div className={style.box}></div>
  </div>
  )
}


export default Service