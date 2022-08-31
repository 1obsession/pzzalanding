// let switches = document.getElementsByClassName("header__switch");

// let style = localStorage.getItem("style");

// if (style == null) {
//   setTheme("light");
// } else {
//   setTheme(style);
// }

// for (let i of switches) {
//   i.addEventListener("click", function () {
//     let theme = this.dataset.theme;
//     setTheme(theme);
//   });
// }

// function setTheme(theme) {
//   if (theme == "light") {
//     document.getElementById("switcher-id").href = "./themes/style.css";
//   } else if (theme == "dark") {
//     document.getElementById("switcher-id").href = "./themes/dark.css";
//   }
//   localStorage.setItem("style", theme);
// }

// let btn = document.querySelector(".header__switch");
// let dark = document.querySelector(".styledark");

// let flag = true;
// function theme(status) {
//   if (status) {
//     link.href = "css/dark.css";
//     flag = false;
//   } else {
//     link.href = "css/style.css";
//     flag = true;
//   }
// }

// btn.addEventListener("click", function (e) {
//   theme(flag);
// });

const themeSwitchers = document.querySelectorAll(".change-theme");

themeSwitchers.forEach((switcher) => {
  switcher.addEventListener("click", function () {
    applyTheme(this.dataset.theme);
    localStorage.setItem("theme", this.dataset.theme);
  });
});

function applyTheme(themeName) {
  let themeUrl = `css/${themeName}.css`;
  document.querySelector('[title="theme"]').setAttribute("href", themeUrl);
}

let activeTheme = localStorage.getItem("theme");

if (activeTheme === null) {
  applyTheme("light");
} else {
  applyTheme(activeTheme);
}
