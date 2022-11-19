const mobileMenu = document.getElementById('mobileMenu');
const mobileContainer = document.querySelector('.mobile_menu_container');
const hederPaddingFix = document.querySelector('.mobil-header-selector');
const html = document.querySelector('html');
const mobileClose = document.getElementById('mobile-close');
const mobileToolBar = document.querySelector('.tooll-bar');
const navLinksMobile = document.querySelectorAll('.nav_ul_mobile_li')

navLinksMobile.forEach((links) => {
    links.addEventListener('click', (e)=> {
        mobileContainer.classList.add('hidden');
        hederPaddingFix.style.padding = '20px';
        mobileMenu.style.opacity = '1';
        html.style.overflowY = 'visible';
    })
} )



mobileMenu.addEventListener('click', () => {
    
    html.style.overflowY = 'hidden';
    hederPaddingFix.style.padding = '0';
    mobileContainer.classList.remove('hidden');
    mobileMenu.style.opacity = '0';
   

    if (/Mobi|Android/i.test(navigator.userAgent)) {
        mobileToolBar.style.marginBottom = '58px';
    } else if (/Mobi|iPhone/i.test(navigator.userAgent)) {
        mobileToolBar.style.marginBottom = '50px'
    } else {
        console.log('lecc ROCK');
    }

})


mobileClose.addEventListener('click', () => {
    mobileContainer.classList.add('hidden');
    hederPaddingFix.style.padding = '20px';
    mobileMenu.style.opacity = '1';
    html.style.overflowY = 'visible';

})