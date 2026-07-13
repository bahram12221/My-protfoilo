import Footer from "../../components/Navbar/footer/footer"
import Navbar from "../../components/Navbar/navbar"
import style from "./contact.module.css"
import emailjs from "@emailjs/browser"
import { useForm } from "react-hook-form"


function Contact(){
    const {
      register,
      handleSubmit,
      formState: {errors},
      reset,
    } = useForm({
      mode: "onChange"
    })

  function sendEmail(data) {

    emailjs.send(
      "service_i5i80na",
      "template_2sji2h9",
       data,
      "U5lhFdQ2eB8RJ06ql"
    ).then(() => { 
      alert("sended message successfully")
      reset();
    }).catch((error) => {
      console.log(error);
      alert("error")
    })
  }
    return(
        <div style={{backgroundColor:"rgb(142, 142, 234)"}}>
            <div style={{ width:"100%"}}>
            <Navbar />
            </div>
            <form onSubmit={handleSubmit(sendEmail)} className={style.contactBox}>
                <h2>Contact Me</h2>
                <p>Full Name:</p>
                <input 
                type="text"  
                placeholder="Enter Your Name"
                {...register("name",{
                    required: "Name Is Required",
                    minLength:{
                        value: 3,
                        message: "Name Must Be At 3 Characters"
                    }
                })}
                />
                {errors.name &&(
                    <p style={{color: 'red', fontSize: '14px'}}>{errors.name.message}</p>
                )}
                <p>Email:</p>
                <input 
                type="email" 
                placeholder="Enter Your Email" id=""
                {...register("email",{
                    required: "Email Is Required",
                    minLength:{
                        value: 10,
                        message: "Email Must Be At 10 Characters"
                    }
                })}
                
                />
                {errors.email && (
                    <p style={{color: 'red', fontSize: '14px'}}>{errors.email.message}</p>
                )}
                <p>Message:</p>
                <textarea 
                placeholder="What Do You Want?"
                {...register("subject", {
                    required: 'Subject Is Required',
                    minLength:{
                        value: 5,
                        message: "Subject Must Be At 5 Characters"
                    }
                })}
                ></textarea>
                {errors.subject && (
                    <p style={{color: 'red', fontSize: '14px'}}>{errors.subject.message}</p>
                )}
                <button type="submit">Send Message</button>
            </form>
            <Footer />
        
        </div>
    )
}


export default Contact