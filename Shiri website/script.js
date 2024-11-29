




 function jump_to(el_id) {
   console.log("yeahhhh");
   var el_to_jump = document.getElementById(el_id);
   console.log(el_to_jump);
   var top = el_to_jump.getBoundingClientRect().top;
   console.log(top);
   window.scrollTo({
     top: top,
     left: 0,
     behavior: "smooth",
   });
 }