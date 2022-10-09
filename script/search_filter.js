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