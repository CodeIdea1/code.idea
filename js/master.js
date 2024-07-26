
// start function to hide mouse and swich it with orange point
function moveCustomPointer(event) {
    const customPointer = document.getElementById('custom-pointer');
    customPointer.style.left = event.clientX + 'px';
    customPointer.style.top = event.clientY + 'px';
    }
    document.addEventListener('mouseenter', function() {
    document.getElementById('custom-pointer').style.display = 'block';
    });
    document.addEventListener('mouseleave', function() {
    document.getElementById('custom-pointer').style.display = 'none';
    });
    document.addEventListener('mousemove', moveCustomPointer);
    function moveHighlight(event) {
        const highlight = document.getElementById('highlight');
        const x = event.clientX - highlight.offsetWidth / 2.6;
        const y = event.clientY - highlight.offsetHeight / 2.5;
        highlight.style.transform = `translate(${x}px, ${y}px)`;
    }
    document.addEventListener('mousemove', moveHighlight);
//end mouse
// start nav bullet
let bullets = document.querySelectorAll('.nav-bullets .bullet');
let links = document.querySelectorAll('.links a')
function smoothScroll(element) {
    element.forEach(ele => {
        ele.addEventListener('click', (e) => {
            e.preventDefault()
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
            })
        })
    })
}
smoothScroll(bullets);
smoothScroll(links);
// end nav bullet

// start color box
if(localStorage.getItem('data-color')){
    document.documentElement.style.setProperty('--main-color', localStorage.getItem('data-color'))
    //remove class active
    let removeActive = document.querySelectorAll(".colors-list li")
    removeActive.forEach(li => {
        li.classList.remove('active')
        //add class active to clicked item
        if(li.dataset.color === localStorage.getItem('data-color')) {
            li.classList.add("active");
        }
    })
}
let colorsli = document.querySelectorAll('.colors-list li');
colorsli.forEach((li) => {
    li.addEventListener('click', (e)=> {
        document.documentElement.style.setProperty('--main-color', e.target.dataset.color)
        localStorage.setItem("data-color", e.target.dataset.color);
        //remove active class
        handleActive(e)
    })
    })
localStorage.getItem('data-color');
// end color box

// start sidebar
let sittingBox = document.querySelector('.sitting-box')
let open = document.querySelector('.fa-gear');
open.onclick = function (){
    this.classList.toggle('fa-spin')
    sittingBox.classList.toggle('open')
}
// end sidebar
// start open menu 
let linksMenu = document.querySelector('.links');
let toggleMenuIcon = document.querySelector('.toggle-menu-icon');
toggleMenuIcon.onclick = function (e) {
    this.classList.toggle("menu-active");
    linksMenu.classList.toggle('open');
    e.stopPropagation()
}
document.addEventListener('click', (e)=> {
    if(e.target !== linksMenu && e.target !== toggleMenuIcon) {
        if(linksMenu.classList.contains('open')) {
            toggleMenuIcon.classList.toggle("menu-active");
            linksMenu.classList.toggle('open');
        }
    }
})
linksMenu.onclick = function(e) {
    e.stopPropagation()
}
//end open menu 
// Function to write words dynamically
function writeAndRepeat(words, index, speed, repeat) {
    if (index < words.length) {
        document.getElementById('text').innerText += words[index];
        index++;
        setTimeout(function() {
        writeAndRepeat(words, index, speed, repeat);
        }, speed);
    } else {
        setTimeout(function() {
        document.getElementById('text').innerText = '';
        if (repeat) {
            writeAndRepeat(words, 0, speed, repeat);
        }
        }, speed * 40);
    }
}
    const wordsToWrite = 'creative';
    const speed = 100;
    const repeat = true;
    writeAndRepeat(wordsToWrite, 0, speed, repeat);
// end Function to write words dynamically
//get in touch button go to contact us
    let getInTouch = document.querySelector('.get-in-touch');
    getInTouch.onclick = function (e){
            e.preventDefault()
            document.querySelector(e.target.dataset.section).scrollIntoView({
                behavior: 'smooth'
    })}
    let videoIcon = document.querySelector(".video");
    let video = document.querySelector('.video .video-container');
    let x = document.querySelector('.x');
    // x.onclick = function(){
    //     video.style.display="none"
    // }
    videoIcon.onclick = function () {
        video.classList.toggle("block")
        x.classList.toggle("block")
    } 
//end in touch button go to contact us
// scrolling animation
window.onscroll = function () {
    let windowHeight = this.innerHeight;
    let windowScrollTop = this.scrollY;
    // start aboutus section animation
    let aboutUs = document.querySelector('.about-us');
    let aboutUsTop = aboutUs.offsetTop;
    let aboutUsHeight = aboutUs.offsetHeight;
    if (windowScrollTop > (aboutUsTop + aboutUsHeight - windowHeight -200)) {
        document.querySelector('.about-us h2').classList.add('animation')
        document.querySelector('.about-us .image-box').classList.add('animation')
        document.querySelector('.about-us .info-box').classList.add('animation')
        let aboutH2 = document.querySelectorAll('.about .about-h2')
        aboutH2.forEach((e)=> {
            e.classList.add('animation')
        })
    }
    // end aboutus section animation
    // start our skills section animation


    let skillsSection = document.querySelector('.skills');
    let skillsSecTop = skillsSection.offsetTop;
    let skillsSecHeight = skillsSection.offsetHeight;
    if (windowScrollTop > (skillsSecTop + skillsSecHeight - windowHeight -600)) {
        let html = document.querySelector('.circle1 .html');
        let css = document.querySelector('.circle1 .css');
        let js = document.querySelector('.circle1 .js');
        let php = document.querySelector('.circle2 .php');
        let problemSolving = document.querySelector('.circle2 .problemsolving');
        let uiux = document.querySelector('.circle2 .uiux');
        let allSkills = [html, css, js, php, problemSolving, uiux];
        allSkills.forEach((e)=> {
            e.classList.add('animation')
        })
        let skillsText = document.querySelectorAll('.skills-text span');
        skillsText.forEach((e)=> {
            e.classList.add('animation')
        })

    } 
    // end our skills section animation
    // start our gallery section animation
    let gallerySection = document.querySelector('.gallery')
    let gallerySecTop =  gallerySection.offsetTop;
    let gallerySecHeight =  gallerySection.offsetHeight;
    if (windowScrollTop > (gallerySecTop + gallerySecHeight - windowHeight -400)) {
        let project = document.querySelectorAll('.gallery .container .project');
        project.forEach((e)=> {
            e.classList.add('animation')
        })
    }
}
// end scrolling animation
// statrt hanle active function
function handleActive(ev) {
    ev.target.parentElement.querySelectorAll('.active').forEach(ele => {
        ele.classList.remove('active')
    })
    //add active to clicked element
    ev.target.classList.toggle('active')
}
// end hanle active function
// start nav bullets hide option
let navBullets = document.querySelector('.nav-bullets');
let bulletsOptionSpan = document.querySelectorAll('.bullets-option span');
let bulletLocalsorage = localStorage.getItem('bullet_option')
if(bulletLocalsorage !== null) {
    bulletsOptionSpan.forEach(span => {
        span.classList.remove('active')
    })
    if(bulletLocalsorage === 'block') {
        navBullets.style.display = 'block';
        document.querySelector('.bullets-option #show').classList.add('active')
    }
    else {
        navBullets.style.display = 'none';
        document.querySelector('.bullets-option #hide').classList.add('active')
    }
}
bulletsOptionSpan.forEach(span => {
    span.addEventListener('click', (e) => {
        if(e.target.dataset.display === 'show') {
            navBullets.style.display = 'block';
            localStorage.setItem('bullet_option', 'block')
        }else {
            navBullets.style.display = 'none';
            localStorage.setItem('bullet_option', 'none')
        }
        handleActive(e)
    })
})
// start nav bullets hide option
// start reset options
document.querySelector('.reset-options').onclick = function () {
    localStorage.clear();
    window.location.reload()
}
// end reset options

let switcherLis = document.querySelectorAll('.switcher li');
let img = document.querySelectorAll('.container .project');
let imgs = Array.from(img);
switcherLis.forEach((li)=> {
    li.addEventListener('click', removeActive);
    li.addEventListener('click',  manageImae);

})
function removeActive () {
    switcherLis.forEach((li)=> {
        li.classList.remove('active');
        this.classList.add('active');
    })
}
function manageImae() {
    imgs.forEach((img)=> {
        img.style.display = 'none'
        document.querySelectorAll(this.dataset.cat).forEach((ele)=> {
            ele.style.display = 'block'
        })
    })
}
