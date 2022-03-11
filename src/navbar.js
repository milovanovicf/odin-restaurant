let navbar = () => {
  let navbar = document.createElement("nav");
  navbar.classList.add("nav");

  let logoContainer = document.createElement("div");
  let logo = document.createElement("h2");
  logoContainer.appendChild(logo);
  logo.innerText = "Logo";
  logo.classList.add("logo");
  navbar.appendChild(logo);

  let navMenu = document.createElement("ul");
  navMenu.classList.add("nav-menu");
  navbar.appendChild(navMenu);

  let menu = document.createElement("li");
  menu.setAttribute("id", "menu");
  menu.innerHTML = "Bar & Store";

  let consulting = document.createElement("li");
  consulting.innerHTML = "Catering & Consulting";
  consulting.setAttribute("id", "consulting");

  let about = document.createElement("li");
  about.innerHTML = "About";
  about.setAttribute("id", "about");

  navMenu.appendChild(menu);
  navMenu.appendChild(consulting);
  navMenu.appendChild(about);

  return navbar;
};

export default navbar;
