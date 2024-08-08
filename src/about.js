function addAbout() {
    const content = document.getElementById('content')
    content.innerText = ''

    const container = document.createElement('div')
    container.classList.add('container')

    const info = document.createElement('div')
    info.classList.add('info')

    info.innerText = 'Tired of boring and stale donuts from your local donut chain? Then you are exactly where you need to be \n \n \nOpen Every Day \n 6am - 8pm'

    content.appendChild(container)
    container.appendChild(info)
}

export {addAbout}