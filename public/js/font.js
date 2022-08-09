
$(function(){
document.getElementsByTagName('html')[0].style.fontSize = document.documentElement.clientWidth/19.2 + 'px'
      window.onresize = function() {
          document.getElementsByTagName('html')[0].style.fontSize = document.documentElement.clientWidth/19.2 + 'px'
      }
});