import React, {useState} from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios';
import {BsGoogle} from 'react-icons/bs';

const Login = () => {
    const url = "http://localhost:8899/signin";
    const navigate = useNavigate();

    const [data, setData] = useState({
        email:"",
        password:"",
        check:""
    });

    function handle(e){
        e.preventDefault();
        const newData = {...data};
        newData[e.target.id] = e.target.value;
        setData(newData);
        console.log(newData);
    }

    async function autherizelogin(e){
        e.preventDefault();
        await axios.post(url,{
            email:data.email,
            password:data.password,
            check:data.check
        },
        {headers:{'content-type':'application/json'}}
        ).then(res=>{
            console.log(res.data);
            if(res.data.message === "Invalid Credentials"){
                alert("Invalid Credentials");
            }
            if(res.data.message ===  "User does not exist" ){
                alert("User does not exist");
            }
            if(res.data.message === "User Signed In successfully"){
                alert("User Signed in scuccessfully");
                navigate("/DynamicProductCat");
            }
        }).catch(function (err){
            console.log(err);
        })
    }

    const submit= (e)=>{
        e.preventDefault();
        navigate("/SignUp");
    }

    return (
        <>
            <div>
                <div className='row bg'>
                    <div className='col'>
                        <img src="https://img.freepik.com/free-vector/gradient-mountain-landscape_52683-77407.jpg?w=784" height={700} width={800} alt="" />
                    </div>
                    <div className='col '>
                        <div className='align py-5' >
                            <form className='text-center'>
                                <h3 className='text text-center txt'> Sign In</h3>
                                <p className='text text-center txt2 py-3'>Enter your Email and Password to Sign in</p>

                                <div className=" my-2 form-group">
                                    <input name="email" onChange={(e)=>handle(e)} type="email" className="px-2 inputwidth rounded" id="email" aria-describedby="emailHelp" placeholder="Email" />
                                </div>
                                <div className=" my-2 form-group">
                                    <input name="password" onChange={(e)=>handle(e)} type="password" className="px-2 inputwidth rounded" id="password" placeholder="Current Password" />
                                </div>
                                {/* <div className=" my-2 form-group inputwidth custom-control custom-switch">
                                    <input name="check"  onChange={(e)=>handle(e)} type="checkbox" className=" custom-control-input" id="check"  />
                                    <label className="form-check-label mx-2">Remember me</label>
                                </div> */}
                                <button type="submit" className=" my-2 inputwidth btncolor btn btn-primary" onClick={(e)=>autherizelogin(e)}>SIGN IN</button>
                                <p className='text'>Don't have an account? <a href="/SignUp" onClick={(e)=>submit(e)} className='loginanchor'>Sign Up</a> </p>
                            </form>
                            <div className='text-center' >
                                <button className='my-2 inputwidth btn btn-primary '> <BsGoogle/> Login with google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login