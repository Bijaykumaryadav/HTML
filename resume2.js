// // skills animation
// var progressBars = document.querySelectorAll('.skill-progress > div');
// var skillsContainer = document.getElementById('skills');
// window.addEventListener('scroll', checkScroll);
// var animationDone = false;
// function initializeBars() {
//     for (let bar of progressBars) {
//         bar.style.width = 0 + '%';
//     }
// }
// initializeBars();
// function fillBars() {
//     for (let bar of progressBars) {
//         let targetWidth = bar.getAttribute('data-bar-width');
//         let currentWidth = 0; // Corrected variable name
//         let interval = setInterval(function () {
//             if (currentWidth > targetWidth) { // Corrected variable name
//                 clearInterval(interval);
//                 return;
//             }
//             currentWidth++;
//             bar.style.width = currentWidth + '%';
//         }, 8);
//     }
// }
// //function fillBar(bar){}
// function checkScroll() {
//     console.log('Scroll event triggered');
//     var coordinates = skillsContainer.getBoundingClientRect();

//     if (!animationDone && coordinates.top <= window.innerHeight) {
//         animationDone = true;
//         console.log('Skills Section Visible');
//         fillBars(); // Call your fillBars function when the skills section is visible
//     }
//     else if(coordinates.top > window.innerHeight){
//         animationDone = false;
//         initializeBars();
//     }
// }
// skills animation
var progressBars = document.querySelectorAll('.skill-progress > div');
var skillsContainer = document.getElementById('skills');
window.addEventListener('scroll', checkScroll);
var animationDone = Array(progressBars.length).fill(false);

function initializeBars() {
    for (let bar of progressBars) {
        bar.style.width = 0 + '%';
    }
}

initializeBars();

function fillBar(bar, index) {
    let targetWidth = bar.getAttribute('data-bar-width');
    let currentWidth = 0;
    let interval = setInterval(function () {
        if (currentWidth >= targetWidth) { // Change to >= for reliability
            clearInterval(interval);
            return;
        }
        currentWidth++;
        bar.style.width = currentWidth + '%';
    }, 8);
    // Set animationDone for this specific bar to true
    animationDone[index] = true;
}

function checkScroll() {
    for (let i = 0; i < progressBars.length; i++) {
        var bar = progressBars[i];
        var coordinates = bar.getBoundingClientRect();
        var isVisible = coordinates.top >= 0 && coordinates.bottom <= window.innerHeight;

        if (!animationDone[i] && isVisible) {
            console.log('Bar ' + i + ' Visible');
            fillBar(bar, i);
        } else if (!isVisible) {
            animationDone[i] = false;
            // Commented out to allow holding animation for the non-visible bars
            // initializeBars();
        }
    }
}
