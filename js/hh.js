// popovers Initialization
$(function () {
  $('[data-toggle="popover"]').popover()
})

function openForm() {
  document.getElementById("conForm").style.display = "block";
}

function closeForm() {
  document.getElementById("conForm").style.display = "none";
} 

$('.view-item[data-toggle="collapse"]').on('click', function(event) {
  var target = $(event.target).data('target');
  
  var isOpen = $(target).hasClass('show');
  var isOtherOpen = !! $(target).siblings('.collapse.show').length;
  
  if (isOpen && ! isOtherOpen) event.stopPropagation();
  
  if (isOtherOpen) $('.collapse').collapse('hide');
});

document.querySelector(".navbar-toggler").addEventListener("click", function(e){ document.querySelector("#hhnav").classList.toggle("show"); }); 