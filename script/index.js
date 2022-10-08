const search = document.querySelector('#search');
const suggestions = document.querySelector(".suggestions");
const searchOverlay = document.querySelector(".search_ovelay");
// const header = document.querySelector(".navbar_header");
// const footer = document.querySelector(".footer");

const toggleSidebar = (thisElement) => {
    let sidebar = document.querySelector(".navbar_sidebar");

    sidebar.classList.toggle("open");
    document.querySelector(".sidebar_overlay").classList.add("open");
    document.querySelector("#container").classList.toggle("open");
    document.querySelector(".search").classList.add("open");
    thisElement.classList.toggle("open");
};

const closeSidebar = (thisElement, bars) => {
    document.querySelector(".navbar_sidebar").classList.remove("open");
    thisElement.classList.remove("open");
    document.querySelector("#container").classList.remove("open");
    document.querySelector(".search").classList.remove("open");
    document.querySelector(".sidebar_overlay").classList.remove("open");
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

        search.style.paddingLeft = "5px";
        document.querySelector(".search_icon_left").style.display = "block";
        document.querySelector(".search_overlay").style.display = "block";
        document.querySelector(".close_icon").style.display = "block";
        suggestions.style.borderTop = "1px solid #efdfdf";

        if (suggestions.scrollHeight) {
            document.querySelector(".search_group").style.borderRadius = "10px 10px 0 0";
        }
        else {
            document.querySelector(".search_group").style.borderRadius = "10px";
        }

    }
    else {
        suggestions.innerHTML = ""
        search.style.paddingLeft = "1rem";
        document.querySelector(".search_icon_left").style.display = "none";
        document.querySelector(".search_overlay").style.display = "none";
        document.querySelector(".close_icon").style.display = "none";
        document.querySelector(".search_group").style.borderRadius = "10px";
        suggestions.style.borderTop = "none";
    }
}

const resetSearch = () => {
    search.value = suggestions.innerHTML = "";
    search.focus();

    search.style.paddingLeft = "1rem";
    document.querySelector(".search_icon_left").style.display = "none";
    document.querySelector(".search_group").style.borderRadius = "10px";
    suggestions.style.borderTop = "none";
}

const searchOverlayHandler = () => {
    search.style.paddingLeft = "1rem";
    document.querySelector(".search_icon_left").style.display = "none";
    document.querySelector(".search_overlay").style.display = "none";
    document.querySelector(".search_group").style.borderRadius = "10px";
    suggestions.style.display = 'none'
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