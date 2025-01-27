//Function to log out the user
function logOutUser() {
    document.querySelectorAll(`#log-out-icon`).forEach(entrie => {
        entrie.addEventListener(`click`, () => {
            // Set expiry to a past date, and include path and domain
            document.cookie = "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "recently_viewed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; ";

            // Reload the page
            location.reload();
        });
    });
    document.querySelectorAll(`#log-out-text`).forEach(entrie => {
        entrie.addEventListener(`click`, () => {
            // Set expiry to a past date, and include path and domain
            document.cookie = "authToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
            document.cookie = "recently_viewed=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; ";

            // Reload the page
            location.reload();
        });
    });
}

var favoriteVehicles = [];

// Function to check the login status
var authToken = getCookie("authToken");

function checkLoginStatus() {
    // Retrieve the auth token from cookies

    if (authToken) {
        // User is logged in
        document.querySelectorAll(`input[type="checkbox"]`).forEach(entry => {
            entry.addEventListener("change", (trackFavoriteStatus));
        });
        logOutUser();
    } else {
        // User is not logged in
        console.log('User is not logged in.');
        if (window.location.origin.includes(`auto-show`)) {
            document.getElementById('order-car-container').addEventListener(`click`, () => {
                document.getElementById('overlay').style.display = 'flex';
            });
        }
        document.querySelectorAll(`input[type="checkbox"]`).forEach(entrie => {
            entrie.addEventListener(`click`, () => {
                entrie.checked = false;
                document.getElementById('overlay').style.display = 'flex';
            });
        });
    }
}

// Call the function when the page is loaded
$(document).ready(function () {
    checkLoginStatus();
});

function trackFavoriteStatus(e) {
    let carId = e.currentTarget.parentNode.parentNode.parentNode.children[e.currentTarget.parentNode.parentNode.parentNode.children.length - 1].href;
    if (e.currentTarget.parentNode.parentNode.parentNode.parentNode.classList.contains(`cars-container`)) {
        checkRecentlyViewedCarFavoriteStatus(carId, e.currentTarget.checked, e.currentTarget);
    } else {
        checkCarsContainerFavoriteStatus(carId, e.currentTarget.checked, e.currentTarget);
    }
    carId = carId.substring(carId.lastIndexOf(`car=`), carId.length).replaceAll(`%20`, ` `).split(`car=`)[1];
    if (e.currentTarget.checked && !e.currentTarget.classList.contains(`checked`)) {
        e.currentTarget.classList.add(`checked`);
        e.currentTarget.parentNode.querySelector(`i`).style.color = `orange`;
        const carImg = e.currentTarget.parentNode.parentNode.parentNode.children[0]
            .children[0].getAttribute("src");
        const carName = e.currentTarget.parentNode.parentNode.parentNode.children[1].children[0].textContent;
        e.currentTarget.parentNode.parentNode.children[0].textContent = `Remove from Favorites`;
        fetch(`${window.location.origin}/api/favorites/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: userId,
                vehicleId: carId,
                vehicleImg: carImg,
                vehicleName: carName,
                authToken: authToken
            })
        })
            .then(response => console.log(response))
            .catch(err => console.log(err));
    } else if (e.currentTarget.classList.contains(`checked`)) {
        e.currentTarget.classList.remove(`checked`);
        e.currentTarget.parentNode.querySelector(`i`).style.color = `#666`;
        e.currentTarget.parentNode.parentNode.children[0].textContent = `Add to Favorites`;
        fetch(`${window.location.origin}/api/favorites/remove`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                userId: userId,
                vehicleId: carId,
                authToken: authToken
            })
        })
            .then(response => console.log(response))
            .catch(err => console.log(err));
    }
}

function checkRecentlyViewedCarFavoriteStatus(vehicleId, checked) {
    if (checked) {
        document.querySelectorAll(`.recently-viewed-cars .car-card a`).forEach(entrie => {
            if (entrie.href === vehicleId) {
                entrie.parentNode.querySelector(`.favorites .add-fav i`).style.color = `orange`;
                entrie.parentNode.querySelector(`.favorites .add-fav input`).classList.add(`checked`);
                entrie.parentNode.querySelector(`.favorites .add-fav input`).checked = true;
                entrie.parentNode.querySelector(`.favorites h3`).textContent = `Remove from Favorites`;
            }
        });
    } else {
        document.querySelectorAll(`.recently-viewed-cars .car-card a`).forEach(entrie => {
            if (entrie.href === vehicleId) {
                entrie.parentNode.querySelector(`.favorites .add-fav i`).style.color = `#666`;
                entrie.parentNode.querySelector(`.favorites .add-fav input`).classList.remove(`checked`);
                entrie.parentNode.querySelector(`.favorites .add-fav input`).checked = false;
                entrie.parentNode.querySelector(`.favorites h3`).textContent = `Add to Favorites`;
            }
        });
    }
}

function checkCarsContainerFavoriteStatus(vehicleId, checked) {
    if (checked) {
        document.querySelectorAll(`.cars-container .car-card a`).forEach(entrie => {
            if (entrie.href === vehicleId) {
                entrie.parentNode.querySelector(`.favorites .add-fav i`).style.color = `orange`;
                entrie.parentNode.querySelector(`.favorites .add-fav input`).classList.add(`checked`);
                entrie.parentNode.querySelector(`.favorites .add-fav input`).checked = true;
                entrie.parentNode.querySelector(`.favorites h3`).textContent = `Remove from Favorites`;
            }
        });
    } else {
        document.querySelectorAll(`.cars-container .car-card a`).forEach(entrie => {
            if (entrie.href === vehicleId) {
                entrie.parentNode.querySelector(`.favorites .add-fav i`).style.color = `#666`;
                entrie.parentNode.querySelector(`.favorites .add-fav input`).classList.remove(`checked`);
                entrie.parentNode.querySelector(`.favorites .add-fav input`).checked = false;
                entrie.parentNode.querySelector(`.favorites h3`).textContent = `Add to Favorites`;
            }
        });
    }
}

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            // Check if the cookie name matches
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
