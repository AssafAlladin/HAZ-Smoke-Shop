const header = document.querySelector("header")
const banner = document.querySelector(".img")
const links = document.querySelectorAll("nav a")

links.forEach(link => {
    if (window.location.href = link.href) {
        link.parentElement.classList.add("active")
    } else {
        link.parentElement.classList.remove("active")
    }
})

window.addEventListener("scroll", () => {
    const winScroll = window.scrollY;

    banner.style.backgroundPosition = `right ${(winScroll * .25)}px`

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

myForm.addEventListener("submit", e => {
    e.preventDefault()

    const endpoint = 'upload.php'
    const formData = new FormData()


    formData.append("inpFile", inpFile.files[0])

    fetch(endpoint, {
        method: "post",
        body: formData
    }).catch(console.error)

})