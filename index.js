const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?", "/"]
let characters = [...letters, ...numbers, ...symbols];

let settings = {
    useLetters: true,
    useNumbers: true,
    useSymbols: true
}

let passLengthInput = document.getElementById('passLength')
let passLength = passLengthInput.value
let passField1 = document.querySelector('.pass1 span')
let passField2 = document.querySelector('.pass2 span')
let pass1Copy = document.querySelector('.pass1 svg')
let pass2Copy = document.querySelector('.pass2 svg')
let buttonik = document.querySelector('.generate')

let useLettersEl = document.querySelector('.useLetters input')
let useNumbersEl = document.querySelector('.useNumbers input')
let useSymbolsEl = document.querySelector('.useSymbols input')


function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length)
}

function generatePassword(array) {
    if (passLengthInput.value > 50) return

    passLength = passLengthInput.value
    let password = ""
    for (let i = 0; i < passLength; i++) {
        password += array[getRandomIndex(array)]
    }
    return password
}

buttonik.addEventListener('click', () => {
    
    if (characters.length == 0) return

    passField1.textContent = generatePassword(characters)
    passField2.textContent = generatePassword(characters)
    pass1Copy.addEventListener('click', () => {
        navigator.clipboard.writeText(passField1.textContent)
    })

    pass2Copy.addEventListener('click', () => {
        navigator.clipboard.writeText(passField2.textContent)
    })

})

useLettersEl.addEventListener('click', function (event) {
    selectOption(this, Object.keys(settings)[0])
})

useNumbersEl.addEventListener('click', function (event) {
    selectOption(this, Object.keys(settings)[1])
})

useSymbolsEl.addEventListener('click', function (event) {
    selectOption(this, Object.keys(settings)[2])
})


function selectOption(input, key) {
    if (input.checked == true) {
        settings[key] = true
    } else {
        settings[key] = false
    }
    applySettings()

}

function applySettings() {
    characters = [];
    if (settings.useLetters) { characters.push(...letters) }
    if (settings.useNumbers) { characters.push(...numbers) }
    if (settings.useSymbols) { characters.push(...symbols) }
    
}

pass1Copy.addEventListener('click', () => {
    document.documentElement.style.setProperty('--copyTranslate1', 'scale(1) translate(0, -50px)')  
    
    setTimeout(() => {
        document.documentElement.style.setProperty('--copyTranslate1', 'scale(0) translate(0, 0)')  

    }, 3000)
})
pass2Copy.addEventListener('click', () => {
    document.documentElement.style.setProperty('--copyTranslate2', 'scale(1) translate(0, -50px)')  
    
    setTimeout(() => {
        document.documentElement.style.setProperty('--copyTranslate2', 'scale(0) translate(0, 0)')  

    }, 3000)
})


