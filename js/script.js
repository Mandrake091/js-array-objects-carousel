const itemCards = [{
        img: './img/01.jpg',
        title: 'Svezia',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.'
    },
    {
        img: './img/02.jpg',
        title: 'Svizzera',
        text: 'Lorem ipsum'
    },

    {
        img: './img/03.jpg',
        title: 'Gran Bretagna',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.'
    },
    {
        img: './img/04.jpg',
        title: 'Germania',
        text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,'

    },
    {
        img: './img/05.jpg',
        title: 'Paradise',
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam."
    }
];

let itemActive = document.getElementById('active');
let thumbContainer = document.getElementById('thumbContainer');
let items = document.getElementsByClassName('items');
const itemsContainer = document.getElementById('items-container');
const thumbnails = document.getElementsByClassName('thumbnail');

let buttonStop = document.getElementById('stop').addEventListener('click', stop);
function stop() {
    clearInterval(myInterval);
}

let buttonPlay = document.getElementById('play').addEventListener('click', play);
function play() {
    myInterval = setInterval(next, 4000);
}

let prevButton = document.getElementById('prevButton').addEventListener('click',  prev);
function prev(){
    if (currentIndex > 0) {
        thumbnails[currentIndex].classList.remove("active");
        items[currentIndex].classList.add("d-none");
        items[currentIndex].classList.remove("active");
        currentIndex--;
        thumbnails[currentIndex].classList.add("active");
        items[currentIndex].classList.remove("d-none");
        items[currentIndex].classList.add("active");
    }
}
let nextButton = document.getElementById('nextButton').addEventListener("click", next);
function next() {
    thumbnails[currentIndex].classList.remove("active");
    items[currentIndex].classList.remove("active");
    if (currentIndex === 4) {
        currentIndex = 0;
        items[currentIndex].classList.remove("d-none");
        items[currentIndex].classList.add("active");
    } else {
        currentIndex++;
        items[currentIndex].classList.remove("d-none");
        items[currentIndex].classList.add("active");
    }
    thumbnails[currentIndex].classList.add("active");
};

let currentIndex = 0;
for (let i = 0; i < itemCards.length; i++) {
    let classActive = "";
    if (i === currentIndex) {
        classActive = "active"
    }
    itemsContainer.innerHTML += `<div class="items ${classActive} ">
                                    <img  src="${itemCards[i].img}">
                                        <div class="title">
                                            <h2 class="h2">${itemCards[i].title}</h2>
                                            <p class="text">${itemCards[i].text}.</p>
                                        </div>
                                </div>`


    thumbContainer.innerHTML += `<div class= "thumbnail ${classActive}">
                                    <img class="w-100" src = "${itemCards[i].img
                                    }">
                                    </div>`

}





