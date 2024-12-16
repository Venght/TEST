let menu = document.getElementById("menu");

menu.addEventListener(`click`, (event) => {
  let target = event.target;

  switch (target.id) {
    case "home":
      console.log("HOme menu item was clicked");
      break;
    case "dashboard":
      console.log("Dashboard menu item was clicked");
      break;
    case "report":
      console.log("Report menu item was clicked");
      break;
  }
});
