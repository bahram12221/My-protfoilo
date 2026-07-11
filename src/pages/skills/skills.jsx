import vscode from "../../img/vscode.png"
import Navbar from "../../components/Navbar/navbar"
import ps from "../../img/ps.png"
import style from "./skills.module.css"
import Footer from "../../components/Navbar/footer/footer"



function Skills() {
    return(
        <div style={{backgroundColor:"rgb(142, 142, 234)"}}>
        <Navbar />
        <div className={style.parent}>
            
            <h1>My Skills</h1>
            <div className={style.frontEnd}>
                <h2>Front-end</h2>
                <div className={style.frontIcons}>
                    <i class="fa-brands fa-html5"></i>
                <i class="fa-brands fa-css3-alt"></i>
                <i class="fa-brands fa-js"></i>
                <i class="fa-brands fa-react"></i>
                <i class="fa-brands fa-bootstrap"></i>
                </div>
            </div>
            <br />
            <br/>
            <br/>
            <hr />
            <div className={style.backEnd}>
                <h2>Back-end</h2>
                <div className={style.backIcons}>
                    <i class="fa-brands fa-node"></i>
                    <i class="fa-brands fa-python"></i>
                </div>
            </div>
            <br />
            <br/>
            <br/>
            <hr />
            <div className={style.tools}>
                <h2>Tools</h2>
                <div className={style.toolsIcons}>
                    <i class="fa-brands fa-git"></i>
                <i class="fa-brands fa-github"></i>
                <img style={{width:"50px", height:"50px"}} src={vscode} alt="" />
                <i class="fa-brands fa-npm"></i>
                </div>
            </div>
            <br />
            <br/>
            <br/>
            <hr />
            <div className={style.disgin}>
                <h2>Disgin</h2>
                <img src={ps} alt="" />
            </div>
        </div>
        <Footer />
        </div>
    )
}

export default Skills


