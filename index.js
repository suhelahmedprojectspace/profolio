// function openNav() {
//     document.getElementById('Mysidebar').style.width = "250px";
//     document.getElementById('main').style.marginLeft = "250px";
// }
// function closeNav() {
//     document.getElementById('Mysidebar').style.width = "0";
//     document.getElementById('main_cont').style.marginLeft = "0"
// }
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}
//for box 1
function openit() {
    document.getElementById('skill1_down').style.display = "block";
    document.getElementById('skill1_box').style.height = "100%"

}
const btn = document.getElementById('close');
btn.addEventListener('dblclick', () => {
    document.getElementById('skill1_down').style.display = "none"
    document.getElementById('skill1_box').style.height = "60px"
})


//for box2
function openit1() {
    document.getElementById('skill_down1').style.display = "block";
    document.getElementById('skill_box1').style.height = "100%"


}
const btn1 = document.getElementById('close1');
btn1.addEventListener('dblclick', () => {
    document.getElementById('skill_down1').style.display = "none"
    document.getElementById('skill_box1').style.height = "60px"
})
//for box3

function openit2() {
    document.getElementById('skill_down2').style.display = "block";
    document.getElementById('skill_box2').style.height = "100%"


}
const btn2 = document.getElementById('close2');
btn2.addEventListener('dblclick', () => {
    document.getElementById('skill_down2').style.display = "none"
    document.getElementById('skill_box2').style.height = "60px"
})
const cards = document.getElementsByClassName('card');
let slideindex = 0

function next() {
    const data = "Next"
    showslide(data)

}
function prev() {
    const data = "Prev"
    showslide(data)
}
function showslide(data) {
    if (data === 'Next') {
        slideindex++;
        if (slideindex === cards.length) {
            slideindex = 0
        }
    }
    else {
        if (slideindex === 0) {
            slideindex = cards.length - 1
        }
        else {
            slideindex--;
        }


    }
    for (let i = 0; i < cards.length; i++) {
        cards[i].classList.remove('active');
        console.log('i ran no', i)
    }
    cards[slideindex].classList.add('active')


}
// if (data === 'Next') {
//     cards[slideindex].classList.remove('active');
//     cards[slideindex + 1].classList.add('active');
//     slideindex++;
//     if (slideindex >= (cards.length) - 1) {
//         cards[slideindex].classList.remove('active');
//         slideindex = 0
//         cards[slideindex].classList.add('active')

//     }
// }
// else {
//     cards[slideindex].classList.remove('active');
//     cards[slideindex - 1].classList.add('active');
//     slideindex--;
// }
