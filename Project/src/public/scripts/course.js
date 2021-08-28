let searchButton = document.querySelector(".searchButton");
let navSelectSearch = document.querySelector("#navSelectSearch");
let navSelect = document.querySelectorAll(".navSelect");


document.querySelector(".logo").addEventListener('click',()=>window.location.href = "/index")


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