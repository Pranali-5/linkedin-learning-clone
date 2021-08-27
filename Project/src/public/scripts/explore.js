// Mahi code --> show more func + Redirection to a page
let show_more_btn = document.querySelector("#show_more_btn");
let moreText = document.getElementById("more");

show_more_btn?.addEventListener("click", myFunction);
function myFunction(e) {
  // e.preventDefault();
  console.log("jjj");
  if (show_more_btn.textContent == "Show more") {
    show_more_btn.textContent = "Show less";
    moreText.style.display = "unset";
  } else {
    show_more_btn.textContent = "Show more";
    moreText.style.display = "none";
  }
}

// Redirection
let logo = document.querySelector(".logo");
logo?.addEventListener("click", () => (window.location.href = "index"));

let hgh_lte1 = document.querySelectorAll(".hgh_lte1");
let freeTrail = document.getElementById("freeTrail");
hgh_lte1?.forEach((el) =>
  el.addEventListener("click", () => (window.location.href = "allCourses"))
);
freeTrail?.addEventListener(
  "click",
  () => (window.location.href = "productsmahi1")
);

let signIn = document.getElementById("signIn");
signIn?.addEventListener("click", () => (window.location.href = "signUp"));

let coursesRed = document.getElementById("coursesRed");
coursesRed?.addEventListener(
  "click",
  () => (window.location.href = "allCourses")
);

let buyForTeam = document.querySelectorAll(".hero__button-muted");
buyForTeam?.forEach((el) =>
  el?.addEventListener("click", () => (window.location.href = "contact"))
);

let startFreeMonth = document.querySelector(".hero__button-primary");
startFreeMonth?.addEventListener(
  "click",
  () => (window.location.href = "productsmahi1")
);

//NavBar
let searchButton = document.querySelector(".searchButton");
let navSelectSearch = document.querySelector("#navSelectSearch");
let navSelect = document.querySelectorAll(".navSelect");

function navInput_Search() {
  navSelect.forEach((el) => (el.style.display = "none"));
  if (navSelectSearch.value == "Learning") navSelect[0].style.display = "unset";
  else if (navSelectSearch.value == "Jobs")
    navSelect[2].style.display = "unset";
  else navSelect[1].style.display = "unset";

  // console.log(navSelectSearch.value)
}
navSelectSearch.addEventListener("click", navInput_Search);
navInput_Search();

//Explore courses Tabs
let tabs_list = document.querySelector(".tabs_list");
let tabs = document.querySelectorAll(".tab-button");
let courses1 = document.querySelector(".courses1");
let hero_section = document.querySelector(".hero_section");
let nav = document.querySelector(".nav");

tabs_list?.addEventListener("click", function tabs_list_selector(e) {
  if (e.target.classList.contains("tab-button")) {
    //Showing Current Tab
    tabs.forEach((t) => t.classList.remove("current-tab"));
    e.target.classList.add("current-tab");

    if (e.target.textContent == "Business") {
      mainLoader(coursesData.businessCourses, courses1);
    } else if (e.target.textContent == "Technology") {
      mainLoader(coursesData.technologyCourses, courses1);
    } else if (e.target.textContent == "Creative") {
      mainLoader(coursesData.creativeCourses, courses1);
    } else {
      mainLoader(coursesData.allCourses, courses1);
    }
  }
});
window.addEventListener("scroll", () => {
  if (window.scrollY > 80)
    nav.style.boxShadow = `2px 2px 5px rgb(177, 176, 176)`;
  else nav.style.boxShadow = "none";
});

//Courses Add

let courses = document.querySelectorAll(".courses");
let cXYZ, forW, bacK;
courses.forEach((el, i) => {
  if (el.classList.contains("courses1")) {
    cXYZ = coursesData.allCourses;
  } else if (el.classList.contains("courses2")) {
    cXYZ = coursesData.trendingJobCourses;
  } else if (el.classList.contains("courses3")) {
    cXYZ = coursesData.trendingSpreadSheetCourses;
  } else if (el.classList.contains("courses4")) {
    cXYZ = coursesData.technologyCourses;
  } else if (el.classList.contains("courses5")) {
    cXYZ = coursesData.businessCourses;
  } else {
    cXYZ = coursesData.creativeCourses;
  }
  forW = document.querySelector(`.forward${i + 1}`);
  bacK = document.querySelector(`.back${i + 1}`);
  mainLoader(cXYZ, el);
  scrollX(el, forW, bacK);
});

// src="${'/tumb.jpg'}" // if img access denied

function mainLoader(arr, appendto) {
  // console.log(appendto);
  appendto.innerHTML = "";
  let x;
  (n = arr.length), (s = arr);
  let time;
  for (let i = 0; i < n; i++) {
    time = Math.random();
    // if ((time * 4) > 1) time * 4.toFixed(0)
    x = `<div id="${s[i].id}">
        <div class="courseImg">
        <img
          src="${s[i].src}"
          alt="courseImg"          
        />
        </div>
        <div class='courseDuration'>${(time * 4).toFixed(0)}h ${(
      time * 60
    ).toFixed(0)}m</div>
        <div class="coursetext">COURSE</div>
        <div class="highlight">${s[i].name}
        </div>
        <div class="view">${s[i].views} viewers</div>
      </div>
      `;
    appendto.insertAdjacentHTML("beforeend", x);
  }
  appendto.style.marginLeft = `0px`;
  // appendto.style.marginLeft = `-${n / 2 * 240}px`;
}
function scrollX(courseX, f, b) {
  let n = courseX.length; //for now hard coded value

  f?.addEventListener("click", () => {
    marleft = parseFloat(courseX.style.marginLeft);
    if (marleft > -1700) courseX.style.marginLeft = `${marleft - 260}px`;
    else courseX.style.marginLeft = `-${1860}px`;
    // courseX.style.justifyContent = 'start';
  });
  b?.addEventListener("click", () => {
    marleft = parseFloat(courseX.style.marginLeft);
    // console.log(marleft);
    if (marleft < -100) courseX.style.marginLeft = `${marleft + 300}px`;
    if (marleft > -100) courseX.style.marginLeft = `0px`;
  });
}
