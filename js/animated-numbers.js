new Waypoint({
  element: document.querySelector(".stats__div"),
  handler: function () {
    const stat1 = new countUp.CountUp("stat1", 100, { suffix: "%" });
    const stat2 = new countUp.CountUp("stat2", 50, { suffix: "+" });
    const stat3 = new countUp.CountUp("stat3", 1.5, {
      decimalPlaces: 1,
      suffix: " mil. tons",
    });
    const stat4 = new countUp.CountUp("stat4", 10, { suffix: "+" });

    stat1.start();
    stat2.start();
    stat3.start();
    stat4.start();

    this.destroy();
  },
  offset: "75%",
});

// function animateValue(el, target, suffix = "", duration = 2000) {
//   let start = 0;
//   const isDecimal = target % 1 !== 0;
//   const stepTime = 20;
//   const steps = Math.floor(duration / stepTime);
//   const increment = target / steps;

//   const interval = setInterval(() => {
//     start += increment;
//     if (start >= target) {
//       clearInterval(interval);
//       el.textContent = isDecimal
//         ? target.toFixed(1) + suffix
//         : Math.round(target) + suffix;
//     } else {
//       el.textContent = isDecimal
//         ? start.toFixed(1) + suffix
//         : Math.round(start) + suffix;
//     }
//   }, stepTime);
// }

// function handleScrollAnimation() {
//   const section = document.getElementById("stats");
//   const rect = section.getBoundingClientRect();
//   if (
//     rect.top <= window.innerHeight * 0.75 &&
//     !section.classList.contains("animated")
//   ) {
//     section.classList.add("animated");
//     document.querySelectorAll(".stat-number").forEach((el) => {
//       const target = parseFloat(el.dataset.target);
//       const suffix = el.dataset.suffix || "";
//       animateValue(el, target, suffix);
//     });
//   }
// }

// window.addEventListener("scroll", handleScrollAnimation);
// window.addEventListener("load", handleScrollAnimation);
