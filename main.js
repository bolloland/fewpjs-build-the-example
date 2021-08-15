// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.getElementById("modal").className = "hidden";
const modalDiv = document.getElementById("modal")

const heartIcon = document.querySelectorAll(".like-glyph") //whole node
heartIcon.forEach((heart) => {
    heart.addEventListener("click", changeHeart = (event) => {
      let hrt = event.target
      console.log(event)
      mimicServerCall() 
      .then(() => {
        if (hrt.innerText = EMPTY_HEART) {
          hrt.innerText = FULL_HEART
          hrt.style.color = "red"
        } else {
          hrt.innerText = EMPTY_HEART
          hrt.style.color = ""
        }
        })
        
      .catch((error) => {
        modalDiv.className = ""
        alert("Random server error. Try again.")
        setTimeout(() => modalDiv.className = "hidden", 3000)
      })
      
      // if (hrt.innerText = EMPTY_HEART) {
      //   hrt.innerText = FULL_HEART
      // } else {
      //   hrt.innerText = EMPTY_HEART
      // }
      // console.log(hrt.innerText)
    })
})




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
