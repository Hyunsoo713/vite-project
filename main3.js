import './style3.scss';
import './reset.scss';


function changeImage(){
document.getElementsByClassName(".artist-page-1").src="./a.png";  
}

var target = document.querySelectorAll('.artist-page-1');
var targetID;

// 팝업 열기

for(var i = 0; i < target.length; i++){
  target[i].addEventListener('click', function(e){
   // console.log(e.target.id);
    document.getElementById('popup-1').style.display = 'block';
  });
}

// 팝업 닫기
//for(var j = 0; j < target.length; j++){
  //btnPopClose[j].addEventListener('click', function(){
    //this.parentNode.parentNode.style.display = 'none';
  //});
//}


