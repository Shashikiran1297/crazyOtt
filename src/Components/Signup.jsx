import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {

    let Fname=useRef();
    let Lname=useRef();
    let email=useRef();
    let dob=useRef();
    let pwd=useRef();
    let cpwd=useRef();

    let navigate = useNavigate()

    let  handleAddMovie=(e)=>{
        e.preventDefault();

        let newUser={
            firstName: Fname.current.value ,
            lastName: Lname.current.value ,
            email: email.current.value ,
            Dob: dob.current.value ,
            password: pwd.current.value ,
            confirmPassword: cpwd.current.value,
        }
        fetch("http://localhost:4001/users" , 
                                               {
                                                method : "POST" ,
                                                headers : {"Content-Type" : "application/json"},
                                                body : JSON.stringify(newUser)
                                                 } 
                                                )
        .then(()=>{
          alert("new data added");
         //window.location.reload();
          navigate("/");
         })
    }
    return ( 
        <div className="mainSignup">    
        <form className="signup" onSubmit={handleAddMovie}>
        <h1>Sign up </h1>
          <div className="subsignup">  <label htmlFor="">First Name : </label><input type="text" placeholder="Enter your first name" ref={Fname} /> </div>
           <div className="subsignup"> <label htmlFor="">Last Name : </label><input type="text" placeholder="Enter your last name" ref={Lname} /> </div>
           <div className="subsignup"> <label htmlFor="">Email : </label><input type="email" placeholder=" Enter your PassWord" ref={email} /> </div>
           <div className="subsignup"> <label htmlFor="">Date of birth : </label> <input type="number" ref={dob}  /> </div>
           <div className="subsignup"> <label htmlFor="">Password : </label> <input type="password" placeholder="Enter your password" ref={pwd} /> </div>
           <div className="subsignup"> <label htmlFor="">Confirm password : </label><input type="password" placeholder=" Confirm your password" ref={cpwd} /></div>
           <div className="subsignup"> <input type="submit"  /></div>
        </form>
        </div>
     );
}
 
export default Signup;