console.log("is this thing on")
import {addAbout} from "./home.js";
import {showMenu} from "./menu.js";

const content = document.getElementById('content')
const menu = document.getElementById('menu')
const about = document.getElementById('about')

menu.addEventListener('click', Menu)
about.addEventListener('click', About)

function Menu() {
    showMenu()
}

function About() {
    addAbout()
}
