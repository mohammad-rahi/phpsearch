const footerStyles = `<style>
/* Search Results Footer */
.search_results_footer {
    background-color: #fff;
}

.search_results_footer_wrapper {
    max-width: 1280px;
    margin: 0 auto;
}

.search_results_footer_content {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    padding: 2rem 3rem;
    gap: .5rem;
}

.search_results_footer_content h6 {
    font-size: 1rem;
    font-weight: 500;
    color: #555;
}

.search_results_footer_content li {
    font-size: 12px;
    color: #555;
    cursor: pointer;
    margin-top: 5px;
    width: fit-content;
    font-weight: 300;
}

.search_results_footer_content li:hover {
    text-decoration: underline;
}

@media only screen and (max-width: 800px) {
    .search_results_footer_content {
        padding: 3rem 1rem 5rem 1rem;
    }
}
</style>`;

const footer = `<footer class="search_results_footer">
<div class="search_results_footer_wrapper">
    <div class="search_results_footer_content">
        <div>
            <h6>Resources</h6>
            <ul>
                <li>Brave Search Help</li>
                <li>Transparency Report</li>
                <li>Report a security issue</li>
                <li>Status</li>
            </ul>
        </div>

        <div>
            <h6>Products</h6>
            <ul>
                <li>Brave Browser</li>
                <li>Brave Search</li>
                <li>Brave Wallet</li>
                <li>Brave Talk</li>
                <li>Brave Firewall + VPN</li>
                <li>Brave Playlist</li>
                <li>Brave News</li>
                <li>Brave Rewards</li>
            </ul>
        </div>

        <div>
            <h6>Policies</h6>
            <ul>
                <li>Privacy Policy</li>
                <li>Terms of Use</li>
            </ul>
        </div>
    </div>
</div>
</footer>`;

document.querySelector("#footer").innerHTML = footerStyles + footer;