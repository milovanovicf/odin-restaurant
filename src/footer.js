let footer = () => {
  let footer = document.createElement("footer");
  footer.classList.add("footer");
  let body = document.body;

  let reservation = document.createElement("p");
  reservation.innerText = "Reservation :+381 451 151524";
  reservation.classList.add("footer-card");

  let openingHours = document.createElement("p");
  openingHours.innerText = "Open Hours: Mon-Sat: 12:00 - 01:00";
  openingHours.classList.add("footer-card");

  let adress = document.createElement("p");
  adress.innerText = "Adress: Skadarska 9, Belgrade";
  adress.classList.add("footer-card");

  footer.appendChild(reservation);
  footer.appendChild(openingHours);
  footer.appendChild(adress);

  body.appendChild(footer);

  return footer;
};

export default footer;
