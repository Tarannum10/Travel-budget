import '../styles/login.css'
import '../styles/background.css'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState ,useEffect,useNavigate} from 'react'
import {NavLink} from 'react-router-dom';
import { auth,db } from '../authentication/firebase';
import { CircleCheckBig } from 'lucide-react';
import { useLogged } from '../context/loginContext';
import { Laugh } from 'lucide-react';
import { toast } from 'react-toastify'

const Login = ()=>{

    const [email,setEmail]=useState('')
    const [pass,setPass]=useState('')
    const [status,setStatus]=useState('')

    const  {setisLogged}=useLogged()

    const handleLogin= async (e)=>{ 
        e.preventDefault()
        if(!email || !pass || !status){
            alert("fill all the inputs properly")
            return
        }
        try{
            await signInWithEmailAndPassword(auth,email,pass)

            const user=auth.currentUser
            console.log(user)
            if(user){
                await setDoc(doc(db,"Users",user.uid),{
                    email: user.email,
                    user_name: username
                })
            }
            console.log("user registered successfully!")
            toast.success("User registered successfully!",{
                position:"top-center"
            })

            setStatus('User Logged in Successfully!!')
            setisLogged(true)
            window.location.href='/profile'           
        }catch(err){ 
            console.error(err)
            toast.success(err.message,{
                position:"bottom-center"
            })
        }
    }

    function handleEmail(e){
        setEmail(e.target.value)
    }

    function handlePass(e){
        setPass(e.target.value)
    }

    console.log(email,pass)

    return(

        // <form onSubmit={handleRegister}>
        //             <div className="registerbox">   
        //                 <h1 className="registerhead">Register</h1>
        //                 <h3>Kindly fill the form to register.</h3>
        
        //                 <div >
        //                     <label>
        //                         <input className="registerinputname" type="text" name='username' value={username} placeholder='Enter username' onChange={(e)=>setUsername(e.target.value)}/>
        //                     </label>
        //                     <br/>
        //                     <label>
        //                         <input className="registerinputname" type="text" name='email' value={email} placeholder='Enter email' onChange={(e)=>setEmail(e.target.value)}/>
        //                     </label>
        //                     <br/>
        //                     <label>
        //                         <input className="registerinputname" type="password" name='password' value={password} placeholder='Enter password' onChange={(e)=>setPassword(e.target.value)}/>
        //                     </label>
        //                     <br/>
        
        //                     <button className="registerbutton">Register</button>
        
        //                     <h3 className="log_in">Already have an account? <NavLink className="log_in1" to="/login" >Log in.</NavLink></h3>
        //                 </div>
        //             </div>
        //         </form>

        <div className="formback">
            {status && (
                    <div className="okmess">{status} <CircleCheckBig color="#1b7709" /></div>
                )}
            <div className="loginform">
                <p className='logoname'>Login</p>
                <label htmlFor="email">Your email</label>
                <input type="email"  placeholder="enter email" onChange={handleEmail} value={email}/>
                <label htmlFor="email">Your password</label>
                <input type="password" placeholder="password" onChange={handlePass} value={pass}/>
                <button className='signup' onClick={handleLogin}>Login</button>
                <p className='register'>New user?<span><NavLink to='/register'>Register</NavLink></span></p>
            </div>
            <div className='copyright'>
                <p>Privacy Policy</p>
                <p>Terms and Conditions</p>
                <p>@2025 by HeeHeee</p>
            </div>
        </div>
    )
}

export default Login


