 var navMenuAnchrTags = document.querySelector('.nav-menu a');
 var interval;
 for(var i = 0; i<navMenuAnchorTags.length ; i++){
    navMenuAnchrTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);
        console.log(targetSection);
        // interval = setInterval(scrollVeertically , 20 , targetSection);
        interval = setInterval(function(){
            scrollVertically(targetSection);
        },20);
    });
 }
function scrollVertically(targetSection){
    var targetSectionCoordinates = targetSection.getBoundingClientRect();
    if(targetSectionCoordinates <=0){
        clearInterval(interval);
        return;
    }
    window.scrollBy(0,50);
}