let sortPopTab = document.querySelector(".sortPopTab");
let sortPop = document.querySelector(".sortPop");
let sortFunc = document.querySelector(".sortFunc");
let doneButton = document.querySelector("#doneButton");
let courseHide = document.querySelectorAll(".courseHide");

sortFunc.addEventListener("click", showPop);
function showPop(e) {
  // console.log(sortVal[i]);

  if (e.target.textContent.includes("▼")) showMenu(e.target.textContent);
  else if (e.target.textContent.includes("Done")) sort_tab();
  else return;
}
function showMenu(con) {
  let x = ``,
    aaa = sortVal[con.split(" ")[0].toLowerCase()];
  if (!aaa) return;
  for (var i = 0; i < aaa.length - 1; i++) {
    x += `
        <li> <input type="radio" name="radio" value='${aaa[i]}'/>${aaa[i]}</ >
       `;
  }
  x += `<li><button id="doneButton">Done</button></li>`;
  sortPop.innerHTML = "";
  sortPop.insertAdjacentHTML("beforeend", x);
  sortPopTab.style.display = `unset`;
  sortPopTab.style.left = `${aaa[i]}`;
}

let sortVal = {
  sort: ["Best Match", "View Count", "Newest", "5%"],
  level: ["All", "Beginner", "Intermediate", "Advanced", "10%"],
  type: ["Courses", "Vedio", "Learning Path", "14%"],
  time: [
    "All",
    "10 mins",
    "10 - 30 min",
    "10 - 30 min",
    "30 - 50 min",
    "1+ hours",
    "25%",
  ],
  software: [
    "Photoshop (15,804)",
    "Illustrator (7,225)",
    "Microsoft Excel (6,845)",

    "After Effects (5,944)",
    "Office 365 (4,670)",
    "Azure (4,662)",

    "Premiere Pro (3,959)",
    "AWS(3,835)",
    "InDesign (3,705)",
    "JavaScript (3,126)",
    "CINEMA 4D (2,521)",
    "iOS (2,329)",
    "Maya (2,041)",
    "PHP (1,942)",
    "Microsoft Word (1,750)",
    "35%",
  ],
};

function sort_tab() {
  sortPopTab.style.display = `none`;
  let v = document.querySelector('input[name="radio"]:checked').value;
  localStorage.setItem("sortData", v);
  console.log(localStorage.getItem("sortData"));
  window.location.href = "allCourses";
}
if (localStorage.getItem("sortData")) {
  courseHide.forEach((el) => (el.innerHTML = ``));
  courseHide[0].innerHTML = `<h1 style='font-weight:400;margin-bottom:-100px'>Browse most popular courses</h1>`;
  document.querySelector(".stickyNote4Sort").style.display = "unset";
  localStorage.removeItem("sortData");
}
