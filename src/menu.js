function showMenu() {
    const content = document.getElementById("content")
    content.innerText = ''
    const menu = document.createElement('h1')
    const donutOne = document.createElement('p')
    const donutTwo = document.createElement('p')
    const donutThree = document.createElement('p')
    const donutFour = document.createElement('p')

    menu.classList.add('menu')
    donutOne.classList.add('donut')
    donutTwo.classList.add('donut')
    donutThree.classList.add('donut')
    donutFour.classList.add('donut')

    menu.innerText = "Menu"

    donutOne.innerText = 'Chocolate Glazed'
    donutTwo.innerText = 'Strawberry Glazed'
    donutThree.innerText = 'Boston Cream'
    donutFour.innerText = 'Toasted Almond'

    content.appendChild(menu)
    content.appendChild(donutOne)
    content.appendChild(donutTwo)
    content.appendChild(donutThree)
    content.appendChild(donutFour)
}

export {showMenu}
