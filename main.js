const search = document.querySelector('#search');
const suggestions = document.querySelector(".suggestions");
const searchOverlay = document.querySelector(".search_ovelay");
// const header = document.querySelector(".navbar_header");
// const footer = document.querySelector(".footer");

const toggleSidebar = (thisElement) => {
    let sidebar = document.querySelector(".navbar_sidebar");

    sidebar.classList.toggle("open");
    document.querySelector(".sidebar_overlay").classList.toggle("open");
    document.querySelector("#container").classList.toggle("open");

    if (sidebar.classList.contains("open")) {
        thisElement.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>'
    }
    else {
        thisElement.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>'
    }
};

const closeSidebar = (thisElement, bars) => {
    document.querySelector(".navbar_sidebar").classList.remove("open");
    thisElement.classList.remove("open");
    document.querySelector("#container").classList.remove("open");

    bars.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg>'
};

const autoComplete = (event) => {
    let value = event.target.value;

    if (value) {
        let res = countries.filter(country => {
            let regx = new RegExp(value, 'gi');
            return country.match(regx)
        })

        let list = res.map(country => {
            return `<li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class='list_search_icon'><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10 607z" /></svg> ${country}</li>`
        }).join("");

        suggestions.innerHTML = list;
        suggestions.style.maxHeight = "350px";
    }
    else {
        suggestions.innerHTML = ""
    }
}

const resetSearch = () => {
    search.value = suggestions.innerHTML = "";
    search.focus();
}

const suggestionsBLock = () => {
    suggestions.style.display = "block";
}

searchOverlay.addEventListener("click", () => {
    suggestions.style.display = "none";
});

search.addEventListener("input", autoComplete);
search.addEventListener("focus", suggestionsBLock);
// header.addEventListener("click", suggestionsBLock);
// footer.addEventListener("click", suggestionsBLock);