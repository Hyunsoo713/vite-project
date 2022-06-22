import './style3.scss';
import './reset.scss';

var target = document.querySelectorAll('.artist-page');
console.log(target);

var target1= document.querySelectorAll('.popup');
console.log(target1);

// 팝업 열기

for(var i = 0; i < target.length; i++){
  target[i].addEventListener('click', function(e){

    $('.popup')[0].style.display = 'flex';

    if (e.target.className.includes('1')) {
      $(`#popup-1`)[0].style.display = 'block';
    } else if(e.target.className.includes('2')) {
      $(`#popup-2`)[0].style.display = 'block';
    } else if(e.target.className.includes('3')) {
      $(`#popup-3`)[0].style.display = 'block';
    } else if(e.target.className.includes('4')) {
      $(`#popup-4`)[0].style.display = 'block';
    }
  });
}


// 팝업 닫기
for(var j = 0; j < target.length; j++){
  target1[j].addEventListener('click', function(e){

    $('.popup')[0].style.display='none';

    if (e.target.className.includes('1')) {
      $(`#popup-1`)[0].style.display = 'none';
    } else if(e.target.className.includes('2')) {
      $(`#popup-2`)[0].style.display = 'none';
    } else if(e.target.className.includes('3')) {
      $(`#popup-3`)[0].style.display = 'none';
    } else if(e.target.className.includes('4')) {
      $(`#popup-4`)[0].style.display = 'none';
    }
  });
}


