const dataBase = [];
const modal = document.querySelector("#msg");
let userCounter = 1;
document.addEventListener("DOMContentLoaded", () => {
  AOS.init();
});

function notification(text, typeOfMsg) {
  Swal.fire({
    title: text,
    icon: typeOfMsg,
    draggable: true,
  });
}

function animation() {
 
  document.body.innerHTML = `
    <div id="loader">
      <div id="loaderDOM"></div>
    </div>
  `;
}
function input() {
  const signUp = document.querySelector("#signUp");
  signUp.addEventListener("click", () => {
    modal.innerHTML = `
      <div class="ContainerMsg" data-aos="flip-left">
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
    `;

    AOS.refresh();

    const buttonClose = document.querySelector("#buttonClose");
    buttonClose.addEventListener("click", () => {
      const containerMsg = document.querySelector(".ContainerMsg");

      containerMsg.setAttribute("data-aos", "fade-out");

      setTimeout(() => {
        modal.innerHTML = "";
        AOS.refresh();
      }, 500);
    });

    const signUpForm = document.querySelector(".formSignUp");
    signUpForm.addEventListener("submit", (e) => {
      e.preventDefault();
      uploadDataUsers();
    });
  });
}

input();

function uploadDataUsers() {
  const name = document.querySelector("#nameIn").value.trim();
  const username = document.querySelector("#userIn").value.trim();
  const email = document.querySelector("#emailIn").value.trim();
  const password = document.querySelector("#passwordIn").value.trim();

  if (name && username && email && password) {
    const user = { name, username, email, password };
    const userId = `${userCounter}-${Math.random().toString(36).substr(2, 9)}`;
    userCounter++;

    const userData = {
      id: userId,
      nameU: name,
      usernameU: username,
      emailU: email,
      passwordU: password,
    };

    localStorage.setItem(userId, JSON.stringify(userData))

    dataBase.push(user);

    notification("Your account has been created successfully", "success");

    modal.innerHTML = "";
  } else {
    notification("Please!, Complete all inputs before sending");
  }
}

//extraer usuarios a la base de datos

function pushUsers() {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    try {
      const userData = JSON.parse(localStorage.getItem(key));
   
      if (userData && userData.email && userData.password) {
        dataBase.push(userData);
      }
    } catch (error) {
      console.error(`Error parsing data for key "${key}":`, error);
    }
  }
}
pushUsers();

//validar si el usuario está regsitrado

function inputSignIn() {
  const signIn = document.querySelector("#signInToForm");
  signIn.addEventListener("click", () => {



  modal.innerHTML = `
  <div class="ContainerMsg" data-aos="flip-left">
      <img class="closeButton" id="buttonCloseSN" src="img/cerrar-ventana.png" alt="Cerrar">
      <h1 class="titleForm">Sign In your account</h1>
      <form class="formSignIn">
        <div class="form-floating mb-3">
          <input type="email" class="form-control" id="emailUp" placeholder="name@example.com" required>
          <label for="emailIn">Email address</label>
        </div>
        <div class="form-floating mb-3">
          <input type="password" class="form-control" id="passwordUp" placeholder="Password" required>
          <label for="passwordIn">Password</label>
        </div>
        <input class="buttonFormSignUp" type="submit" value="Sign In" name="signInInput" id="signIn2">
      </form>
      <div class="accountAlready">
        <p>Already you haven't account?</p>
        <button id="signUPForm">Sign Up</button>
      </div>
    </div>
  `;

  AOS.refresh();

  const buttonClose = document.querySelector("#buttonCloseSN");
  buttonClose.addEventListener("click", () => {
    const containerMsg = document.querySelector(".ContainerMsg");

    containerMsg.setAttribute("data-aos", "fade-out");

    setTimeout(() => {
      modal.innerHTML = "";
      AOS.refresh();
    }, 500);
  });

  const formSignIn = document.querySelector(".formSignIn");
  formSignIn.addEventListener("submit", (e) => {
    e.preventDefault();
    validateUser();
  });
});

function validateUser() {
  const emailSignIn = document.querySelector("#emailUp").value.trim();
  const passwordSignIn = document.querySelector("#passwordUp").value.trim();

  const user = dataBase.find((usr) => usr.email === emailSignIn && usr.password === passwordSignIn);
  if (user) {
    notification("Login successful!", "success");
    setTimeout(() => {
      animation();
      window.location.href = "../Html/User.html"; 
    }, 2000);
  } else {
    notification("Login failed!", "error");
  }

}
}

inputSignIn();
