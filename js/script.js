const inSlider = document.querySelector("#inSlider");
const outSlider = document.querySelector("#outSlider");
const btGerarSenha = document.querySelector("#btGerarSenha");
const containerPassword = document.querySelector(".container-password");
const password = document.querySelector("#password");
const passwordBox = document.querySelector(".password-box");
const copiar = document.querySelector(".copiar")

let tam = 16;
let senha = "";
outSlider.innerText = tam;

inSlider.addEventListener("input", () => {
    containerPassword.classList.add("oculta");
    copiar.innerText = "Clique na senha para copiá-la👆";
    tam = inSlider.value;
    outSlider.innerText = tam;
})

btGerarSenha.addEventListener("click", () => {
    do{
        senha = criarSenha();

        if(!senha.match(/[a-z]/g) || !senha.match(/[A-Z]/g) || !senha.match(/[0-9]/g) || !senha.match(/[!@$#%&]/g)){
            senha = criarSenha();
        } else{
            break
        }
    } while(true);
    
    containerPassword.classList.remove("oculta");
    password.innerText = senha;
})

passwordBox.addEventListener("click", () => {
    navigator.clipboard.writeText(senha);
    copiar.innerText = "Senha copiada!✅";
})

const criarSenha = () => {
    const caracteres = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@$#%&1234567890";
    let pass = "";
    for(let i = 1; i <= tam; i++){
        pass += caracteres.charAt(Math.floor(Math.random() * caracteres.length));
    }
    return pass;
}