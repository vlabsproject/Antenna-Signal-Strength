let myBtn = document.getElementsByClassName('restart');
let myDiv = document.getElementById("changeContent")
let flag = 0;

// creating an array and passing the number, questions, options, and answers

 
  //   {
  //   numb: 3,
  //   question: "In this experiment, we're going to build our own astable multivibrator circuit. We'll learn how to choose the right values of resistors and capacitors to create a square wave with a specific frequency. And we'll see how we can use the circuit to generate different types of signals.",
  //   answer: "",
  //   options: [
  //     "	",
  //     "	",
  //     "",
  //     "	"
  //   ]
  // },



/*===== SHOW NAVBAR  =====*/ 
const showNavbar = (toggleId, navId, bodyId, headerId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId),
  bodypd = document.getElementById(bodyId),
  headerpd = document.getElementById(headerId)

  // Validate that all variables exist
  if(toggle && nav && bodypd && headerpd){
      toggle.addEventListener('click', ()=>{
          // show navbar
          nav.classList.toggle('show')
          // change icon
          toggle.classList.toggle('bx-x')
          // add padding to body
          bodypd.classList.toggle('body-pd')
          // add padding to header
          headerpd.classList.toggle('body-pd')
      })
  }
}

showNavbar('header-toggle','nav-bar','body-pd','header')

/*===== LINK ACTIVE  =====*/ 
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
  if(linkColor){
      linkColor.forEach(l=> l.classList.remove('active'))
      this.classList.add('active')
  }
}
linkColor.forEach(l=> l.addEventListener('click', colorLink))

// Change html on click of continue button
function updateHTML(){
  console.log("clicked");
  flag++;
  if(flag == 1)
  {
    console.log(flag);
    myDiv.innerHTML = "What is an antenna? <br>  <br> An antenna is a device that converts electrical signals into radio waves and vice versa. Antennas are used in a wide variety of applications, including radio broadcasting, television broadcasting, mobile phones, and satellite communications.";
  }
  else if(flag == 2)
  {
    console.log(flag);
    myDiv.innerHTML = "Why is signal strength important? <br>  <br>Signal strength is important because it affects the quality of communication. A weak signal can cause distortion, noise, and dropped calls. In some cases, a weak signal can even prevent communication from happening altogether.";
  }
  else if(flag == 3)
  {
    console.log(flag);
    window.location.href = "../html/Theory.html";
  }
  else
  {
    flag = 0;
  }
}