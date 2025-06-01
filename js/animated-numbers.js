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
