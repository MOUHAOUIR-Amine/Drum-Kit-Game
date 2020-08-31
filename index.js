for (i = 0; i<7; i++){
document.querySelectorAll("button")[i].addEventListener("click",player);
}
function player(){
  var buttonInner=this.innerHTML;
  makesound(buttonInner);
  anim(buttonInner);
}

document.addEventListener("keydown",bord);
function bord(touche){
  makesound(touche.key);
  anim(touche.key);
}
function makesound(key){
switch (key) {
  case 'w':
    var audio=new Audio('sounds/crash.mp3');
    audio.play();
    break;
    case 'a':
      var audio=new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
      case 's':
        var audio=new Audio('sounds/snare.mp3');
        audio.play();
        break;
        case 'd':
          var audio=new Audio('sounds/tom-1.mp3');
          audio.play();
          break;
          case 'j':
            var audio=new Audio('sounds/tom-2.mp3');
            audio.play();
            break;
            case 'k':
              var audio=new Audio('sounds/tom-3.mp3');
              audio.play();
              break;
              case 'l':
                var audio=new Audio('sounds/tom-4.mp3');
                audio.play();
                break;

  default:console.log(buttonInner);

}}
function anim(ckey){
  var bton=document.querySelector("."+ckey);
  bton.classList.add("pressed");
  setTimeout(function(){bton.classList.remove("pressed");},100);
}
