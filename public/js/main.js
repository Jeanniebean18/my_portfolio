
var logo=document.getElementById("logo");
var hero=document.getElementById("hero-background"); 
var overlay=document.getElementById("overlay");
var workOne=document.getElementById("work-one");
var workTwo=document.getElementById("work-two");
var workThree=document.getElementById("work-three");
var workFour=document.getElementById("work-four");
var workFive=document.getElementById("work-five");
var headline=document.getElementById("headline");
var headlineTwo=document.getElementById("headline-two");
var triangle=document.getElementById("triangle");
var yellow=document.getElementById("yellow");
var pink=document.getElementById("pink");
var rue=document.getElementById("rue");

var scrollOne=document.getElementById("scroll");

// var studentTwo=document.getElementById("student_quote_two");






window.onscroll=inView;
  
  
function inView(){
  // roll out of top star
  if (window.pageYOffset>15) {
    // hero.style.backgroundImage="url('../assets/header2.jpg')";
    // hero.setAttribute("class","animated fadeIn");
    logo.setAttribute("class","animated fadeIn logo-two");
    overlay.style.display="block";
        
    overlay.setAttribute("class","animated longer fadeIn");
    triangle.setAttribute("class","animated fadeOut triangle");
    scrollOne.setAttribute("class","animated fadeOut");
        
      
        
  }  else {
    logo.setAttribute("class","logo");
    overlay.setAttribute("class","animated fadeOut");
    triangle.setAttribute("class","animated fadeIn triangle");
    scrollOne.style.display="block";
    scrollOne.setAttribute("class","animated slideInUp");
  }
      
   
    
    
  // student work and quotes in viewport in viewport
  if (document.documentElement.clientWidth  >= 600) {



    if(isInViewport(headline)){

      workOne.style.visibility="visible";
      workOne.setAttribute("class","animated fadeIn delay1");
      workTwo.style.visibility="visible";
      workTwo.setAttribute("class","animated fadeIn delay2");
      workThree.style.visibility="visible";
      workThree.setAttribute("class","animated fadeIn delay3");
    }
        
    if(isInViewport(workFour)){

      workFour.style.visibility="visible";
      workFour.setAttribute("class","animated fadeIn");
      workFive.style.visibility="visible";
      workFive.setAttribute("class","animated fadeIn delay1");
          
    }
        
      
        
    if(isInViewport(rue)){
      yellow.style.visibility="visible";
      yellow.setAttribute("class","animated slideInLeft");
      pink.style.visibility="visible";
      pink.setAttribute("class","animated fadeIn");
         
    }
    
    if(isInViewport(headlineTwo)){
      headlineTwo.style.visibility="visible";
      headlineTwo.setAttribute("class","animated bounceIn");
      
         
    }

   
     
     
     
     
  };



};
  
  
  
var isInViewport=function(elem){var distance=elem.getBoundingClientRect();return(distance.top>=0&&distance.left>=0&&distance.bottom<=(window.innerHeight||document.documentElement.clientHeight)&&distance.right<=(window.innerWidth||document.documentElement.clientWidth));};
  
  

