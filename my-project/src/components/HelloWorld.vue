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

  <div class="text-7xl flex font-bold text-center text-black items-center justify-center bg-dark mt-28  lg:flex lg:text-9xl ">

      <div class="h-1/2 p-10 ">
        <h1>Austin Dye</h1>
        <p class="text-xl my-5 text-slate-400"> Developer, Desiger, Detail Oriented </p>
      </div>
      <div class=" h-1/2 p-10 border-solid border-2 ">
        <img class=" bg-white rounded-full border-solid border-2" src="../assets/img/me.png" alt="">
      </div>
   

  </div>

  <div class="border-solid border-2 text-black mt-72 p-10">
    <div class="container mx-auto">
      <div class="flex items-center justify-center">
      
        <div class=" text-black  w-1/2 p-20 border-solid border-2">
          <h2 class="text-7xl  font-bold">Full-Stack Developer</h2>
        </div>
        <div class=" bold w-1/2 px-10 ">
          <p class="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id, magni dignissimos voluptates excepturi dolorem ratione nesciunt quidem sit. Dolor rem mollitia repellat architecto sit explicabo quidem, consequuntur ad aliquid?</p>
          <div class="columns-2">
            
          </div>
        </div>
       
      </div>
    </div>
  
    <div class="container flex justify-center mx-auto text-black">
      <div class="columns-3 mt-10 gap-24">
        <div class=" w-48 p-2">
          <img class="" src="https://www.vectorlogo.zone/logos/vuejs/vuejs-ar21.png" alt="">
        </div>
        <div class=" w-48 p-6">
          <img class=" " src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" alt="">
        </div>
        <div class=" w-48 p-2">
          <img class="" src="https://logovectorseek.com/wp-content/uploads/2019/10/bootstrap-logo-vector.png" alt="">
        </div>
        <div class="w-48 pt-10 p-2">
          <img class="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Tailwind_CSS_logo.svg/2560px-Tailwind_CSS_logo.svg.png" alt="">
        </div>
        <div class=" w-48 p-2">
          <img class="" src="https://logos-world.net/wp-content/uploads/2022/01/NET-Framework-Logo.png" alt="">
        </div>
      </div>
      
    </div>
  
  </div>
  <div class="border-solid border-2 text-black mt-24 mb-24 p-10">
  <div class="container mx-auto">
    <div class="flex items-center justify-center">
    
     
      <div class=" bold w-1/2 px-10 ">
        <p class="text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat id, magni dignissimos voluptates excepturi dolorem ratione nesciunt quidem sit. Dolor rem mollitia repellat architecto sit explicabo quidem, consequuntur ad aliquid?</p>
        <div class="columns-2">
          
        </div>
      </div>
      <div class=" text-black  w-1/2 p-20 border-solid border-2">
        <h2 class="text-7xl  font-bold">QA Test Automation</h2>
      </div>
     
    </div>
  </div>

  <div class="container flex justify-center mx-auto">
    <div class="columns-4 mt-10 gap-24">
    
      <div class="w-48 p-2">
        <img class=" " src="https://www.testgrid.io/blog/wp-content/uploads/2021/05/appium.png" alt="">
      </div>

      <div class="w-48 p-2">
        <img class="" src="https://seeklogo.com/images/W/webdriverio-logo-7E0F1B52E5-seeklogo.com.png" alt="">
      </div>
      <div class="w-48 p-6 pt-0">
        <img class="" src="https://camo.githubusercontent.com/58045a79a69afea4cab1cea6def6d911fba3956cf5fd683addf41c032aa64088/68747470733a2f2f636c6475702e636f6d2f78465646784f696f41552e737667" alt="">
      </div>
      <div class="w-48 p-2 pt-10">
        <img class="" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Selenium_logo.svg/2560px-Selenium_logo.svg.png" alt="">
      </div>
    
    
    </div>
    
  </div>
  </div>
  <div class=" border-solid border-2 text-black p-10">
    <h2 class="text-7xl  font-bold p-20">My Projects</h2>
    <div class="columns-3">
      <div class="group border-solid border-2 pt-20 text-black px-10 text-center hover:bg-darkblue ease-in duration-200 hover:shadow-md hover:shadow-darkblue">
        <p class=" text-xl ease-in duration-100 group-hover:text-white group-hover:font-bold">Pleiades Projectworks</p>
        <b class="ease duration-100 group-hover:font-normal group-hover:text-white">Vue.js / Bootstrap 5 website for web development company</b>
        <img class="pt-10" src="../assets/img/pleiades.png" alt="">
      </div>
      <div class="group border-solid border-2 pt-20 text-black px-10 text-center hover:bg-orange ease-in duration-200 hover:shadow-md hover:shadow-orange">
        <p class="text-xl ease-in duration-100 group-hover:text-white group-hover:font-bold">Debbie Dye TC Services</p>
        <b class="ease duration-100 group-hover:font-normal group-hover:text-white">Vue.js / Bootstrap 5 website for transaction coordination buisness</b>
        <img class="pt-10" src="../assets/img/debdye.png" alt="">
      </div>
      <div class=" group border-solid border-2 pt-20 text-black px-10 text-center hover:bg-gray-dark ease-in duration-200 hover:shadow-md hover:shadow-gray-dark">
        <p class="text-xl ease-in duration-100 group-hover:text-white group-hover:font-bold">Github User Page Clone</p>
        <b class="ease duration-100 group-hover:font-normal group-hover:text-white">My previous portfolio, made using Vue.js and Bootstrap</b>
        <img class="pt-10" src="../assets/img/portfolio.png" alt="">
      </div>
    </div>
  </div>

  
 

    

 
</template>

<style scoped>

</style>
