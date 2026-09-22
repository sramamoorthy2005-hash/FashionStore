import React, {  useState } from 'react'
import { redirect, useNavigate } from 'react-router-dom';
import { FaRegEyeSlash , FaRegEye } from "react-icons/fa";


const Login = () => {

    //nav
    const nav = useNavigate();
    //toogle 
    const [login,setLogin]=useState(false);

     //password
    const[showpassword,setShowpassword]=useState(true);

    // registerError
    const [registererror,setRegistererror]=useState({});

    //Login error
    const [loginerror,setLoginerror]=useState({});

    //register 
    const[register,setRegister]=useState({
        name:'',
        email:'',
        password:''
    });

    //Login
    const[validate,setValidate]=useState({
        loginName:'',
        loginPassword:''
    });

    //onChange
    const handleChange = (e)=>{
        const{name,value} = e.target;
        setRegister((prev)=>({
            ...prev,
            [name]:value
        }));
    };

    //loginchange
    const loginChange = (e)=>{
        const {name,value}=e.target;
        setValidate((prev)=>({
            ...prev,
            [name]:value
        }));
    };

    

    //submit

    const handleSubmit = (e)=>{
        e.preventDefault();
        let newError = {};
        if(register.name.trim()==''){
            newError.name='Name is required';
        }
        if(register.email.trim()==''){
            newError.email='Email is required';
        }
        if(register.password.trim()==''){
            newError.password='Password is required';
        }
        else if(register.password.trim().length<=6){
            newError.password='at least more than 6 character';
        }

        setRegistererror(newError);
        if(Object.keys(newError).length==0){
            localStorage.setItem('userName',register.name);
            localStorage.setItem('userPassword',register.password);
            alert('Registerd Successfully');
            setRegister({name:'',email:'',password:''});
        }
        
    }
    
    //submit handle

    const handleLogin = (e)=>{
        e.preventDefault();
        let newError = {};
        if(validate.loginName.trim()==''){
            newError.loginName ='Name is wrong';
        }
        if(validate.loginPassword.trim()==''){
            newError.loginPassword='Enter the password'
        }
        else if(validate.loginPassword.trim().length<6){
            newError.loginPassword='Your password is wrong';
        }
        setLoginerror(newError);
        if(Object.keys(newError).length==0){
            let getName = localStorage.getItem('userName');
            let getPass = localStorage.getItem('userPassword');
            if(getName==validate.loginName.trim() && getPass ==validate.loginPassword.trim()){
                alert('Login successfully');
                nav('/home');
            }
            else{
                alert('Invalid ')
            }
        }
    }
   
    
  return (
    <>
        <section className='bg-sky-100  h-screen flex justify-center items-center'>

            {/* register form */}
            <div className='bg-white w-full max-w-md rounded-2xl shadow-2xl p-8'>
                {login ? (
                     <div>
                    <h1 className='text-3xl text-center font-bold mb-6'>Register</h1>
                    <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
                        <div className='relative'>
                            <label htmlFor="name" className='text-sm font-medium block mb-1 text-gray-600'>Name</label>
                            <input type="text"
                            id='name'
                            placeholder='Enter Your Name'
                            name='name'
                            value={register.name}
                            onChange={handleChange}
                            className={`py-2 px-3 w-full border-2 focus:outline-none rounded-lg transition-all
                                        ${registererror.name ? 'border-red-400 focus:ring focus:ring-2 focus:ring-red-300' :
                                            'border-gray-300 focus:border-sky-400  focus:ring focus:ring-2 focus:ring-sky-300'
                                        }
                                `}
                            />
                            <p className='absolute text-sm  text-red-500 '>{registererror.name} </p>
                        </div>

                        <div className='relative'>
                            <label htmlFor="email" className='text-sm font-medium block mb-1 text-gray-600'>Email</label>
                            <input type="email"
                            id='email'
                            placeholder='Enter Your Email'
                            name='email'
                            value={register.email}
                            onChange={handleChange}
                            className={`py-2 px-3 w-full border-2 focus:outline-none rounded-lg transition-all
                                        ${registererror.email ? 'border-red-400 focus:ring focus:ring-2 focus:ring-red-300' :
                                            'border-gray-300 focus:border-sky-400  focus:ring focus:ring-2 focus:ring-sky-300'
                                        }
                                `}
                            />
                            <p className='absolute text-sm  text-red-500 '>{registererror.email}</p>
                        </div>

                        <div className='relative'>
                            <label htmlFor="pass" className='text-sm font-medium block mb-1 text-gray-600'>Password</label>
                            <div className='relative flex items-center'>
                                <input type={showpassword ? 'password' : 'text'}
                                id='pass'
                                value={register.password}
                                name='password'
                                onChange={handleChange}
                                placeholder='Enter Your Password'
                                
                                className={`py-2 px-3 w-full border-2 focus:outline-none rounded-lg transition-all
                                            ${registererror.password ? 'border-red-400 focus:ring focus:ring-2 focus:ring-red-300' :
                                                'border-gray-300 focus:border-sky-400  focus:ring focus:ring-2 focus:ring-sky-300'
                                            }
                                    `}
                                />
                                <span className='absolute right-3 text-xl cursor-pointer' onClick={()=>setShowpassword((prev)=>!prev)}>
                                    {showpassword ? <FaRegEyeSlash/> : <FaRegEye/>}
                                </span>
                            </div>
                            <p className='absolute text-sm  text-red-500 '>{registererror.password}</p>
                        </div>

                        <button className='bg-emerald-500 text-white py-2 px-3 w-full rounded-lg mt-3 hover:bg-emerald-600 cursor-pointer'>Create Account</button>

                        <p className='text-center mt-5'>Already have an account?
                            <button className='text-sm font-medium text-sky-400 hover:underline hover:decoration-2 cursor-pointer' type='button' onClick={()=>setLogin(false)}>
                                            SignIn
                            </button>
                        </p>
                    </form>
                </div>
                ):(
                    <div>
                        <h1 className='text-3xl text-center font-bold mb-6'>SignIn</h1>
                        <form onSubmit={handleLogin} className='flex flex-col gap-6'>
                        <div className='relative'>
                            <label htmlFor="name" className='text-sm font-medium block mb-1 text-gray-600'>Name</label>
                            <input type="text"
                            id='name'
                            placeholder='Enter Your Name'
                            name='loginName'
                            value={validate.loginName}
                            onChange={loginChange}
                            className={`py-2 px-3 w-full border-2 focus:outline-none rounded-lg transition-all
                                        ${loginerror.loginName ? 'border-red-400 focus:ring focus:ring-2 focus:ring-red-300' :
                                            'border-gray-300 focus:border-sky-400  focus:ring focus:ring-2 focus:ring-sky-300'
                                        }
                                `}
                            />
                            <p className='absolute text-sm  text-red-500 '>{loginerror.loginName} </p>
                        </div>

                        

                        <div className='relative'>
                            <label htmlFor="pass" className='text-sm font-medium block mb-1 text-gray-600'>Password</label>
                            <div className='relative flex items-center'>
                                <input type={showpassword ? 'password' : 'text'}
                                id='pass'
                                value={validate.loginPassword}
                                name='loginPassword'
                                onChange={loginChange}
                                placeholder='Enter Your Password'
                                
                                className={`py-2 px-3 w-full border-2 focus:outline-none rounded-lg transition-all
                                            ${loginerror.loginPassword ? 'border-red-400 focus:ring focus:ring-2 focus:ring-red-300' :
                                                'border-gray-300 focus:border-sky-400  focus:ring focus:ring-2 focus:ring-sky-300'
                                            }
                                    `}
                                />
                                <span className='absolute right-3 text-xl cursor-pointer' onClick={()=>setShowpassword((prev)=>!prev)}>
                                    {showpassword ? <FaRegEyeSlash/> : <FaRegEye/>}
                                </span>
                            </div>
                            <p className='absolute text-sm  text-red-500 '>{loginerror.loginPassword}</p>
                        </div>

                        <button className='bg-sky-500 text-white py-2 px-3 w-full rounded-lg mt-3 hover:bg-sky-600 cursor-pointer'>Login</button>

                        <p className='text-center mt-5'>You don't have an account?
                            <button className='text-sm font-medium text-green-500 hover:underline hover:decoration-2 cursor-pointer' type='button' onClick={()=>setLogin(true)}>
                                            Register
                            </button>
                        </p>
                    </form>
                    </div>
                )}
               
            </div>
        </section>
    </>
  )
}

export default Login