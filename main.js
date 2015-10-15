var chuck = 0;
var pichachu = 0;
var chuckNorris = document.getElementById("chuckNorris");
var pichachuP = document.getElementById("pichachu")
var hero =  document.getElementById("hero");
var winner = document.getElementById("punch");
var looser =  document.getElementById("jab");

winner.addEventListener("click", punch)
looser.addEventListener("click", jab)

function  punch(){
  console.log("punch");
  hero.src = "https://i.ytimg.com/vi/SMtcQiLoXXU/hqdefault.jpg";
  console.log("clicked");
  chuck +=1;
  chuckNorris.innerHTML= chuck;
};
function jab(){
  console.log("jab");
  hero.src = "http://img05.deviantart.net/d748/i/2009/230/3/5/pokeball_to_the_face_by_natmaxex.jpg";
  pichachu += 1;
  pichachuP.innerHTML = pichachu;
}
function terminate(){
  if(chuck > 5){
  document.getElementById("looser").src= "http://weknowyourdreams.com/images/nature/nature-03.jpg";
  document.getElementByClass("box").src= "http://weknowyourdreams.com/images/nature/nature-03.jpg";
}
}
terminate();
