function addHome() {
    const content = document.getElementById("content")
    content.innerText = ''
    const title = document.createElement('h1')
    const about = document.createElement('p')

    title.classList.add('title')
    about.classList.add('about')

    title.innerText = "Donut Den"
    about.innerText = "Donuts Done Delicious"

    content.appendChild(title)
    content.appendChild(about)
}

export {addHome}