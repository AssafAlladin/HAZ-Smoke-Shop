const header = document.querySelector("header")
const banner = document.querySelector(".img")
const links = document.querySelectorAll("nav a")
const toggleBtn = document.querySelector(".toggle-btn")
const navigation = document.querySelector("header nav")
const navList = document.querySelectorAll("nav li a");



navList.forEach(nav => {
    if (window.location.href == nav.href) {
        nav.parentElement.classList.add("active")
    }
})


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
    rootMargin: "0px 0px -50px 0px"
}

const containerObserver = new IntersectionObserver((entries, containerObserver) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.add("active")
        }
        containerObserver.unobserve(entry.target)
    })
}, containerOptions)

const introItems = document.querySelectorAll(".intro > *")
const tiles = document.querySelectorAll(".tiles .tile")
const map = document.querySelector(".map")
const galleryImages = document.querySelectorAll(".img-grid")
const modal = document.querySelector(".modal")


introItems.forEach(item => {
    containerObserver.observe(item)
})

tiles.forEach(tile => {
    containerObserver.observe(tile)
})

if(!window.location.href.includes("gallery.php")) {
    containerObserver.observe(map)
}


galleryImages.forEach((img, index) => {
    containerObserver.observe(img)
    img.addEventListener("click", () => {

        document.body.style.overflow = "hidden"
        
        modal.classList.add("active")

        var newImg = document.createElement("img")
        
        newImg.classList.add("newImg")

        var modalImg = modal.appendChild(newImg)

        modalImg.src = galleryImages[index].querySelector("img").src
    })
})

const exit = document.querySelector(".exit")

exit.addEventListener("click", () => {
    modal.classList.remove("active")
    document.body.style.overflow = "scroll"
    modal.querySelector("img").remove();

})

modal.addEventListener("click", e => {

    var target = e.target

    console.log(target.className)

    if (target.className.includes("modal")) {
        modal.classList.remove("active")
        document.body.style.overflow = "scroll"
        modal.querySelector("img").remove();
    }
})



