import './style.css';
import {addHome} from "./home.js";
import {showMenu} from "./menu.js";
import {addAbout} from './about.js';
const content = document.getElementById('content')
const menu = document.getElementById('menu')
const about = document.getElementById('about')
const home = document.getElementById('home')

menu.addEventListener('click', Menu)
home.addEventListener('click', Home)
about.addEventListener('click',About)

function Menu() {
    showMenu()
}

function Home() {
    addHome()
}

function About() {
    addAbout()
}
