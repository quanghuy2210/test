
//slider-show
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity( elem, {
  // options
  cellAlign: 'left',
  contain: true,
  groupCells: 1,
  autoPlay: 2000,
  // freeScroll: true,
  wrapAround: true
});


// scroll >> xuất hiện arrow-up
function blockUp(){
  let up = document.getElementById('arrow-up');
  console.log(up)
  let scrollValue = window.scrollY;
 if(scrollValue > 50){
   up.classList.add('arrow-block');
 }
 else{
   up.classList.remove('arrow-block');
 }
}
window.addEventListener('scroll', blockUp);