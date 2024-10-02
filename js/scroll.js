// for smooth scrolling

document.querySelectorAll(".nav-item").forEach(item => item.addEventListener("click", () => {
    const tabName = item.children[0].textContent.toLowerCase()
    const portfolioSection = document.querySelector(`#${tabName.substring(1)}`)
    portfolioSection.scrollIntoView({ behavior: "smooth" })
    /* const offsetY = portfolioSection.getBoundingClientRect().bottom
    console.log(offsetY+"px")
    scrollTo({top:-1*offsetY, behavior:"smooth"}) */
}))


// hameburger

let isSidebarOpen = false

document.querySelector(".hamburger").addEventListener("click", (e) => {
    const sidebar = document.getElementById("sidebar")

    if (isSidebarOpen) {
        setTimeout(() => {
            sidebar.style.display = "none"
            sidebar.style.position = "relative"
        }, 450)
    } else {
        sidebar.style.display = "flex"
        sidebar.style.position = "absolute"
    }
    sidebar.animate({
        transform: isSidebarOpen ? "translate(-100%,0)" : "translate(0,0)"
    }, { duration: 350, fill: "forwards" })

    isSidebarOpen = !isSidebarOpen

})

// emailjs

emailjs.init("vCW8jQfNE0Rbv3MgU")

document.querySelector("#form").addEventListener("submit", (event) => {
    event.preventDefault()

    emailjs.send("service_dldy455", "template_91nnrjb", {
        name: document.getElementById("name").value,
        mail: document.getElementById("email").value,
        message: document.getElementById("message").value,
    })
        .then(() => {
            console.log("message sents")
            alert("your message sent succeefully");
        })
        .catch(() => {
            console.log("error msg not sent")
        })
})


var readBlock = document.getElementById("show");

function myClick() {
  if (readBlock.style.display == "none") {
    document.getElementById("btnHide").innerHTML = "Read less...";
    readBlock.style.display = "block";
  }
  else {
    document.getElementById("btnHide").innerHTML = "Read more";
    readBlock.style.display = "none";
  }
}

var readBlock1 = document.getElementById("show1");

function myClick1() {
  if (readBlock1.style.display == "none") {
    document.getElementById("btnHide1").innerHTML = "Read less...";
    readBlock1.style.display = "block";
  }
  else {
    document.getElementById("btnHide1").innerHTML = "Read more";
    readBlock1.style.display = "none";
  }
}

var readBlock2 = document.getElementById("show2");

function myClick2() {
  if (readBlock2.style.display == "none") {
    document.getElementById("btnHide2").innerHTML = "Read less...";
    readBlock2.style.display = "block";
  }
  else {
    document.getElementById("btnHide2").innerHTML = "Read more";
    readBlock2.style.display = "none";
  }
}
