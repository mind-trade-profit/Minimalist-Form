const database = []
const modal = document.querySelector("#msg")

function notification(text,typeOfMsg){
  Swal.fire({
    title: text,
    icon: typeOfMsg,
    draggable: true
  })
}

function input() {
  const signUp = document.querySelector("#signUp")
  signUp.addEventListener("click", () => {

    modal.innerHTML = `
      <div class="ContainerMsg">
        <img class="closeButton" id="buttonClose" src="img/cerrar-ventana.png" alt="Cerrar">
        <h1 class="titleForm">Create your account</h1>
        <form class="formSignUp">
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="nameIn" placeholder="Write your name here" required>
            <label for="nameIn">Full Name</label>
          </div>
          <div class="form-floating mb-3">
            <input type="text" class="form-control" id="userIn" placeholder="Username" required>
            <label for="userIn">User Name</label>
          </div>
          <div class="form-floating mb-3">
            <input type="email" class="form-control" id="emailIn" placeholder="name@example.com" required>
            <label for="emailIn">Email address</label>
          </div>
          <div class="form-floating mb-3">
            <input type="password" class="form-control" id="passwordIn" placeholder="Password" required>
            <label for="passwordIn">Password</label>
          </div>
          <input class="buttonFormSignUp" type="submit" value="Sign Up" name="signUpInput" id="signUpInput">
        </form>
        <div class="accountAlready">
          <p>Already have an account?</p>
          <button id="signInForm">Sign In</button>
        </div>
      </div>
    `

    const buttonClose = document.querySelector("#buttonClose")
    buttonClose.addEventListener("click", () => {
      modal.innerHTML = "";
    })

    const signUpForm = document.querySelector(".formSignUp")
    signUpForm.addEventListener("submit", (e) => {
      e.preventDefault()
      uploadDataUsers()
    })
  })
}

input();

function uploadDataUsers() {
  const name = document.querySelector("#nameIn").value.trim()
  const username = document.querySelector("#userIn").value.trim()
  const email = document.querySelector("#emailIn").value.trim()
  const password = document.querySelector("#passwordIn").value.trim()


  if (name && username && email && password) {
  
    const user = { name, username, email, password }

    const userData = {
       nameU: name, 
       usernameU: username,
       emailU: email,
       passwordU: password
    }

    JSON.stringify(localStorage.setItem("userData", userData))
    
    database.push(user)
    
    notification("Your account has been created successfully", "success")
  
    modal.innerHTML = ""
  } else {
   notification("Please!, Complete all inputs before sending")
  }
}



