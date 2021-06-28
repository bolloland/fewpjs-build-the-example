// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.getElementById("modal").className = "hidden";
const modalDiv = document.getElementById("modal")

const heartIcon = document.querySelectorAll(".like-glyph") //whole node
heartIcon.forEach((heart) => {
    heart.addEventListener("click", changeHeart())
})

function changeHeart() {
  
  if (heartIcon.innerHTML = EMPTY_HEART) {
    heartIcon.innerHTML = FULL_HEART
  } else  {
    heartIcon.innerHTML = EMPTY_HEART
  }
}

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
