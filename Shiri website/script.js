let btnAbout = document.querySelector('.btn-about')
let btnContact = document.querySelector('.contact')

function jump_to() {
  let elementToJump = document.getElementById('about-info');
  console.log(elementToJump)
  if (elementToJump) {
    let top = elementToJump.getBoundingClientRect().top;
    window.scrollTo({
      top: top,
      left: 0,
      behavior: "smooth",
    });
  } else {
    console.error('Element not found');
  }
}

btnAbout.addEventListener('click', jump_to)
 
function jump_end() {
  let elementJump = document.getElementById('end-page')
  console.log(elementJump)
  if (elementJump) {
    let top = elementJump.getBoundingClientRect().top;
    window.scrollTo({
      top: top,
      left: 0,
      behavior:"smooth"
    })
  } else {
    console.error('element not found')
  }
}
btnContact.addEventListener('click', jump_end)