function addAbout() {
    const content = document.getElementById("content")
    content.innerText = ''
    const title = document.createElement('h1')
    const about = document.createElement('div')

    title.classList.add('title')
    about.classList.add('about')

    title.innerText = "Donut Den"
    about.innerText = "tired of boring, stale donuts from your local donut chain? see a donuts true potential at donut den"

    content.appendChild(title)
    content.appendChild(about)
}

export {addAbout}