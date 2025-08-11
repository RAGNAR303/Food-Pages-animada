$(document).ready(function () {
  $("#mobile_btn").on("click", function () {
    $("#mobile-menu").toggleClass("active");
    $("#mobile_btn").find("i").toggleClass("fa-bars  fa-xmark");
  });
  const sections = $("section");
  const navItems = $(".nav-item");

  $(window).on("scroll", function () {
    const header = $("header");
    let activeSectionIndex = 0;
    const scrollPosition = $(window).scrollTop() - header.outerHeight();

    console.log(scrollPosition);

    if (scrollPosition <= 0) {
      header.css("box-shadow", "none");
    } else {
      header.css("box-shadow", "5px 2px 5px rgba(0,0,0,0.1)");
    }

    sections.each(function (i) {
      const section = $(this);
      const sectionTop = section.offset().top - 86;
      const sectionBotton = sectionTop + section.outerHeight();

      if (scrollPosition >= sectionTop && scrollPosition < sectionBotton) {
        activeSectionIndex = i;
        return false;
      }
    });
    navItems.removeClass("active");
    $(navItems[activeSectionIndex]).addClass("active");
  });

  ScrollReveal().reveal("#cta", {
    origin: "left",
    delay: 375,
    duration: 1000,
    distance: "20%",
    reset: true,
  });

  ScrollReveal().reveal("#banner", {
    origin: "right",
    delay: 500,
    duration: 1000,
    distance: "20%",
    reset: true,
  });

  ScrollReveal().reveal("#dishes", {
    origin: "right",
    delay: 500,
    duration: 1000,
    distance: "20%",
    reset: true,
  });

  ScrollReveal().reveal("#testimonial_chef", {
    origin: "left",
    delay: 500,
    duration: 1000,
    distance: "20%",
    reset: true,
  });
  ScrollReveal().reveal("#testimonials-content", {
    origin: "right",
    delay: 500,
    duration: 1000,
    distance: "20%",
    reset: true,
  });
  ScrollReveal().reveal(".feedback", {
    origin: "right",
    delay: 700,
    duration: 1000,
    distance: "20%",
    reset: true,
  });
  ScrollReveal().reveal("footer", {
    origin: "bottom",
    delay: 700,
    duration: 1000,
    distance: "10%",
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const dishes = [
    {
      img: "../styles/assets/dish1.png",
      title: "Peixe Grelhado",
      description: "Peixe com salada e tempero de limão",
      price: "32,90",
      review: "1200",
      star: "★★★★★",
    },
    {
      img: "../styles/assets/dish2.png",
      title: "Nuggets e Batata frita",
      description:
        "Nuggets com molho barbecue e batata frita de acomponhamento",
      price: "39,90",
      review: "1000",
      star: "★★★★☆",
    },
    {
      img: "../styles/assets/dish3.png",
      title: "Peito de  Frango",
      description: "Frango com molho e batata rustíca para acompanhar",
      price: "45,90",
      review: "700",
      star: "★★★☆☆",
    },
    {
      img: "../styles/assets/dish4.png",
      title: "Salada de pepino",
      description: "Salada de pepino com alface e tomate com tempero acebolado",
      price: "32,90",
      review: "800",
      star: "★★★★☆",
    },
  ];

  const containerDishes = document.getElementById("dishes");

  dishes.forEach((dish) => {
    const dishesItem = document.createElement("div");
    dishesItem.classList.add("dish");

    dishesItem.innerHTML = `
      
                    <div class="dish-herts">
                        <i class="fa-solid fa-heart"></i>
                    </div>
                    <img src=${dish.img} alt=${dish.title} class="dish-image" width="170px">
                    <h3 class="dish-title">
                        ${dish.title}
                    </h3>
                    <span class="dish-description">
                       ${dish.description}
                    </span>
                    <div class="dish-rate">
                        <span>${dish.star}</span>
                        <span>(${dish.review}+)</span>
                    </div>
                    <div class="dish-price">
                        <h4>R$ ${dish.price}</h4>
                        <button class="btn-default">
                            <i class="fa-solid fa-basket-shopping"></i>
                        </button>
                    </div>
               
    
    `;

    containerDishes.appendChild(dishesItem);
  });
});
