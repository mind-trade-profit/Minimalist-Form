//1°= Crear una base de datos para almacenar la data de los usuarios
//2°= cuando haga click en el boton de ingresar, el usuario sera redirigido al formulario
//3°= Diseñar el formulario en el cual los usuarios ingresaran sus datos
//4°= confirmarle al usuario que  sus datos se cargaron correctamente
//5°= validar los datos una vez el usuario ingresa a su cuenta
// abrir cuenta si se encuentra en la base de datos y si no rechazar

const database = [];

function input() {
  const signUp = document.querySelector("#signUp");
  const modal = document.querySelector("#msg");
  signUp.addEventListener("click", () => {
    modal.innerHTML = `
            <div class="ContainerMsg">
                <h1 class="titleForm">Create your account</h1>
                <form class="formSignUp">
                    <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="nameIn" placeholder="write your name here">
                    <label for="floatingInput">Full Name</label>
                    </div>
                    <div class="form-floating mb-3">
                    <input type="text" class="form-control" id="userIn" placeholder="name@example.com">
                    <label for="floatingInput">User Name</label>
                    </div>
                    <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="emailIn" placeholder="name@example.com">
                    <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-3">
                    <input type="password" class="form-control" id="passwordIn" placeholder="name@example.com">
                    <label for="floatingInput">Password</label>
                    </div>
                    
                    <input class="buttonFormSignUp" type="submit" value="SignUp" name="signUpInput" id="signUpInput">
                </form>

               <div class="accountAlready">
                <p>Have already account?</p>
                <button id="signInForm">sign In</button>
               </div>
            </div>
        `;
  });
}

function uploadDataUsers () {
     const buttonForm = document.querySelector("#signUpInput");
    
}

input();
