function showMenu() {
    const content = document.getElementById("content")
    content.innerText = ''
    const menu = document.createElement('h1')
    menu.classList.add('menu')

    menu.innerText = "Menu"

    content.appendChild(menu)
}

export {showMenu}
