
let words=document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters=word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span=document.createElement("span");
        span.textContent=letter;
        span.className="letter";
        word.append(span);
    });
});
let currentWordIndex=0;
let maxWordIndex=words.length-1;
words[currentWordIndex].style.opacity="1";
let changeText=()=>{
    let currentWord=words[currentWordIndex];
    let nextWord=currentWordIndex===maxWordIndex?words[0]:words[currentWordIndex+1];
    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className="letter out";
        },i*30);
    });
    nextWord.style.opacity="1";
    Array.from(nextWord.children).forEach((letter,i)=>{
        letter.className="letter behind";
        setTimeout(()=>{
            letter.className="letter in";
        },360+i*50);
    });
    currentWordIndex=currentWordIndex===maxWordIndex?0:currentWordIndex+1;

};
changeText();
setInterval(changeText,3000);

//circle at skill
// const circles=document.querySelectorAll('.circle');
// circles.forEach(elem=>{
//     var dots =elem.getAttribute('data-dots');
//     var marked=elem.getAttribute('data-percent');
//     var percent=Math.floor(dots*marked/100);
//     var points="";
//     var rotate=360/dots;

//     for(let i=0;i<dots;i++){
//         points+=`<div class="points" style="--i:${i};--rot:${rotate}deg"></div>`;
//     }
//     elem.innerHTML=points;
//     const pointsMarked=elem.querySelectorAll('points');
//     for(let i=0;i<percent;i++){
//         pointsMarked[i].classList.add('marked');
//     }
// });

// circle skill
 const rating=document.getElementsByClassName('rating')[0];
const block=document.querySelectorAll('.block');
for(var i=1;i<100;i++){
    rating.innerHTML+="<div class='block'></div>";
    block[i].style.transform="rotate("+3.6*i+"deg)";
    block[i].style.animationDelay=`${i/40}s`;
    
}
// 360deg/100=3.6deg
// now,animate this number
const counter=document.querySelector('counter');
counter.innerHTML=0;
const target=+counter.getAttribute('data-target');
const NumberCounter=()=>{
const value=+counter.innerHtml;
if(value<target){
counter.innerHTML=Math.ceil(value+1);
setTimeout(()=>{
NumberCounter()
},25)
}
}
NumberCounter()



// Mix it up portfolio section
var mixer = mixitup('.portfolio-gallery');

// function toggleMenu(){
//     var menu = document.querySelector('.menu');
//     menu.style.display = (menu.style.display === 'block') ? 'none' : 'block';
// }

// active menu
// let menuLi=document.querySelectorAll('header ul li a');
// let section=document.querySelectorAll('section');

// function activeMenu(){
//     let len=section.length;
//     while(--len && window.scrollY + 97 <section[len].offsetTop){}
//     menuLi.forEach(sec=>sec.classList.remove("active"));
//     menuLi[len].classList.add("active");
// }
// activeMenu();
// window.addEventListener("scroll",activeMenu);

// Sticky navbar
const header=document.querySelector("header");
window.addEventListener("srcoll",function(){
    header.classList.toggle("sticky",window.scrollY>50);
});

// active link
if(window.scrollY>60){
    document.querySelector('#scrolltop').classList.add('active');
}
else{
    document.querySelector('#scrolltop').classList.remove('active');
}

// toggle icon navbar
let menyIcon=document.getElementById("menu-icon");
let navlist=document.getElementsByClassName("navlist");
menuIcon.onclick=()=>{
    menuIcon.classList.add("bx-x");
    navlist.classlist.add("open");
}

window.onscroll=()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classlist.remove("open");
}

//about 

    function opentab(tabId) {
        // Hide all tab contents
        const tabContents = document.querySelectorAll('.tab-contents');
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('active-tab');
        });

        // Show the selected tab content
        const selectedTab = document.getElementById(tabId);
        if (selectedTab) {
            selectedTab.classList.add('active-tab');
        }

        // Update active link style
        const tabLinks = document.querySelectorAll('.tab-links');
        tabLinks.forEach(tabLink => {
            tabLink.classList.remove('active-link');
        });

        const selectedLink = document.querySelector(`.tab-links[onclick="opentab('${tabId}')"]`);
        if (selectedLink) {
            selectedLink.classList.add('active-link');
        }
    }
 


// parallax
// const observer=new IntersectionObserver((entries)=>{
//     entries.forEach((entry)=>{
//         if(entry.isIntersecting){
//             entry.target.classList.add("show-items");
//         }
//         else{
//             entry.target.classList.remove("show-items");

//         }
//     });
// });

// const scrollScale=document.querySelectorAll(".scroll-scale");
// scrollScale.forEach((el)=>observer.observe(el));

// const scrollBottom=document.querySelectorAll(".scroll-bottom");
// scrollBottom.forEach((el)=>observer.observe(el));

// const scrollTop=document.querySelectorAll(".scroll-top");
// scrollTop.forEach((el)=>observer.observe(el));