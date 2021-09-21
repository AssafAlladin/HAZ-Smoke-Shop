const header = document.querySelector("header")
const banner = document.querySelector(".img")
const links = document.querySelectorAll("nav a")
const toggleBtn = document.querySelector(".toggle-btn")

let querySize = window.matchMedia("(max-width: 1024px)")

toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("open")
    console.log("clicked")
})



window.addEventListener("scroll", () => {
    const winScroll = window.scrollY;

    banner.style.backgroundPosition = `center ${(winScroll * .25)}px`

})

doc = document.documentElement
doc.addEventListener('mousemove', (e) => {
    doc.style.setProperty("--x", e.clientX + 'px')
    doc.style.setProperty("--y", e.clientY + 'px')
})

const headerOptions = {
    threshold: 0,
    rootMargin: "-150px 0px 0px 0px"
}

const headerIntersect = new IntersectionObserver(function(entries, headerIntersect) {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add("active")
        } else {
            header.classList.remove("active")
        }
    })
}, headerOptions)

headerIntersect.observe(banner)

const myForm = document.getElementById("myForm")
const inpFile = document.getElementById("inpFile")