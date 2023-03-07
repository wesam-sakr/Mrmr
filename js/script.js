var navbar = document.getElementsByClassName("navbar");
var sticky = navbar[0].offsetHeight ;


// make nav bar static on scroll 
window.addEventListener("scroll" , function(){
    if (this.document.documentElement.scrollTop >= sticky) {
        $(navbar).css("position", "fixed");
        $(navbar).css("background", "#fff");
    } else {
        $(navbar).css("background", "transparent")
        $(navbar).css("position", "sticky");
    }
})

function myFunction(link) {
  var x =document.getElementsByClassName("nav-link");
  for(i=0 ; i<x.length ; i++){
      x[i].style.color="#9B9B9B";
  }
  link.style.color="#593FB7"
}


$.fn.toggleText = function(t1, t2){
    if(this.text() == t1){
     this.text(t2);
   }else{                   
     this.text(t1);
   }
    return this;
};

$('#lang').click(function(){
    $(this).toggleText('العربية','English');
});


// --------- aos ----------

AOS.init();






