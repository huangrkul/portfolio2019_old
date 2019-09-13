var iframeSrcs = [
  "media/Blizzcon/Blizzcon_300x250/index.html",
  "media/TMO_Holiday/TMO_Holiday_2018_300x250/index.html",
  "media/TMO_AppleTesting/Q418-TMO-168_Apple-Testing_OnUs_BATTERY_CUSTOM_H5_EL_300x250/index.html",
  "media/EveryPurpose/300x250_EveryPurpose/300x250_EveryPurpose.html",
  "media/Aflac/q117_afl_013_300x250_h5/index.html",
  "media/Devour/cheddar_300x250/index.html"
];
  // "media/MLB/Q317-TMO-284_300x250_MLB_RegSeason2_National_Bryce_H5/index.html",
  // "media/TMO_Livenation/Q318-TMO-137_300x250_Live-Nation_Khalifa_H5/index.html",
  // "media/VisitSeattle/first_300x250/index.html"

var playBtns;
var staticBtns;
var iframeObjs;
var bannerDesc;
var bannerID;

function bannersInit(){
  playBtns = document.getElementsByClassName('banner-title-btn');
  staticBtns = document.getElementsByClassName('banner-static');
  iframeObjs = document.getElementsByClassName('iframe-banner');
  bannerDesc = document.getElementsByClassName('banner-desc');
  for (var i = 0; i < playBtns.length; i++) {
    playBtns[i].addEventListener("click",bannerHandler);
    staticBtns[i].addEventListener("click",bannerHandler);
  }
}

function bannerHandler(e) {
  switch(true) {
    case e.target.classList.contains('banner-id-1'):
      bannerID = 0;
      break;
    case e.target.classList.contains('banner-id-3'):
      bannerID = 1;
      break;
    // case e.target.classList.contains('banner-id-3'):
    //   bannerID = 2;
    //   break;
    case e.target.classList.contains('banner-id-5'):
      bannerID = 2;
      break;
    // case e.target.classList.contains('banner-id-5'):
    //   bannerID = 4;
    //   break;
    case e.target.classList.contains('banner-id-6'):
      bannerID = 3;
      break;
    case e.target.classList.contains('banner-id-7'):
      bannerID = 4;
      break;
    case e.target.classList.contains('banner-id-8'):
      bannerID = 5;
      break;
    // case e.target.classList.contains('banner-id-9'):
    //   bannerID = 8;
    //   break;
  }

  if(bannerID !== "NULL"){
    playBtns[bannerID].removeEventListener("click",bannerHandler);
    staticBtns[bannerID].removeEventListener("click",bannerHandler);
    iframeObjs[bannerID].src = iframeSrcs[bannerID];
    iframeObjs[bannerID].classList.remove("vis-hid");
    staticBtns[bannerID].classList.add("vis-hid");
    playBtns[bannerID].addEventListener("click",bannerHandler);
    staticBtns[bannerID].addEventListener("click",bannerHandler);
  }
}
