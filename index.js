console.log("working");


//navbar  

const button = document.querySelector('#menu-button');
const menu = document.querySelector('#menu');


button.addEventListener('click', () => {
  menu.classList.toggle('hidden');
});



//stats counter
document.addEventListener("DOMContentLoaded", () => {
  function counter(id, start, end, duration) {
    let obj = document.getElementById(id),
      current = start,
      range = end - start,
      increment = end > start ? 1 : -1,
      step = Math.abs(Math.floor(duration / range)),
      timer = setInterval(() => {
        current += increment;
        obj.textContent = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, step);
  }
  counter("count1", 0, 400, 3000);
  counter("count2", 100, 50, 2500);
  counter("count3", 0, 40, 3000);
});

//scroll testimonials

var testimonialContainer = document.querySelector(".testimonial-carousel");
var slides = document.querySelectorAll(".testimonial-slide");
var prevButton = document.querySelector(".prev-button");
var nextButton = document.querySelector(".next-button");

var slideWidth = slides[0].offsetWidth;
var currentIndex = 0;

prevButton.addEventListener("click", function () {
  if (currentIndex > 0) {
    currentIndex--;
    testimonialContainer.style.transform =
      "translateX(-" + currentIndex * slideWidth + "px)";
  }
});

nextButton.addEventListener("click", function () {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    testimonialContainer.style.transform =
      "translateX(-" + currentIndex * slideWidth + "px)";
  }
});

// Testimonial data
const testimonials = [
  {
    avatar: "avatar1.jpg",
    name: "John Doe",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec nisi a elit tristique pretium.",
  },
  {
    avatar: "avatar2.jpg",
    name: "Jane Smith",
    testimonial: "Vestibulum at dui sagittis, bibendum est ut, iaculis tellus.",
  },
  {
    avatar: "avatar3.jpg",
    name: "Mike Johnson",
    testimonial: "Aenean posuere risus ac metus dignissim bibendum.",
  },
];

// DOM elements
const avatarImg = document.querySelector(".avatar");
const nameElem = document.querySelector(".name");
const testimonialElem = document.querySelector(".testimonial");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");

// Testimonial index
let currentTestimonialIndex = 0;

// Display testimonial
function displayTestimonial() {
  const testimonial = testimonials[currentTestimonialIndex];
  avatarImg.src = testimonial.avatar;
  nameElem.textContent = testimonial.name;
  testimonialElem.textContent = testimonial.testimonial;
}

// Event listeners for previous and next buttons
prevBtn.addEventListener("click", () => {
  currentTestimonialIndex =
    (currentTestimonialIndex - 1 + testimonials.length) % testimonials.length;
  displayTestimonial();
});

nextBtn.addEventListener("click", () => {
  currentTestimonialIndex = (currentTestimonialIndex + 1) % testimonials.length;
  displayTestimonial();
});

// Display initial testimonial
displayTestimonial();
