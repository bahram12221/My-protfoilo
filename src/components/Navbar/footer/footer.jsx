import style from "./footer.module.css"


function Footer(){
    return(
        <div style={{backgroundColor:""}}>
            <div className={style.footer}>
                <h3>Building modern web experiences with React</h3>
                <div className={style.icons}>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-whatsapp"></i>
                    <i class="fa-brands fa-github"></i>
                </div>
                <p>© 2026 Bahram Mohammadi</p>
            </div>
        </div>
    )
}

export default Footer