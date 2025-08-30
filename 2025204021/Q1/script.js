function handlePersonaizeClick() {
  const input = prompt("enter your username!!!");
  //   console.log(input);
  const greetingElement = document.getElementById("greeting-text");
  greetingElement.innerHTML = "Hello " + input + "!";

  const cardMessageElement = document.getElementById("card-message");
  cardMessageElement.innerHTML = "Welcome real user!!!";

  greetingElement.style.color = "green";

  const divElement = document.getElementById("card");
  divElement.style.backgroundColor = "yellow";
}
