
$('.sidenav_button i').click(()=>{
  $('.sidebar').css('width','400px')
   $('.dark-bg').css('display','block')
})

$('.sidebar .fa-xmark').click(()=>{
   
    $('.sidebar').css('width','0')
    $('.dark-bg').css('display','none')
})
$('.dark-bg').click(()=>{
    $('.sidebar').css('width','0')
    $('.dark-bg').css('display','none')
})

// FOR SMALLER SCREEN
$('#icon_img').click(()=>{
    $('.sidebar').css('width','100%')
    $('.dark-bg').css('display','block')
})

  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.body.style.backgroundColor = "white";
  }
