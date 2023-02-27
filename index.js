const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
    "/"];
let password1 = document.getElementById("password-1")
let password2 = document.getElementById("password-2")


function generator() {
    let characterList = []
    for (let i = 0; i < 16; i++) {
        let randomCharacter = characters[Math.floor(Math.random() * characters.length)]
        characterList += randomCharacter
    }
    return characterList

}

function startGenerator() {
    let password1 = document.getElementById("password-1")
    let password2 = document.getElementById("password-2")

    password1.textContent = generator()
    password2.textContent = generator()

    let result = document.getElementById("result")
    let displaySetting = result.style.display

    if (displaySetting = 'flex') {
        result.style.display = 'flex'
    } else {
        result.style.display = 'none'
    }
}


