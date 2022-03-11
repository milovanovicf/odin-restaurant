import navbar from "./navbar";
import footer from "./footer";

let home = () => {
  const nav = navbar();
  const content = document.querySelector("#content");
  content.appendChild(nav);

  let container = document.createElement("div");
  container.classList.add("container");

  let welcome = document.createElement("h1");
  welcome.innerText = "Welcome Home";
  welcome.classList.add("welcome");
  container.appendChild(welcome);

  content.appendChild(container);

  footer();
};

export default home;
