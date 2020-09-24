var video_player = document.getElementById("video_player"),
    links = video_player.getElementsByTagName('a');
for (var i = 0; i < links.length; i++) {
    links[i].onclick = handler;
}
function handler(e) {
    e.preventDefault();
    videotarget = this.getAttribute("href");
    filename = videotarget.substr(0, videotarget.lastIndexOf('.')) || videotarget;
    video = document.querySelector("#video_player video");
    video.removeAttribute('poster');
    source = document.querySelectorAll("#video_player video source");
    source[0].src = filename + ".mp4";
    video.load();
    video.play();
}
// function copyTitle() {
//     var clix = document.getElementsByClassName("vid-title").innerHTML;
//     document.getElementById("descript").innerHTML =  clix;
//   }
var textWrapper = document.getElementsByClassName('ml11 ,letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({loop: true})
  .add({
    targets: '.ml11 .line',
    scaleY: [0,1],
    opacity: [0.5,1],
    easing: "easeOutExpo",
    duration: 700
  })
  .add({
    targets: '.ml11 .line',
    translateX: [0, document.querySelector('.ml11 .letters').getBoundingClientRect().width + 10],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100
  }).add({
    targets: '.ml11 .letter',
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 600,
    offset: '-=775',
    delay: (el, i) => 34 * (i+1)
  }).add({
    targets: '.ml11',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });