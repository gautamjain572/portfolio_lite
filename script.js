// active for pages 
// const activePage = window.location.hash;
// const navLinks = document.querySelectorAll('header a').forEach(link => {
//     if (link.href.includes(`${activePage}`)) {
//     link.classList.add('active');
//     }
// })

// active for scroll
const sections = document.querySelectorAll('section');
const navLink = document.querySelectorAll('header a');
window.onscroll = () => {
    sections.forEach(link => {
        let top = window.scrollY;
        let offset = link.offsetTop - 150;
        let height = link.offsetHeight;
        let id = link.getAttribute('id')

        if (top >= offset && top < offset + height) {
            navLink.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

//dropdown menu nav
const menuIcon = document.querySelector('#menu-icon');
const navLinks2 = document.querySelector('.nav-links');
menuIcon.onclick = () => {
    navLinks2.classList.toggle('active2');
}

