const sidebarLeft = document.querySelector('#sidebar_left');
sidebarOverlayLeft = document.querySelector('.sidebar_left_overlay');

const sidebarLeftOpen = () => {
    sidebarLeft.classList.add("active")
    sidebarOverlayLeft.classList.add("active");
};

const sidebarLeftClose = () => {
    sidebarLeft.classList.remove("active")
    sidebarOverlayLeft.classList.remove("active");
};