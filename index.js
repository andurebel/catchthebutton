const btn = document.querySelector("button");

btn.addEventListener("mouseover", function () {
  console.log("mouseover me");
  let height = Math.floor(Math.random() * window.innerHeight);
  let width = Math.floor(Math.random() * window.innerWidth);
  btn.style.left = `${width}px`;
  btn.style.top = `${height}px`;
});

btn.addEventListener("click", () => {
  btn.innerText = "You got me!";
});
