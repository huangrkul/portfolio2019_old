var timerTitle = 0;
var timerResume = 0;
var titleArray = [
  "Front-End Web Developer",
  "2D/3D Animator",
  "Digital Generalist",
  "Banner Making Machine",
  "Video Content Creator"
];
var itemIndex = 0;
var isProcessing = false;

var titles;
var willsaur;
var mrResume;
var menuBtn;
var navList;

var scrollDivs =  [
  "sectionContainer2","willsaurBox",
  "banner1","banner3","banner5","banner6","banner7","banner8",
  "customDiv_1","customDiv_2","customDiv_3","customDiv_4","customDiv_5","customDiv_6","customDiv_7","customDiv_8",
  "webImg1","webImg2","webImg3"
];

// "banner2","banner4","banner9"

function init() {
  titles = document.getElementById("titlesContainer");
  willsaur = document.getElementById("willsaurWave");
  mrResume = document.getElementById("mrResumeClicked");
  menuBtn = document.getElementById("navMenu");
  navList = document.getElementById("navList");
  var demo2d = document.getElementById("demo2d");
  var demo3d = document.getElementById("demo3d");
  demo2d.preload = "auto";
  demo3d.preload = "auto";

  for (var i = 0; i < scrollTriggerEls.length; i++) {
    scrollTriggerEls[i].el = document.getElementById(scrollDivs[i]);
  }

  for (var i = 0; i < titleArray.length; i++) {
    var titleDiv = document.createElement("div");
    titleDiv.classList.add("title-item","hide");
    titleDiv.innerHTML = titleArray[i];
    titles.appendChild(titleDiv);
  }
  bannersInit();
  triggerIterate(scrollTriggerEls);
  willsaur.addEventListener("mouseover", willsaurHover);
  willsaur.addEventListener("touchstart", willsaurHover);
  mrResume.addEventListener("mouseover", resumeHover);
  mrResume.addEventListener("touchstart", resumeHover);
  menuBtn.addEventListener("click", menuHandler);
  timerTitle = window.setTimeout(logoSeq, 100);
  console.log(navList.style.visibility);
}

function menuHandler() {
  navList.classList.toggle("nav-list-active");
}

function logoSeq() {
  clearTimeout(timerTitle);
  Utils.setAni("logoInner",1,"zoom-enter");
  Utils.setAni("logoOuter",300,"zoom-enter");
  Utils.setAni("logoBtm",300,"zoom-enter");
  Utils.setAni("logoObj",500,"zoom-enter-slow");
  Utils.setAni("navItem1",800,"inbottom-settle");
  Utils.setAni("navItem2",900,"inbottom-settle");
  Utils.setAni("navItem3",1000,"inbottom-settle");
  Utils.setAni("navItem4",1100,"inbottom-settle");
  timerTitle = window.setTimeout(nameSeq, 1000);
}

function nameSeq() {
  clearTimeout(timerTitle);
  var will = document.getElementById('will');
  will.src = "img/willsequence.gif";
  Utils.setAni("huang1",1000,"inbtm-settle");
  Utils.setAni("huang2",1000,"intop-settle");
  timerTitle = window.setTimeout(titleSeq, 1600);
}

function titleSeq() {
  clearTimeout(timerTitle);
  var titleItems = document.getElementsByClassName('title-item');
  titleItems[itemIndex].classList.add('title-sequence');
  Utils.setAni("icoLink",300,"inbottom-settle");
  Utils.setAni("icoEmail",500,"inbottom-settle");
  itemIndex = 1;
  setInterval(function(){
    if(itemIndex < titleItems.length){
      titleItems[itemIndex-1].classList.remove('title-sequence');
      titleItems[itemIndex].classList.add('title-sequence');
      itemIndex++;
    } else {
      titleItems[itemIndex-1].classList.remove('title-sequence');
      itemIndex = 0;
      titleItems[itemIndex].classList.add('title-sequence');
      itemIndex++;
    }
  }, 3000);
}

function section2Reveal() {
  Utils.addAni("aboutTxt","fadein-left");
}

function willsaurInitWave() {
  Utils.setAni("willsaurIdle",1,"hide");
  Utils.setAni("willsaurWave",1,"hide","removeClass");
  Utils.setAni("willsaurWave",3000,"hide","addClass");
  Utils.setAni("willsaurIdle",3000,"hide","removeClass");
}

function willsaurHover() {
  willsaur.removeEventListener("mouseover", willsaurHover);
  willsaur.removeEventListener("touchstart", willsaurHover);
  willsaur.addEventListener("touchend", willsaurOut);
  willsaur.addEventListener("mouseout", willsaurOut);
  Utils.addClass("willsaurIdle","hide");
  Utils.removeClass("willsaurWave","hide");
}

function willsaurOut() {
  willsaur.removeEventListener("mouseout", willsaurOut);
  willsaur.removeEventListener("touchend", willsaurOut);
  willsaur.addEventListener("mouseover", willsaurHover);
  willsaur.addEventListener("touchstart", willsaurHover);
  Utils.addClass("willsaurWave","hide");
  Utils.removeClass("willsaurIdle","hide");
}

function resumeHover() {
  mrResume.removeEventListener("mouseover", resumeHover);
  mrResume.addEventListener("mouseout", resumeOut);
  mrResume.addEventListener("click", resumeClicked);
  Utils.addClass("mrResumeIdle","hide");
  Utils.addClass("mrResumeClicked","hide");
  Utils.removeClass("mrResumeHover","hide");
}

function resumeOut() {
  mrResume.addEventListener("mouseover", resumeHover);
  mrResume.removeEventListener("mouseout", resumeOut);
  Utils.removeClass("mrResumeIdle","hide");
  Utils.addClass("mrResumeClicked","hide");
  Utils.addClass("mrResumeHover","hide");
}

function resumeClicked() {
  if(!isProcessing){
    isProcessing = true;
    mrResume.removeEventListener("click", resumeClicked);
    mrResume.removeEventListener("mouseout", resumeOut);
    mrResume.removeEventListener("mouseout", resumeHover);
    mrResume.src = "img/mr_resume_clicked.gif";
    Utils.removeClass("mrResumeClicked","hide");
    Utils.addClass("mrResumeIdle","hide");
    Utils.addClass("mrResumeHover","hide");
    timerResume = window.setTimeout(resumeSend, 2000);
  }
}

function resumeSend() {
  clearTimeout(timerResume);
  mrResume.addEventListener("mouseover", resumeHover);
  var link = document.createElement("a");
  link.download = "william_huang_resume.pdf";
  link.href = "media/william_huang_resume.pdf";
  link.click();
  window.open("media/william_huang_resume.pdf","_blank");
  Utils.addClass("mrResumeHover","hide");
  Utils.addClass("mrResumeClicked","hide");
  Utils.removeClass("mrResumeIdle","hide");
  link = "";
  isProcessing = false;
}
