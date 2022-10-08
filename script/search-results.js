const countries = ["Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Anguilla", "Antigua &amp; Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia &amp; Herzegovina", "Botswana", "Brazil", "British Virgin Islands", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central Arfrican Republic", "Chad", "Chile", "China", "Colombia", "Congo", "Cook Islands", "Costa Rica", "Cote D Ivoire", "Croatia", "Cuba", "Curacao", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Faroe Islands", "Fiji", "Finland", "France", "French Polynesia", "French West Indies", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece", "Greenland", "Grenada", "Guam", "Guatemala", "Guernsey", "Guinea", "Guinea Bissau", "Guyana", "Haiti", "Honduras", "Hong Kong", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Isle of Man", "Israel", "Italy", "Jamaica", "Japan", "Jersey", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Micronesia", "Moldova", "Monaco", "Mongolia", "Montenegro", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nauro", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Reunion", "Romania", "Russia", "Rwanda", "Saint Pierre &amp; Miquelon", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal", "Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "St Kitts &amp; Nevis", "St Lucia", "St Vincent", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Timor L'Este", "Togo", "Tonga", "Trinidad &amp; Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks &amp; Caicos", "Tuvalu", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States of America", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela", "Vietnam", "Virgin Islands (US)", "Yemen", "Zambia", "Zimbabwe"];


const sidebar = document.querySelector('#sidebar'),
    sidebarOverlay = document.querySelector('.sidebar_overlay');

const sidebarOpen = () => {
    sidebar.classList.add("active")
    sidebarOverlay.classList.add("active");
};

const sidebarClose = () => {
    sidebar.classList.remove("active")
    sidebarOverlay.classList.remove("active");
};


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


const resetPopupSearch = () => {
    countries.map((region) => {
        document.querySelector('.all_regions').innerHTML += `<li>${region}</li>`
    })
};

window.addEventListener('load', resetPopupSearch);