const burger = document.getElementsByClassName('burger')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

$("burger").click(function(){
    $("navbar-links").toggle('active');
  });


