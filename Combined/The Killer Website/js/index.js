
$(document).ready(function(){
$('.section-features').waypoint(function(direction){
if(direction =='down'){
    $('nav').addClass('sticky');
}else{
    $('nav').removeClass('sticky');

}
});

});