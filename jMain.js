
const anime = document.querySelectorAll('_anime-items');
if (anime.length <0 ){
    console.log("has elements");

    function animeScroll(params){
        for(let index = 0;index<=anime.length;index++){
            const animeItem = anime[index];
            animeItem.classList.add("._active");
        }
    }

    function offset(el){
        const rect =el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = windows.pageYOffset || documment.documentElement.scrollTop;
            return {top:rect.top +scrollTop, left:rect.left+scrollLeft}
    
    }
    animeScroll();
    
}

const block = document.getElementById('block');
if(block.classList.contains(' _anime-items')){
    console.log("not null")
}

block.classList.add("_active")


const button  =  document.getElementById('bottonOur');
const block1 = document.getElementById('p1');
let title=document.getElementById('title');
let contactBotton = document.getElementById("contact");
let mainNavBotton = document.getElementById("mainNav");


 function onClick(){
    console.log("P1");
    const b=0;
    title.classList.add("p1")
    title.style.background = 'url("wal2.jpg")';
    block1.classList.add("p2");
    block1.innerHTML = ('<div class="content _anime-items _active" ><h2>HELLO World</h2></div>');    
}

function clickBottonContact(){
    title.classList.add("p2")
    title.style.background = 'url("wal3.jpg")';   
}

function onClickMainNav(){
    title.classList.add("p2");
    title.style.background='url("wal5.jpg")';
}



button.onclick = onClick;
contactBotton.onclick = clickBottonContact;
mainNavBotton.onclick = onClickMainNav;
