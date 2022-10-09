const searchFilter = `<div class="search_filter">
<div class="search_filter_options">
    <div class="search_filter_overlay"></div>
    <div class="search_filter_option">
        <p class="search_filter_handler">All regions <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
        </p>
        <div class="search_filter_popup popup1">
            <form action="" class="popup_search_form">
                <div class="popup_search_icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                        stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </div>

                <div class="popup_input">
                    <input type="text" placeholder="Search" oninput="filter(event)">
                </div>

                <div class="popup_clear"
                    onclick="document.querySelector('.popup_input input').value = ''; resetPopupSearch()">
                    Clear</div>
            </form>

            <ul class="regions">
                <li>United States</li>
                <li>Bangladesh</li>
            </ul>

            <div>
                <p class="all_regions_header"><svg xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                    All regions</p>
                <ul class="all_regions"></ul>
            </div>
        </div>
    </div>
    <div class="search_filter_option">
        <p class="search_filter_handler">Safe search: Moderate <svg xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
        </p>
        <div class="search_filter_popup">
            <ul class="safe_search">
                <li>Strict</li>
                <li>Moderate</li>
                <li>Off</li>
            </ul>
        </div>
    </div>
    <div class="search_filter_option">
        <p class="search_filter_handler">Any time <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
        </p>
        <div class="search_filter_popup date_range_popup">
            <ul class="date_range">
                <li>Any time</li>
                <li>Past week</li>
                <li>Past month</li>
                <li>Past year</li>
                <li>Custom range</li>
            </ul>
        </div>
    </div>
</div>
<div class="search_filter_option location_option">
    <div class="search_filter_location_icon search_filter_handler">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
            stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
            <path stroke-linecap="round" stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
    </div>
    <div class="search_filter_popup location_popup">
        <div class="location_popup_header">
            <h4>Anonymous local results</h4>
            <label class="switch">
                <input type="checkbox">
                <span class="slider round"></span>
            </label>
        </div>
        <p>Location information is derived from your IP address for more accurate results. It's stored
            only on your device. Brave never stores your IP or geo coordinates. Learn more.</p>
        <div class="location_popup_bottom">
            <p>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                    stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Noakhali, 3890, BD
            </p>

            <div>
                Set menuallly
            </div>
        </div>
    </div>
</div>
</div>`;

const searchFilterStyles = `<style>
#search_filter {
    max-width: 1280px;
    width: 90vw;
    margin: 0 auto;
}

.search_filter {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 12px;
    max-width: 650px;
    margin: .65rem 0;
    margin-left: 1rem;
    user-select: none;
}

.search_filter svg {
    width: 1rem;
    height: 1rem;
}

.search_filter_options {
    display: flex;
    align-items: center;
    gap: 1rem;
}

.search_filter_option {
    position: relative;
}

.search_filter_handler {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    cursor: pointer;
}

.search_filter_handler:hover {
    color: var(--brave-blue-color);
}

.search_filter_popup {
    position: absolute;
    top: 1.5rem;
    left: 0;
    min-width: 200px;
    background-color: #fff;
    box-shadow: 2px 2px 16px rgba(0 0 0 / 12%);
    border-radius: 10px;
    transform: translateY(-20px);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
}

.location_popup {
    left: unset;
    right: 25%;
    padding: 1rem 2rem;
    min-width: 450px;
    color: #555;
}

.location_popup_header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.location_popup h4 {
    font-size: 1rem;
    font-weight: 500;
}

.switch {
    position: relative;
    display: inline-block;
    width: 50px;
    height: 25px;
    /* width: 60px;
    height: 34px; */
}

.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ddd;
    -webkit-transition: .4s;
    transition: .4s;
    border: 2px solid transparent;
}

.slider:hover {
    border-color: var(--brave-blue-color);
}

.slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 1px;
    bottom: 1px;
    background-color: #fff;
    -webkit-transition: .4s;
    transition: .4s;
}

input:checked+.slider::before {
    background-color: var(--brave-blue-color);
}

input:focus+.slider {
    box-shadow: 0 0 1px var(--brave-blue-color);
}

input:checked+.slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
}

.slider.round {
    border-radius: 34px;
}

.slider.round:before {
    border-radius: 50%;
}

.location_popup_bottom {
    margin: 1rem 0;
    display: flex;
    align-items: center;
    gap: 1rem;
}

.location_popup_bottom>p {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    font-weight: 500;
    font-size: 1rem;
}

.location_popup_bottom>div {
    border: 1px solid #ddd;
    padding: 5px 1rem;
    border-radius: 30px;
    font-weight: 700;
    font-size: 14px;
    transition: var(--transition);
}

.location_popup_bottom>div:hover {
    border-color: var(--brave-blue-color);
    color: var(--brave-blue-color);
}

.search_filter_overlay {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
}

.search_filter_overlay.active {
    right: 0;
}

.search_filter_popup.active {
    visibility: visible;
    opacity: 1;
    transform: translate(0);
}

.popup1 {
    max-height: 350px;
    overflow-x: auto;
}

.popup1::-webkit-scrollbar {
    width: 7px;
}

.popup1::-webkit-scrollbar-thumb {
    background-color: #999;
    border-radius: 100px;
}

.popup_search_form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #efefef;
}

.popup_search_icon {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.popup_input input {
    padding: .8rem 5px;
    font-size: 1rem;
    border: none;
    width: 150px;
}

.popup_input input:focus {
    outline: none;
}

.popup_clear {
    max-height: 40px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: 1px solid #dfdfdf;
    cursor: pointer;
}

.regions,
.all_regions,
.safe_search,
.date_range {
    padding: .5rem 0;
    border-bottom: 1px solid #efefef;
}

.regions li,
.all_regions li,
.safe_search li,
.date_range li {
    padding: 5px 1rem;
    font-size: 13px;
    cursor: pointer;
}

.regions li:hover,
.all_regions li:hover,
.safe_search li:hover,
.date_range li:hover {
    background-color: #efefef;
}

.all_regions_header {
    display: flex;
    align-items: center;
    font-weight: 700;
    font-size: 14px;
    color: #555;
    gap: 1rem;
    padding: .5rem 1rem 0 1rem;
}
</style>`

document.getElementById("search_filter").innerHTML = searchFilter + searchFilterStyles;

document.querySelectorAll('.search_filter_handler').forEach((item, i) => {
    item.addEventListener("click", () => {
        document.querySelectorAll('.search_filter_popup')[i].classList.toggle('active');
        document.querySelector('.search_filter_overlay').classList.add('active');

        if (i === 0) {
            document.querySelectorAll('.search_filter_popup')[1].classList.remove('active')
            document.querySelectorAll('.search_filter_popup')[2].classList.remove('active')
            document.querySelectorAll('.search_filter_popup')[3].classList.remove('active')
        }
        else if (i === 1) {
            document.querySelectorAll('.search_filter_popup')[0].classList.remove('active')
            document.querySelectorAll('.search_filter_popup')[2].classList.remove('active')
            document.querySelectorAll('.search_filter_popup')[3].classList.remove('active')
        }
        else if (i === 2) {
            document.querySelectorAll('.search_filter_popup')[0].classList.remove('active')
            document.querySelectorAll('.search_filter_popup')[1].classList.remove('active')
            document.querySelectorAll('.search_filter_popup')[3].classList.remove('active')
        }
        else {
            document.querySelectorAll('.search_filter_popup')[0].classList.remove('active')
            document.querySelectorAll('.search_filter_popup')[1].classList.remove('active')
            document.querySelectorAll('.search_filter_popup')[2].classList.remove('active')
        }

    });

    document.querySelector('.search_filter_overlay').addEventListener('click', () => {
        document.querySelectorAll('.search_filter_popup')[i].classList.remove('active');
        document.querySelector('.search_filter_overlay').classList.remove('active');
    });
});

const filter = (event) => {
    document.querySelector('.all_regions').innerHTML = ``

    let value = event.target.value;

    if (value) {
        let filter = countries.filter(region => {
            let regx = new RegExp(value, 'gi');
            return region.match(regx);
        });

        filter.map(item => (
            document.querySelector('.all_regions').innerHTML += `<li>${item}</li>`
        ))
    }
    else {
        resetPopupSearch()
    }
};

const resetPopupSearch = () => {
    countries.map((region) => {
        document.querySelector('.all_regions').innerHTML += `<li>${region}</li>`
    })
};

window.addEventListener('load', resetPopupSearch);