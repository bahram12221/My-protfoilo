import Footer from "../../components/Navbar/footer/footer"
import Navbar from "../../components/Navbar/navbar"
import style from "./contact.module.css"


function Contact(){
    return(
        <div style={{backgroundColor:"rgb(142, 142, 234)"}}>
            <div style={{ width:"100%"}}>
            <Navbar />
            </div>
            <form action="https://formsubmit.co/mohammadibahram36@gmail.com" method="POST" className={style.contactBox}>
                <h2>Contact Me</h2>
                <input type="text" />
                <input type="email" name="" id="" />
                <textarea name="" id=""></textarea>
                <button type="submit">Send Message</button>
            </form>
            <Footer />
        
        </div>
    )
}


export default Contact