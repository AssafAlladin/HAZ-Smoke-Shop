const header = document.querySelector("header")
const banner = document.querySelector(".img")
const links = document.querySelectorAll("nav a")
const toggleBtn = document.querySelector(".toggle-btn")
const navigation = document.querySelector("header nav")


let querySize = window.matchMedia("(max-width: 1024px)")

toggleBtn.addEventListener("click", () => {
    toggleBtn.classList.toggle("open")
    navigation.classList.toggle("open")

    
    
})

links.forEach(link => {
    link.addEventListener("click", () => {
        navigation.classList.remove("open")
        toggleBtn.classList.remove("open")

    })
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


const containerOptions = {
    Root: "",
    threshold: .5,
    rootMargin: "0px 0px 0px 0px"
}

const containerObserver = new IntersectionObserver((entries, containerObserver) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.classList.add("active")
        }
        console.log(entry.target)
        // containerObserver.unobserve(entry.target)
    })
}, containerOptions)

const introItems = document.querySelectorAll(".intro > *")

introItems.forEach(item => {
    containerObserver.observe(item)
})