const search = document.querySelector('#search');
const suggestions = document.querySelector(".suggestions");

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

    let res = countries.filter(country => {
        let regx = new RegExp(value, 'gi');
        return country.match(regx)
    })

    let list = res.map(country => {
        return `<li>${country}</li>`
    }).join("");

    suggestions.innerHTML = list;
    suggestions.style.maxHeight = "350px";
}

const resetSearch = () => {
    search.value = suggestions.innerHTML = "";
    search.focus();
}

search.addEventListener("input", autoComplete);

search.addEventListener("blur", () => {
    suggestions.style.display = "none";
})

search.addEventListener("focus", () => {
    suggestions.style.display = "block";
})