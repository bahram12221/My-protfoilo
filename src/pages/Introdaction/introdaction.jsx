import style from "./introdaction.module.css";
import bahram from "../../img/bahram.jpg";

function Introdaction() {
  return (
    <div className={style.parent}>
      <div className={style.container}>
        <div style={{ width: "50%", paddingTop: "40px" }}>
          <h1 style={{ color: "hsl(0, 4%, 89%)" }}>I am Bahram</h1>
          <h1 className={style.h1}>Web Developer + Responsive Developer</h1>
          <p style={{ color: "gray" }}>
            I build modern, responsive websites, fast and user-friendly
          </p>
          <div className={style.icons}>
            <a href="tel:+93747934525">
              <i className="fa-solid fa-phone"></i>
            </a>
            <a
              href="https://wa.me/93747934525?text=سلام20%من20%از20%وبسایت20%شما20%پیام20%میدهم"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>
        <div className={style.parentImg}>
          <img className={style.img} src={bahram} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Introdaction;
