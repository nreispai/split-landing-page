function expand(e) {
  if (e.target.parentNode.className === "container-left") {
    e.target.parentNode.style.width = "65%";
    document.querySelector(".container-right").style.width = "35%";
  } else if (e.target.parentNode.className === "container-right") {
    e.target.parentNode.style.width = "65%";
    document.querySelector(".container-left").style.width = "35%";
  }
}

document.querySelector(".container").addEventListener("mouseover", expand);
