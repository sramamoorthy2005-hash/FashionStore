import React from 'react'

const Login = () => {
  return (
    <div>
        <section className='h-screen bg-sky-100 flex justify-center items-center'>
            <div className='bg-white w-180 h-150 rounded-xl shadow-2xl flex'>
                <div className='w-120 h-full bg-red-400 rounded-xl p-15'>
                    <h1 className='text-5xl text-gray-200  font-bold text-center'>Register</h1>
                    <div className='bg-white w-90 h-70 mt-15 rounded-3xl p-5'>
                        <form action="">
                            <label htmlFor="" className='inline-block w-24 mb-7'><span className='text-xl'>Name :</span> </label> <input className='py-1 px-4 border-2 border-gray-400 rounded-xl' type="text"  placeholder='Enter Your Name' /> <br />
                            <label htmlFor="" className='inline-block w-24 mb-7'><span className='text-xl'>Password :</span> </label> <input className='py-1 px-4 border-2 border-gray-400 rounded-xl' type="password"  placeholder='Enter Your Password' /> <br />
                            <label htmlFor="" className='inline-block w-24'><span className='text-xl'>Email : </span> </label> <input className='py-1 px-4 border-2 border-gray-400 rounded-xl' type="email"  placeholder='Enter Your Email' /> <br />
                        </form>
                    </div>
                </div>
                <div >
                    <button type='button' className='border-2 border-black py-1 px-4 rounded-xl'>LoginPage</button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Login