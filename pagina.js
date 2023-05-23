const productos = [
    {
      nombre: "Brook",
      precio: 75,
      imagen: "https://png",
      valoracion: 4.3,
    }, 
    {
        nombre: "Brook",
        precio: 75,
        imagen: "https://png",
        valoracion: 4.3,
    }
  ];

function Usuarios (usuarios) {
    this.usuarios = usuarios,
    this.render = function ({
    let menuDiv = document.getElementById ("container");
    for (const usuario of this.usuarios){
        menuDiv.innerHTML = `<li>'${usuario.name}'>%{usuario.age}</li>`;
    }
        menuDiv.innerHTML += "</ul>"
    })
};

  function Menu(link) {
    // propiedades
    this.link = link,

    // metodos
    this.render = function() {
        let menuDiv = document.getElementById("menu");
        let menuRender="";

        for(const link of this.links){
            menuDiv.innerHTML = `<a href='${this.link.url}'>${this.link.etiqueta}</a>`;

         }        
    }
}

function inicializar() {
    console.log("onload se ha llamado");

    const url = "https://domain.com/image.jpg";
    ListaUsuarios (users).render();
    const divContainer = document.getElementById("container");
    divContainer.innerHTML = "<p>Div modificado</p><p>Otro parrafo</p>";
    
    const menu = new Menu ([
        {url: "index.html", etiqueta: "Home"}, 
        {url:"login.html", etiqueta:"Login"},
        {url:"registro.html", etiqueta:"Registro"}
    ]).render();





    

    // menu
    const menu = new Menu({url: "index.html", etiqueta: "Home"});
    menu.render();
}

function login() {
    console.log("Boton login clickado");

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (email === "israel@mail.com" && password === "12345678") {
        console.log("Usuario logueado");
    } else {
        console.log("Usuario no valido");
    }
}

    //Login

