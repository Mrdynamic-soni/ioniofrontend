import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import {BsGoogle} from 'react-icons/bs';


const SignUp = () => {
    const url = "http://localhost:8899/users";
    const history = useNavigate();

    const [data, setData] = useState({
        firstname:"",
        lastname:"",
        email:"",
        dob:"",
        contact:"",
        password:"",
        cpassword:""
    });

    function handle(e){
        e.preventDefault();
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        setData(newData);
    }

    async function submit(e){
        e.preventDefault();
        await axios.post(url,{
            firstname:data.firstname,
            lastname:data.lastname,
            email:data.email,
            dob:data.dob,
            contact:data.contact,
            password:data.password,
            cpassword:data.cpassword
        },
        {headers:{'content-type':'application/json'}}
        ).then(res=>{
            if(res.data.message === "Empty fields"){
                alert("Empty fields")
            }
            if(res.data.message==="User exists"){
                alert("User with this email already exists");
            }
            if(res.data.message==="passowrds matched"){
                alert("Password mismatched");
            }        
            if(res.data.message==="User created succesfully"){
                alert("You have been successfully registered")
                history("/");
            }
        }).catch(function(err){
            console.log(err);
        })
    }


    function click(e){
        e.preventDefault();
        history("/")
    }
    
  return (
    <>
        <div>
                <div className='row bg'>
                    <div className='col'>
                        <img src="https://img.freepik.com/free-vector/gradient-mountain-landscape_52683-77407.jpg?w=784" height={700} width={800} alt="" />
                    </div>
                    <div className='col '>
                        <div className='align' >
                            <form className='text-center'>
                                <h3 className='text text-center txt'> Sign Up</h3>
                                <p className='text text-center txt2 py-3'>Enter your Username, email, password to signup</p>

                                <div className=" my-2 form-group">
                                    <input name="firstname"  onChange={(e)=>handle(e)} type="firstname" className="px-3 inputwidth rounded" id="firstname"  placeholder="First Name" />
                                </div>
                                <div className=" my-2 form-group">
                                    <input name="lastname"  onChange={(e)=>handle(e)} type="lastname" className="px-3 inputwidth rounded" id="lastname" placeholder="Last Name" />
                                </div>
                                <div className=" my-2 form-group">
                                    <input  name="email" onChange={(e)=>handle(e)}   type="email" className="px-3 inputwidth rounded" id="email"  placeholder="Email" />
                                </div>
                                <div className=" my-2 form-group">
                                    <input  name="dob" onChange={(e)=>handle(e)} type="date" className="px-3 inputwidth rounded px-3" id="dob" placeholder="Date of Birth" />
                                </div>
                                <div className=" my-2 form-group">
                                    <input name="contact"  onChange={(e)=>handle(e)} type="contact" className="px-3 inputwidth rounded" id="contact" placeholder="Contact" />
                                </div>
                                <div className=" my-2 form-group">
                                    <input name="password"  onChange={(e)=>handle(e)} type="password" className="px-3 inputwidth rounded" id="password" placeholder="Password" />
                                </div>
                                <div className=" my-2 form-group">
                                    <input name="cpassword"  onChange={(e)=>handle(e)} type="password" className="px-3 inputwidth rounded" id="cpassword" placeholder="Confirm Password" />
                                </div>
                                
                                <button type="submit" onClick={(e)=>submit(e)} className=" my-2 sighnupbtn rounded-pill inputwidth btncolor btn btn-primary">SIGN UP</button>
                                <p className='text'>Already have an account? <a href="/" onClick={(e)=>click(e)} className='loginanchor'>Log In</a> </p>
                            </form>
                            <div className='text-center' >
                                <button className='my-2 inputwidth btn btn-primary '> <BsGoogle/> Signup with google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default SignUp