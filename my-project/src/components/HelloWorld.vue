<script setup>
import { ref } from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
</script>

<template>
  <!--<div class="  bg-white py-8 px-8 max-w-sm mx-auto  rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
    <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:shrink-0" src="https://thiscatdoesnotexist.com/" alt="">
    <div class=" text-center space-y-2 sm:text-left text-black">
      <div class="space-y-0.5">
        <p class=" text-lg text-black font-semibold">Gary Cat</p>
        <p class="text-slate-500 font-medium">Cool Guy</p>
      </div>
      <button class="bg-white px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
      
    </div>
   
  </div> -->




  <div class="flex mx-auto p-20 py-10 text-black lg:text-9xl snap-center mt-28 relative  justify-center bg-white  shadow-md shadow-black border-2 border-solid">

    
    
    

      <div class="mx-auto z-10 bg-white  font-shrikhand" >
        <b>Austin</b> <br>
        <b>Dye</b>
      </div>
      <div class="mx-auto z-20 top-0 bg-orange rounded-full shadow-md shadow-black border-2 border-solid">
        <img class=" rounded-full" src="../assets/img/me.png" alt="">
        </div>
   
        <div class="z-20 flex absolute bottom-10 right-1/2">
          <div class="bg-white hover:bg-darkblue group cursor-pointer ease duration-200 shadow-md shadow-black rounded-full p-5 border-2 border-solid text-black z-10 w-44 h-44 flex justify-center items-center ">
            <b class="ease duration-100 font-shrikhand text-2xl text-darkblue group-hover:text-white ">Developer</b>
          </div>
    
          <div class=" bg-white hover:bg-blue group ease duration-200 cursor-pointer shadow-md shadow-black rounded-full p-5 border-2 border-solid text-black z-20 w-44 h-44 flex justify-center items-center ">
            <b class="ease duration-100 font-shrikhand text-2xl text-blue group-hover:text-white">Designer</b>
          </div>
    
          <div class="bg-white hover:bg-orange ease duration-200 cursor-pointer shadow-md group shadow-black rounded-full p-5 border-2 border-solid text-black z-30 w-44 h-44 flex justify-center items-center ">
            <b class="ease duration-100 font-shrikhand text-xl text-orange group-hover:text-white">Automation</b>
          </div>
        </div>
    </div>

 

     

   
   
  



  <div class="border-solid border-2  text-black mt-72 md:p-10  snap-center  snap-always bg-white shadow-md shadow-darkblue">
    <div class="container mx-auto ">
      <div class="flex flex-col  items-center justify-center text-black relative">
      <div class="flex items-center justify-center">

        <div class=" bg-darkblue -skew-y-12 rounded-full flex w-96 h-96 relative shadow-md shadow-black text-black border-2 border-solid">
          
          <h2 class="md:text-6xl text-5xl z-20 font-bold absolute font-shrikhand  left-3 top-20 text-center text-white ">Full <br> Stack Developer</h2>
         
          
        </div>
        <div class=" md:px-20 w-1/2 flex font-lora">
          
          <p class="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id, magni dignissimos voluptates excepturi dolorem ratione nesciunt quidem sit. Dolor rem mollitia repellat architecto sit explicabo quidem, consequuntur ad aliquid?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id, magni dignissimos voluptates excepturi dolorem ratione nesciunt quidem sit. Dolor rem mollitia repellat architecto sit explicabo quidem, consequuntur ad aliquid?
          </p>

          
        </div>
      </div>
       
    

        <div class="container flex justify-center text-black">
          <div class="md:columns-6 mx-auto flex  md:gap-10">
            <div class=" lg:w-48 md:w-32 p-2 ">
              <img class="" src="https://www.vectorlogo.zone/logos/vuejs/vuejs-ar21.png" alt="">
            </div>
            <div class=" lg:w-48 md:w-32 p-6">
              <img class=" " src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" alt="">
            </div>
            <div class=" lg:w-48 md:w-32 p-2">
              <img class="" src="https://logovectorseek.com/wp-content/uploads/2019/10/bootstrap-logo-vector.png" alt="">
            </div>
            <div class="lg:w-48 md:w-32 pt-10 p-2">
              <img class="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tailwind_CSS_logo.svg/2560px-Tailwind_CSS_logo.svg.png" alt="">
            </div>
            <div class=" lg:w-48 md:w-32 md:p-2 p-6">
              <img class="" src="https://logos-world.net/wp-content/uploads/2022/01/NET-Framework-Logo.png" alt="">
            </div>
          </div>
          
        </div>
        
   
        <div class="bg-white shadow-md shadow-black rounded-full p-5 border-2 border-solid text-black  w-40 h-40 flex justify-center items-center -right-20 -top-20 absolute">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-36 h-36 text-black">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
          </svg>
          </div>
       
      </div>
    </div>
  
    <!--<div class="container flex justify-center mx-auto text-black">
      <div class="md:columns-3 columns-2   mt-10 md:gap-24">
        <div class=" lg:w-48 md:w-32 p-2 ">
          <img class="" src="https://www.vectorlogo.zone/logos/vuejs/vuejs-ar21.png" alt="">
        </div>
        <div class=" lg:w-48 md:w-32 p-6">
          <img class=" " src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" alt="">
        </div>
        <div class=" lg:w-48 md:w-32 p-2">
          <img class="" src="https://logovectorseek.com/wp-content/uploads/2019/10/bootstrap-logo-vector.png" alt="">
        </div>
        <div class="lg:w-48 md:w-32 pt-10 p-2">
          <img class="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tailwind_CSS_logo.svg/2560px-Tailwind_CSS_logo.svg.png" alt="">
        </div>
        <div class=" lg:w-48 md:w-32 md:p-2 p-6">
          <img class="" src="https://logos-world.net/wp-content/uploads/2022/01/NET-Framework-Logo.png" alt="">
        </div>
      </div>
      
    </div>-->
  
  </div>
  <div class="border-solid border-2 text-black mt-24 mb-24 md:p-10  snap-center snap-always bg-white shadow-md shadow-orange">
  <div class="container mx-auto">
    <div class="flex items-center md:flex-row flex-col-reverse justify-center  text-black relative">
      
   
      <div class=" md:px-20 w-1/2 flex lora">
        <p class="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id, magni dignissimos voluptates excepturi dolorem ratione nesciunt quidem sit. Dolor rem mollitia repellat architecto sit explicabo quidem, consequuntur ad aliquid?
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id, magni dignissimos voluptates excepturi dolorem ratione nesciunt quidem sit. Dolor rem mollitia repellat architecto sit explicabo quidem, consequuntur ad aliquid?
        </p>
        
      </div>
      <div class=" bg-orange  -skew-y-12 rounded-full flex w-96 h-96 relative shadow-md shadow-black text-black border-2 border-solid">
        <h2 class="md:text-5xl text-5xl z-20 font-bold absolute font-shrikhand  left-0 top-28 text-center text-white ">QA Test Automation Engineer</h2>
        
        
      </div>
      <div class="bg-white shadow-md shadow-black rounded-full p-5 border-2 border-solid text-black  w-40 h-40 flex justify-center items-center -right-20 -top-20 absolute">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class=" w-36 h-36  text-black">
          <path stroke-linecap="round" stroke-linejoin="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25" />
        </svg>
        </div>
     
    </div>
  </div>

  <div class="container flex justify-center mx-auto ">
    <div class="md:columns-4 columns-2 gap-24">
    
      <div class="lg:w-48 md:w-24  p-2">
        <img class=" " src="https://www.testgrid.io/blog/wp-content/uploads/2021/05/appium.png" alt="">
      </div>

      <div class="lg:w-48 md:w-24  p-2">
        <img class="" src="https://seeklogo.com/images/W/webdriverio-logo-7E0F1B52E5-seeklogo.com.png" alt="">
      </div>
      <div class="lg:w-48 md:w-24  p-6 pt-0">
        <img class="" src="https://camo.githubusercontent.com/58045a79a69afea4cab1cea6def6d911fba3956cf5fd683addf41c032aa64088/68747470733a2f2f636c6475702e636f6d2f78465646784f696f41552e737667" alt="">
      </div>
      <div class="lg:w-48 md:w-24  p-2 lg:pt-10 md:pt-4">
        <img class="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Selenium_logo.svg/2560px-Selenium_logo.svg.png" alt="">
      </div>
    
    
    </div>
    
  </div>
  </div>
  <div class=" bg-white border-solid border-2 text-black lg:p-10 md:p-0 snap-start  mb-10 shadow-md shadow-black">
    <div class="relative  flex">
      <h2 class="text-7xl  font-bold z-20 px-20 py-10 relative">My Projects</h2>
      <div class="bg-white shadow-md shadow-black rounded-full border-2 border-solid  w-40 h-40 flex justify-center items-center -right-20 -top-20 absolute">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-36 h-36  text-black">
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
        </svg>
      </div>
    
      
    </div>
  
    <div class="columns-3 flex flex-col md:flex-row md:block  lg:p-10 md:p-4 ">
      <div class="group cursor-pointer bg-white border-solid border-2 pt-20 my-10 md:my-0 text-black px-10 text-center  hover:bg-darkblue ease-in duration-200 shadow-md  shadow-darkblue hover:shadow-none">
        <p class=" text-xl ease-in duration-100 group-hover:text-white group-hover:font-bold">Pleiades Projectworks</p>
        <b class="ease duration-100 group-hover:font-normal group-hover:text-white">Vue.js / Bootstrap 5 website for web development company</b>
        <img class="pt-10 grayscale group-hover:grayscale-0 contrast-75 group-hover:contrast-100" src="../assets/img/pleiades.png" alt="">
      </div>
      <div class="group cursor-pointer bg-white border-solid border-2 md:pt-20 sm:pt-5 my-5 md:my-0 text-black md:px-10 sm:px-5 text-center hover:bg-orange ease-in duration-200 shadow-md  shadow-orange hover:shadow-none">
        <p class="text-xl ease-in duration-100 group-hover:text-white group-hover:font-bold">Debbie Dye TC Services</p>
        <b class="ease duration-100 group-hover:font-normal group-hover:text-white">Vue.js / Bootstrap 5 website for transaction coordination buisness</b>
        <img class="pt-10 grayscale group-hover:grayscale-0 contrast-75 group-hover:contrast-100" src="../assets/img/debdye.png" alt="">
      </div>
      <div class=" group cursor-pointer bg-white border-solid border-2 md:pt-20 sm:pt-5 mt-5 md:mt-0 text-black md:px-10 sm:px-5 text-center hover:bg-gray-dark ease-in duration-200 shadow-md  shadow-gray-dark hover:shadow-none">
        <p class="text-xl ease-in duration-100 group-hover:text-white group-hover:font-bold">Github User Page Clone</p>
        <b class="ease duration-100 group-hover:font-normal group-hover:text-white">My previous portfolio, made using Vue.js and Bootstrap</b>
        <img class="pt-10 grayscale group-hover:grayscale-0 contrast-75 group-hover:contrast-100" src="../assets/img/portfolio.png" alt="">
      </div>
    </div>
  </div>
</template>

<style scoped>

#scroll-text{





}

@keyframes scroll {
  from{
    transform: translateX(150%);
  }
  to{
    transform: translateX(-150%);
  }
}






</style>
