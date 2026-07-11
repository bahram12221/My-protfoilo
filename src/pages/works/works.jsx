import axios from "axios";
import { useState, useEffect } from "react";
import style from "./works.module.css";
import Navbar from "../../components/Navbar/navbar";
import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import Footer from "../../components/Navbar/footer/footer";
function Works() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1000/projects")
      .then((result) => {
        setProject(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div style={{ backgroundColor: "rgb(4, 4, 18)" }}>
      <Navbar />
      <div className={style.b}>
        {project.map((project) => (
          <div className={style.parent} key={project.id}>
            <div className={style.container}>
              <img style={{ width: "100%" }} src={project.imgUrl} />
              <div className={style.texts}>
                <h1 style={{ color: "white" }}>{project.siteName}</h1>
                <p style={{ color: "gray" }} className={style.p}>
                  {project.information}
                </p>
                  {project.liveDemoUrl}
                  <a style={{padding:"5px 4px"}} className={style.btn} href="">
                  <a className={style.btn} href="#">
                    <FiExternalLink /> Live Demo
                  </a>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}
export default Works;
