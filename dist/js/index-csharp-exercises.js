const sidelinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');
const sidebar = document.querySelector('.sidebar');
const menubar = document.querySelector('.content .fixedtop nav .fa.fa-bars');
const divfooterr = document.querySelector('#divfooterr');
const fixedtopp = document.querySelector('#fixedtopp');
const toggler = document.getElementById('theme-toggle');
const cdivfooterr = document.querySelector('.content footer #divfooterr');
const cdivright = document.querySelector('#divrightf');
const divnav = document.querySelector('.content .fixedtop nav');
//sidelinks
sidelinks.forEach(item => {
    const li = item.parentElement;
    item.addEventListener('click', () => {
        sidelinks.forEach(i => {
            i.parentElement.classList.remove('active');
        })
        li.classList.add('active');
    })
});
//menubar
menubar.addEventListener('click', () => {
    sidebar.classList.toggle('close');
    if (lbltoggle.innerText == 'open') {
        lbltoggle.innerText = 'close';  
        divnav.width = '100%';
        divfooterr.style.width = '100%';
        fixedtopp.style.width = '100%';
        cdivfooterr.setAttribute('width', '100%');
        cdivright.setAttribute('width', '100%');
        cdivright.width = '100%';       
        
    } else {
        lbltoggle.innerText = 'open';
        divfooterr.style.width = 'calc(100% - 270px)';
        fixedtopp.style.width = 'calc(100% - 270px)';        
        document.cookie = "cardenalpresidebar=" + encodeURIComponent("open") + ";max-age=3600;";
    }
});
//Window Resize
window.addEventListener('resize', () => {
    if (window.innerWidth < 768) {
        sidebar.classList.add('close');
        lbltoggle.innerText = 'close';
        divfooterr.style.width = 'calc(100%)';
        fixedtopp.style.width = 'calc(100%)';        

    } else {
        sidebar.classList.remove('close');
        lbltoggle.innerText = 'open';
        divfooterr.style.width = 'calc(100% - 270px)';
        fixedtopp.style.width = 'calc(100% - 270px)';        
    }
});
//windows InnerWidth
if (window.innerWidth < 768) {
    sidebar.classList.add('close');
    lbltoggle.innerText = 'close';
    divfooterr.style.width = 'calc(100%)';
    fixedtopp.style.width = 'calc(100%)';   

} else {
    sidebar.classList.remove('close');
    lbltoggle.innerText = 'open';
    divfooterr.style.width = 'calc(100% - 270px)';
    fixedtopp.style.width = 'calc(100% - 270px)';    
}