const headerStyles = `<style>
:root {
    --brave-color: #ff2101;
    --brave-blue-color: #5755d9;
}

.search_header_wrapper {
    width: 99vw;
    max-width: 1580px;
    margin: 0 auto;
}

body {
    background-color: #f2f4f7;
    overflow-x: hidden;
}

.search_header {
    background-color: #f9fafd;
    border-bottom: 1px solid #efdfdf;
}

/*===== Header Top =====*/
.header_top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.3rem .5rem;
}

.header_top_left {
    display: flex;
    align-items: center;
    gap: 3rem;
}

.search_header_logo {
    width: 114px;
    height: 35px;
    background: url('../images/brave.svg') no-repeat center/cover;
}

.search_form {
    position: relative;
    z-index: 1;
}

.search_overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: none;
}

.search_group {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    width: 650px;
    min-height: 45px;
    background-color: #fff;
}

.search_group:hover,
.search_group:focus-within {
    box-shadow: 2px 2px 32px rgba(0 0 0 / 12%);
}

.search_input {
    width: 100%;
    height: 100%;
    border: none;
    padding: 5px;
    padding-left: 1rem;
    font-size: 16px;
    color: #555;
}

.search_input::placeholder {
    color: #aaa;
}

.search_input:focus {
    outline: none;
}

.search_icon,
.close_icon,
.sidebar_close_icon {
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
    cursor: pointer;
}

.search_icon {
    color: var(--brave-color);
    height: 45px;
    width: 50px;
    padding: 12px;
    border-radius: 0 10px 10px 0;
}

.search_icon:hover {
    color: #fff;
    background: linear-gradient(to right bottom, var(--brave-color), var(--brave-blue-color));
}

.close_icon {
    color: #ccc;
    display: none;
}

.close_icon:hover {
    color: #bbb;
}

.search_ovelay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.suggestions {
    border-radius: 0 0 10px 10px;
    width: 650px;
    max-height: 400px;
    position: absolute;
    top: 45px;
    left: 0;
    background-color: var(--bg-primary);
    overflow-y: auto;
}

.suggestions::-webkit-scrollbar {
    display: none;
}

.suggestions li {
    padding: .5rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    gap: .5rem;
}

.suggestions li:hover {
    background-color: var(--bg-secondary);
}

.search_icon_left {
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    display: none;
}

.list_search_icon {
    width: 20px;
    height: 20px;
}

.sidebar_wrapper {
    position: absolute;
}

.sidebar_overlay {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    background-color: rgba(0 0 0 / 20%);
    backdrop-filter: blur(5px);
    z-index: 1;
    transition: var(--transition);
}

.sidebar_overlay.active {
    right: 0;
}

#sidebar {
    width: 450px;
    min-height: 100vh;
    background-color: #f2f4f7;
    position: fixed;
    top: 0;
    right: -450px;
    z-index: 100;
    box-shadow: 2px 2px 8px rgba(0 0 0 / 12%);
    transition: var(--transition);
}

#sidebar.active {
    right: 0;
}

.sidebar_header {
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 1.5rem;
}

.sidebar_header_settings_icon_wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .5rem;
    font-weight: 500;
    font-size: 18px;
    color: #555;
}

.sidebar_header_settings_icon {
    width: 28px;
}

.sidebar_header_close_icon {
    width: 23px;
}

.quick_settings {
    background-color: #fff;
    margin: 1rem 1.5rem;
    padding: 1rem;
    border-radius: 10px;
    min-height: 400px;
}

.quick_settings_title {
    color: #555;
    font-size: 1rem;
}

.quick_settings_separate {
    margin-top: .5rem;
    display: block;
    height: 1px;
    background-color: #efefef;
}

/*===== Header Bottom =====*/
.header_bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 650px;
    font-size: 14px;
    margin-left: 10.5rem;
    position: relative;
}

.header_bottom svg {
    width: 1rem;
}

.header_bottom_menu {
    display: flex;
    align-items: center;
    gap: 2rem;
    font-size: 12px;
}

.header_bottom_link {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .4rem;
    padding: .5rem 0;
    border-bottom: 3px solid transparent;
}

.header_bottom_link.active,
.header_bottom_link:hover {
    color: var(--brave-color);
    border-color: var(--brave-color);
}

.dropdown_wrapper {
    position: relative;
}

.dropdown_wrapper:hover>.header_bottom_dropdown {
    transform: translate(0);
    opacity: 1;
    visibility: visible;
}

.header_bottom_dropdown {
    position: absolute;
    background-color: #f9fafd;
    padding: .5rem 0;
    border-radius: 10px;
    box-shadow: 2px 2px 16px rgba(0 0 0 / 12%);
    min-width: 100px;
    transform: translateY(-10px);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition);
    z-index: 10;
}

.videos_mobile {
    display: none;
}

.header_bottom_right_icon {
    display: flex;
}

.settings_icon,
.settings_icon_mobile,
.info_icon,
.feedback_icon,
.sidebar_header_close_icon,
.search_filter_location_icon {
    width: 30px;
    height: 30px;
    color: #555;
    border-radius: 30px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition: all 150ms ease-out;
}

.settings_icon:hover,
.settings_icon_mobile:hover,
.info_icon:hover,
.feedback_icon:hover,
.sidebar_header_close_icon:hover,
.search_filter_location_icon:hover {
    background-color: #efefef;
}

.settings_icon_mobile {
    display: none;
}

@media only screen and (max-width: 1290px) {
    .search_header_logo {
        width: 30px;
        height: 35px;
        background: url('../images/brave-logo-small.svg') no-repeat center/cover;
    }

    .header_bottom {
        margin-left: 5.5rem;
    }
}

@media only screen and (max-width: 800px) {
    .search_header_wrapper {
        width: 95vw;
    }

    .header_top {
        padding: .5rem;
    }

    .header_top_left {
        flex-direction: column;
        align-items: center;
        gap: .5rem;
    }

    .header_logo_icon_wrapper {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 95vw;
        position: relative;
    }

    .settings_icon_mobile {
        position: absolute;
        right: 1rem;
        display: block;
    }

    .settings_icon {
        display: none;
    }

    .search_header_logo {
        width: 114px;
        height: 35px;
        background: url('../images/brave.svg') no-repeat center/cover;
    }

    .search_group,
    .header_bottom,
    .suggestions {
        width: 90vw;
        margin: 0 auto;
    }

    .sidebar_header {
        border-radius: 20px 20px 0 0;
    }

    #sidebar {
        right: 0;
        bottom: -85vh;
        left: 0;
        top: unset;
        width: 100vw;
        min-height: unset;
        height: 85vh;
        border-radius: 20px 20px 0 0;
    }

    #sidebar.active {
        bottom: 0;
    }

    @media only screen and (max-width: 600px) {
        .videos {
            display: none;
        }
    
        .videos_mobile {
            display: block;
        }
    }

    @media only screen and (max-width: 499px) {

        .search_group input,
        .suggestions {
            font-size: 15px;
        }
    
        .header_bottom_menu {
            gap: 1rem;
        }
    }
    
    @media only screen and (max-width: 380px) {
        .header_bottom_right_icon {
            display: none;
        }
    }
}
</style>`

const header = `<header class="search_header">
<div class="search_header_wrapper">
    <!--===== Header Top =====-->
    <div class="header_top">
        <div class="header_top_left">
            <div class="header_logo_icon_wrapper">
                <a href="all.html">
                  <figure class="search_header_logo"></figure>
                </a>
                <div class="settings_icon_mobile" onclick="sidebarOpen()">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </div>
            </div>

            <div class="search_overlay" onclick="searchOverlayHandler()">
            </div>
            <form class="search_form" action="" autocomplete="off">
                <div class="search_group">
                    <div class="search_icon_left">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                    <input type="text" name="search" id="search" class="search_input"
                        placeholder="Search the web privately..." oninput="autoComplete(event)"
                        onfocus="document.querySelector('.suggestions').style.display = 'block'; autoComplete(event)" />
                    <div class="close_icon" onclick="resetSearch()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                    <div class="search_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </div>
                </div>
                <ul id="suggestions" class="suggestions"></ul>
            </form>
        </div>

        <div class="settings_icon" onclick="sidebarOpen()">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
        </div>

        <!--===== Sidebar =====-->
        <div class="sidebar_wrapper">
            <div class="sidebar_overlay" onclick="sidebarClose()"></div>
            <div id="sidebar">
                <div class="sidebar_header">
                    <div class="sidebar_header_settings_icon_wrapper">
                        <div class="sidebar_header_settings_icon">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>
                        Search settings
                    </div>
                    <div class="sidebar_header_close_icon" onclick="sidebarClose()">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </div>
                </div>

                <div class="quick_settings">
                    <h3 class="quick_settings_title">Quick settings</h3>
                    <span class="quick_settings_separate"></span>
                </div>
            </div>
        </div>
    </div>

    <!--===== Header Bottom =====-->
    <div class="header_bottom">
        <ul class="header_bottom_menu">
            <li class="header_bottom_list">
                <a href="all.html" class="header_bottom_link">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    All
                </a>
            </li>
            <li class="header_bottom_list">
                <a href="images.html" class="header_bottom_link">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                    Images
                </a>
            </li>
            <li class="header_bottom_list">
                <a href="#" class="header_bottom_link">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
                    </svg>
                    News
                </a>
            </li>
            <li class="header_bottom_list videos">
                <a href="videos.html" class="header_bottom_link">
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                            d="M1.75 4.5a.25.25 0 00-.25.25v14.5c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25V4.75a.25.25 0 00-.25-.25H1.75zM0 4.75C0 3.784.784 3 1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0122.25 21H1.75A1.75 1.75 0 010 19.25V4.75z" />
                        <path
                            d="M9 15.584V8.416a.5.5 0 01.77-.42l5.576 3.583a.5.5 0 010 .842L9.77 16.005a.5.5 0 01-.77-.42z" />
                    </svg>
                    Videos
                </a>
            </li>
            <li class="header_bottom_list dropdown_wrapper">
                <a href="#" class="header_bottom_link">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" />
                    </svg>
                    More
                </a>

                <ul class="header_bottom_dropdown">
                    <li class="header_bottom_list videos_mobile">
                        <a href="videos.html" class="header_bottom_link">
                            <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M1.75 4.5a.25.25 0 00-.25.25v14.5c0 .138.112.25.25.25h20.5a.25.25 0 00.25-.25V4.75a.25.25 0 00-.25-.25H1.75zM0 4.75C0 3.784.784 3 1.75 3h20.5c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0122.25 21H1.75A1.75 1.75 0 010 19.25V4.75z" />
                                <path
                                    d="M9 15.584V8.416a.5.5 0 01.77-.42l5.576 3.583a.5.5 0 010 .842L9.77 16.005a.5.5 0 01-.77-.42z" />
                            </svg>
                            Videos
                        </a>
                    </li>
                    <li class="header_bottom_list">
                        <a href="#" class="header_bottom_link">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                            </svg>
                            Maps
                        </a>
                    </li>
                    <li class="header_bottom_list">
                        <a href="#" class="header_bottom_link">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                            </svg>
                            Books
                        </a>
                    </li>
                    <li class="header_bottom_list">
                        <a href="#" class="header_bottom_link">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                            </svg>
                            Finance
                        </a>
                    </li>
                </ul>
            </li>
        </ul>

        <div class="header_bottom_right_icon">
            <div class="info_icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                </svg>
            </div>
            <div class="feedback_icon">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                    stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
                </svg>
            </div>
        </div>
    </div>
</div>
</header>`;

document.querySelector("#header").innerHTML = headerStyles + header;

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

const search = document.querySelector('#search');
const suggestions = document.querySelector(".suggestions");
const searchOverlay = document.querySelector(".search_ovelay");

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