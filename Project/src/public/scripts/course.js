let searchButton = document.querySelector(".searchButton");
let navSelectSearch = document.querySelector("#navSelectSearch");
let navSelect = document.querySelectorAll(".navSelect");


document.querySelector(".logo").addEventListener('click',()=>window.location.href = "/index")

let nav = document.querySelector(".nav");
window.addEventListener("scroll", () => {
  if (window.scrollY > 80)
    nav.style.boxShadow = `2px 2px 5px rgb(177, 176, 176)`;
  else nav.style.boxShadow = "none";
});


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

let showMoreContent = document.querySelectorAll(".showMoreContent");
let showMore = document.querySelectorAll(".showMore");
showMore.forEach(el =>el.addEventListener('click',()=>{
  let temp=el.closest('.content_heading').nextElementSibling;
  if(getComputedStyle(temp).display!='none'){
    temp.style.display='none'
    el.innerHTML='⮟'
  }
  else{
    temp.style.display='block';
    el.innerHTML='⮝'
  }
}))
// let navSelect = document.querySelectorAll(".navSelect");
let tab = document.querySelectorAll(".tab");
let summary_tab = document.querySelector(".summary_tab");
let summary_dis = document.querySelectorAll(".summary_tab-dis");

tab.forEach(el=>el.addEventListener('click',()=>{
  // console.log(el.textContent);
  tab.forEach(el=>el.classList.remove('active'))
  el.classList.add('active')
  summary_tab.innerHTML='';
  let temp=el.textContent.split(' ').join('').toLowerCase();
  summary_tab.insertAdjacentHTML("beforeend", tabdescrip[temp]);
}))

let tabdescrip={};
tabdescrip.transcripts=`<h3>Jamie Dimon on how to be successful</h3>

<div class="summary">
  (music) - Are there a couple pieces of advice you would give to someone who's just maybe starting their
  career and looking at this fast changing business environment asking how their going to maintain their, -
  Yeah, work hard, there's no such thing as success without hard work. So some people have this get rich quick
  notion. I've never seen it, I mean maybe, it's like a casino, maybe it's happened, but it's not the normal
  way. Second, you just spend your life learning. I read four or five newspapers every morning. I read tons of
  stuff. I read everything that people send me. You're going to learn, when you go out on the road, learn,
  learn, learn. You learn from clients, you learn from competitors, you learn, when we meet with small
  businesses you're always learning. And that could be a small thing that someone said why do you do this, you
  say, my God, we should do that differently. To a very large thing. Even innovation sometimes not an aha, a
  lot of little things added on top of each other. The iPhone was 3G, you know, the glass, the semiconductors,
  the batteries. It wasn't one thing that created the iPhone. So learn, learn, learn. Treat people the way you
  want to be treated. You know, like have respect for people. And be willing to change the job a little bit.
  Don't worry about your income level. You know people, if only I got, I'd take that job, I love the people,
  but it's less money. You know what, sometimes it's the absolute right thing to do. So be a little bit of
  flexible in the job you take. And you know you're, in you're lifetime you should be prepared to do a bunch
  of different things. We tell people it's your job to take care of your mind, your body, your spirit, your
  soul, your friends, your family and you need to do that at any level because if you don't, you know you
  probably won't be a particularly productive worker. We can help, but we can't do it for you. We can provide
  opportunities but we can't do it for you. Second, you know, - Really so what does that mean? You want people
  to basically say I'm going to leave, I got to, - Yes, you got to go take care of your kids baseball game,
  you don't feel well, you need a spiritual getaway. You should do those things and it can be done. Most of
  the people in my life who are always frezy they can't get it done, I always tell them it's you. It's not the
  company. A lot of people are doing that exact same job, and they are always at peace, at ease. And they have
  their family time. You know, if you're a male who just had a bunch of babies you can't play golf every day
  and the weekends. Maybe you got to just cut back on other things and forego that. You can't give kids for
  example quality time only. You don't get to quality without quantity. And I tell people so you have to
  arrange your life so it works for you in a way that works for you and a way that you're taking care of your
  health. Like when I go travel overseas, I schedule exercise time. Management is get it done, follow up,
  discipline, planning analysis, facts, facts, facts. And now it's just get the right people in the room, you
  know kill the bureaucracy. All these various things are going to get done, which if you don't you won't be
  be particularly good. But the real keys to leadership aren't just doing that or making sure its done, but
  having people who want to work at the place. So you might want to work for me if you trust me. If you know
  what I care about as a client, the country, something different. If the person's selfish, you know, blames
  you and takes the credit you're not going to want to work there. So to me humility, openness, fairness,
  being authentic, that's what creates leadership. Not the smartest person in the room, or the hardest working
  person in the room. And you can, you know if you made a list of good CEO's it's not their charisma, it's not
  always their brain power, but you won't be a good CEO without that because people won't want to work there.
  And so to me that is a whole different way of making sure you manage it. (music)</div>`
tabdescrip.viewoffline=`<h3>Jamie Dimon on how to be successful</h3>

  <div class="summary">
     If the person's selfish, you know, blames
    you and takes the credit you're not going to want to work there. So to me humility, openness, fairness,
    being authentic, that's what creates leadership. Not the smartest person in the room, or the hardest working
    person in the room. And you can, you know if you made a list of good CEO's it's not their charisma, it's not
    always their brain power, but you won't be a good CEO without that because people won't want to work there.
    And so to me that is a whole different way of making sure you manage it. (music)</div>`;
    
summary_tab.insertAdjacentHTML("beforeend", tabdescrip.transcripts);
