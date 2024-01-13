var navMenuAnchorTags = document.querySelectorAll('.nav-menu a');
console.log(navMenuAnchorTags);

for (var i = 0; i < navMenuAnchorTags.length; i++) {
    navMenuAnchorTags[i].addEventListener('click', function (event) {
        event.preventDefault();

        // Get the text content and convert it to lowercase
        var targetSectionID = this.textContent.trim().toLowerCase();

        // Check if targetSectionID is empty
        if (!targetSectionID) {
            console.error("Empty target section ID");
            return;
        }

        console.log("Target Section ID:", targetSectionID);

        // Get the target section using the ID
        var targetSection = document.getElementById(targetSectionID);

        // Check if targetSection is null
        if (!targetSection) {
            console.error("Target section not found");
            return;
        }

        console.log("Target Section:", targetSection);

        // Scroll to the target section
        var interval = setInterval(function () {
            var targetSectionCoordinates = targetSection.getBoundingClientRect();
            if (targetSectionCoordinates.top <= 0) {
                clearInterval(interval);
                return;
            }
            window.scrollBy(0, 50);
        }, 20);
    });
}
