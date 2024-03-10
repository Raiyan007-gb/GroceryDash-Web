// this is for cookies and wish icon handeling
    // Function to toggle wish icon and store state in cookies
    function toggleWish(itemId) {
        var wishIcon = document.querySelector('[data-itemId="' + itemId + '"] i');
        var currentState = wishIcon.classList.contains('fa-heart-o');
        
        // Toggle class for wish icon
        if (currentState) {
            wishIcon.classList.remove('fa-heart-o');
            wishIcon.classList.add('fa-heart');
        } else {
            wishIcon.classList.remove('fa-heart');
            wishIcon.classList.add('fa-heart-o');
        }

        // Store state in cookies
        document.cookie = "wish_" + itemId + "=" + (currentState ? "1" : "0");
    }

    // Function to check and restore wish icon state from cookies
    function restoreWishState() {
        var wishIcons = document.querySelectorAll('.wish-icon');
        wishIcons.forEach(function (wishIcon) {
            var itemId = wishIcon.getAttribute('data-itemId');
            var cookieName = "wish_" + itemId;
            var currentState = getCookie(cookieName);
            if (currentState === "1") {
                // Toggle class for wish icon if previously toggled
                wishIcon.querySelector('i').classList.remove('fa-heart-o');
                wishIcon.querySelector('i').classList.add('fa-heart');
            }
        });
    }

    // Get cookie value by name
    function getCookie(name) {
        var cookieArr = document.cookie.split(';');
        for (var i = 0; i < cookieArr.length; i++) {
            var cookiePair = cookieArr[i].split('=');
            if (name == cookiePair[0].trim()) {
                return decodeURIComponent(cookiePair[1]);
            }
        }
        return null;
    }

    // Attach event listener to wish icons
    document.addEventListener('DOMContentLoaded', function () {
        restoreWishState();
        var wishIcons = document.querySelectorAll('.wish-icon');
        wishIcons.forEach(function (wishIcon) {
            var itemId = wishIcon.getAttribute('data-itemId');
            wishIcon.addEventListener('click', function () {
                toggleWish(itemId);
            });
        });
    });
// this is for cookies and wish icon handeling ends here
