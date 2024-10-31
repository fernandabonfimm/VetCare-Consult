function selectAnimal(animal) {
  var currentSelectedCard = document.querySelector(
    ".card-chose-animal.selected"
  );

  if (currentSelectedCard) {
    currentSelectedCard.classList.remove("selected");
    currentSelectedCard.style.border = "8px solid #CBCBCB";
    var title = currentSelectedCard.querySelector(".div-title-card h1");
    title.style.color = "#CBCBCB";
    var description = currentSelectedCard.querySelector(".div-title-card span");
    if (description) {
      description.style.color = "#CBCBCB";
    }
    var divider = currentSelectedCard.querySelector(
      ".divider-card-chose-animal"
    );
    divider.style.backgroundColor = "#CBCBCB";
  }

  var selectedCard = document.querySelector(
    '.card-chose-animal[data-animal="' + animal + '"]'
  );

  if (selectedCard) {
    selectedCard.classList.add("selected");
    selectedCard.style.border = "8px solid #2E765E";
    var title = selectedCard.querySelector(".div-title-card h1");
    title.style.color = "#2E765E";
    var description = selectedCard.querySelector(".div-title-card span");
    if (description) {
      description.style.color = "#2E765E";
    }
    var divider = selectedCard.querySelector(".divider-card-chose-animal");
    divider.style.backgroundColor = "#2E765E";
  }
}

function applyPhoneMask(input) {
  var phone = input.value.replace(/\D/g, "");
  phone = phone.replace(/(\d{2})(\d{4})(\d{4})/, "($1) $2-$3");
  input.value = phone;
}
var phoneInput = document.getElementById("phone");
phoneInput.addEventListener("input", function () {
  applyPhoneMask(this);
});

var emailInput = document.getElementById("email");
var emailError = document.getElementById("email-error");

emailInput.addEventListener("input", function () {
  if (this.value.length > 0 && !this.validity.valid) {
    emailError.classList.remove("hidden");
  } else {
    emailError.classList.add("hidden");
  }
});

var dataInput = document.getElementById("data");
var dataError = document.getElementById("data-error");

dataInput.addEventListener("input", function () {
  if (this.value.length > 0 && !this.validity.valid) {
    dataError.classList.remove("hidden");
  } else {
    dataError.classList.add("hidden");
  }
});

var specialitySelect = document.getElementById("speciality");
var specialityError = document.getElementById("speciality-error");

specialitySelect.addEventListener("select", function () {
  if (this.value === "") {
    specialityError.classList.remove("hidden");
  } else {
    specialityError.classList.add("hidden");
  }
});

var unitSelect = document.getElementById("unit");
var unitError = document.getElementById("unit-error");

unitSelect.addEventListener("select", function () {
  if (this.value === "") {
    unitError.classList.remove("hidden");
  } else {
    unitError.classList.add("hidden");
  }
});

const menuDesktopHeader = document.getElementById("menu-desktop-header");
const menuMobileHeader = document.getElementById("menu-mobile-header");

checkWindowSize();

function checkWindowSize() {
  if (window.innerWidth < 768) {
    menuDesktopHeader.style.position = "absolute";
    menuDesktopHeader.style.visibility = "hidden";
    menuMobileHeader.style.position = "static";
    menuMobileHeader.style.visibility = "visible";
  } else {
    menuDesktopHeader.style.position = "static";
    menuDesktopHeader.style.visibility = "visible";
    menuMobileHeader.style.position = "absolute";
    menuMobileHeader.style.visibility = "hidden";
  }
}

window.addEventListener("resize", checkWindowSize);

const menuIcon = document.querySelector(".menu-icon");

const modal = document.getElementById("myModal");

const closeButton = document.querySelector(".close");

menuIcon.addEventListener("click", function () {
  modal.style.display = "block";
});

closeButton.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
});

const slides = document.querySelectorAll(".carousel-slide img");
const dots = document.querySelectorAll(".carousel-dot");

let currentSlide = 0;

function showSlide(n) {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  dots.forEach((dot) => {
    dot.classList.remove("active");
  });

  slides[n].style.display = "block";
  dots[n].classList.add("active");
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    currentSlide = index;
    showSlide(currentSlide);
  });
});

showSlide(currentSlide);
setInterval(nextSlide, 10000);
