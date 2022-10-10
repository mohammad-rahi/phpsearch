const searchMobile = document.querySelector('.search_form_mobile #search');
const suggestionsMobile = document.querySelector(".search_form_mobile .suggestions");
const searchOverlayMobile = document.querySelector(".search_form_mobile .search_ovelay");

const autoCompleteMobile = (event) => {
    let value = event.target.value;

    if (value) {
        let res = countries.filter(country => {
            let regx = new RegExp(value, 'gi');
            return country.match(regx)
        })

        let list = res.map(country => {
            return `<li><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class='list_search_icon'><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10 607z" /></svg> ${country}</li>`
        }).join("");

        suggestionsMobile.innerHTML = list;

        searchMobile.style.paddingLeft = "5px";
        // document.querySelector(".search_overlay").style.display = "block";
        document.querySelector(".search_form_mobile .close_icon").style.display = "block";
        suggestionsMobile.style.borderTop = "1px solid #efdfdf";

    }
    else {
        suggestionsMobile.innerHTML = ""
        searchMobile.style.paddingLeft = "1rem";
        document.querySelector(".search_overlay").style.display = "none";
        document.querySelector(".search_form_mobile .close_icon").style.display = "none";
        document.querySelector(".search_group").style.borderRadius = "10px";
        suggestionsMobile.style.borderTop = "none";
    }
}

const resetSearchMobile = () => {
    searchMobile.value = suggestionsMobile.innerHTML = "";
    searchMobile.focus();

    searchMobile.style.paddingLeft = "1rem";
    document.querySelector(".search_icon_left").style.display = "none";
    document.querySelector(".search_group").style.borderRadius = "10px";
    suggestionsMobile.style.borderTop = "none";
}

const searchOverlayHandlerMobile = () => {
    searchMobile.style.paddingLeft = "1rem";
    document.querySelector(".search_icon_left").style.display = "none";
    document.querySelector(".search_overlay").style.display = "none";
    document.querySelector(".search_group").style.borderRadius = "10px";
    suggestionsMobile.style.display = 'none'
}

const searchMobileBack = () => {
    document.querySelector('.search_form_mobile').classList.remove('active');
    document.querySelector('#search_form #search').value = '';
    document.querySelector('#search_form .suggestions').style.display = 'none';
    document.querySelector('#search_form .close_icon').style.display = 'none';
    document.querySelector('#search_form .search_icon_left').style.display = 'none';

    resetSearchMobile();
}

const suggestionsBLockMobile = () => {
    suggestionsMobile.style.display = "block";
}

searchOverlay.addEventListener("click", () => {
    suggestionsMobile.style.display = "none";
});

searchMobile.addEventListener("input", autoCompleteMobile);

searchMobile.addEventListener("focus", suggestionsBLockMobile);