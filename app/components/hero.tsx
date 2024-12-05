"use client"
import '../../styles/background.css'
import Typewriter from 'typewriter-effect';
const Hero=()=>{
    return(
        <div id='Hero'>
            <section className=" backgroundImage body-font items-center hidden lg:block md:block ">
                
  <div className=" container mx-auto flex content-center px-5 py-24 items-center justify-center flex-col">
    <div className='flex'>

      <h1 className="title-font sm:text-8xl sm:mr-4 sm:mt-20 font-bold text-3xl  mb-4 drop-shadow-lg text-white">
        Hi, it's  
      </h1>
      <h1 className="title-font sm:text-8xl sm:mt-20 font-bold text-3xl sm:ml:2 mb-4 drop-shadow-lg text-purple-800 ">
        Sheza
      </h1>
    </div>
      <div className='flex  text-7xl mt-6 drop-shadow-lg'>
      <div className='  text-purple-600 font-extrabold'>
        I'm a
      </div>
    <div className="text-white font-bold sm:ml-5  ">
    <Typewriter
  options={{
    strings: ['Webdeveloper', 'Graphic designer','Web Designer'],
    autoStart: true,
    loop: true,
  }}
/>
      </div>
      
      </div>
     
  </div>
</section>
<section className=" backgroundImage body-font items-center lg:hidden md:hidden">
                
  <div className=" container mx-auto flex flex-wrap content-center px-5 py-24 items-center justify-center flex-col">
    <div className='flex'>

      <h1 className="title-font mr-3 mt-40 font-bold text-5xl  mb-4 drop-shadow-lg text-white">
        Hi, it's  
      </h1>
      <h1 className="title-font mt-40 font-bold text-5xl sm:ml:2 mb-4 drop-shadow-lg text-purple-800 ">
        Sheza
      </h1>
    </div>
    <h1 className="title-font mt-4 font-bold text-4xl  mb-4 drop-shadow-lg text-purple-800 ">
        I'm a
      </h1>
      <div className='flex  text-3xl  drop-shadow-lg'>
      
    <div className="text-white font-bold   ">
    <Typewriter
  options={{
    strings: ['Webdeveloper', 'Graphic designer','Web Designer'],
    autoStart: true,
    loop: true,
  }}
/>
      </div>
      
      </div>
      {/* <div className="flex justify-center">
        <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Button
        </button>
        <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
          Button
        </button>
    </div> */}
  </div>
</section>

        </div>
    )
}
export default Hero