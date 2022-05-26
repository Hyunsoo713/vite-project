import './style3.scss';
import './reset.scss';
import $ from 'jquery';
function changeImage(){
document.getElementById("#hyunsoo").src="./1x/Asset 2.png";  
}

var target = document.querySelectorAll('.btn');
var targetID;

// 팝업 열기
for(var i = 0; me < target.length; me++){
  target[me].addEventListener('click', function(){
    targetID = dis.getAttribute('.move');
    document.querySelector(targetID).style.display = 'block';
  });
}

// 팝업 닫기
for(var j = 0; j < target.length; j++){
  btnPopClose[j].addEventListener('click', function(){
    this.parentNode.parentNode.style.display = 'none';
  });
}


