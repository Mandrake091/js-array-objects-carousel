// const imagesArray = [
//     './img/01.jpg',
//     './img/02.jpg',
//     './img/03.jpg',
//     './img/04.jpg',
//     './img/05.jpg'
// ];

// const titlesArray = [
//     'Svezia',
//     'Svizzera',
//     'Gran Bretagna',
//     'Germania',
//     'Paradise'
// ]

// const text = [
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
//     'Lorem ipsum',
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
//     'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
//     'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
// ]


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

console.log(itemCards)

let prevButton = document.getElementById('prevButton');
let nextButton = document.getElementById('nextButton')
let itemActive = document.getElementById('active');
let thumbContainer = document.getElementById('thumbContainer');
let items = document.getElementsByClassName('items');
const itemsContainer = document.getElementById('items-container');
const thumbnails = document.getElementsByClassName('thumbnail');



let currentIndex = 0;

for (let i = 0; i < itemCards.length; i++) {

    let classActive = "";

    if (i === currentIndex) {
        classActive = "active"
    }

    itemsContainer.innerHTML += `<div class="items ${classActive} ">
                                    <img src="${itemCards[i].img}">
                                    <div class="container">
                                    <div class="row justify-content-center align-items-center">
                                    <div class="col-12">
                                        <div class="title">
                                            <h2 class="h2">${itemCards[i].title}</h2>
                                            <p class="text">${itemCards[i].text}.</p>
                                    </div>
                                    </div>
                                    </div>    
                                    </div>`


    thumbContainer.innerHTML += `<div class= "thumbnail ${classActive}">
                                    <img class="w-100" src = "${itemCards[i].img
                                    }">
                                    </div>`

}

//let firstItem = document.querySelector(".items").classList.add("active");

nextButton.addEventListener("click", next);
//myInterval = setInterval(next, 5000);

function next() {
    thumbnails[currentIndex].classList.remove("active");
    items[currentIndex].classList.remove("active");
    if (currentIndex === 4) {
        currentIndex = 0;
        items[currentIndex].classList.remove("d-none");
        items[currentIndex].classList.add("active");
    } else {
        items[currentIndex].classList.add("d-none");
        currentIndex++;
        items[currentIndex].classList.remove("d-none");
        items[currentIndex].classList.add("active");
    }
    thumbnails[currentIndex].classList.add("active");
  
};



prevButton.addEventListener('click', function () {
    //clearInterval(myInterval)
    if (currentIndex > 0) {

        thumbnails[currentIndex].classList.remove("active");
        items[currentIndex].classList.add("d-none");
        items[currentIndex].classList.remove("active");

        currentIndex--;

        thumbnails[currentIndex].classList.add("active");
        items[currentIndex].classList.remove("d-none");
        items[currentIndex].classList.add("active");
    }

});