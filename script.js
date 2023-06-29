const burger = document.querySelector(".header_content__burger")
const firstLine = document.querySelectorAll(".header_content__burger div")[0]
const secondLine = document.querySelectorAll(".header_content__burger div")[1]
const thirdLine = document.querySelectorAll(".header_content__burger div")[2]
const li = document.getElementsByTagName("li")
const menu = document.querySelector(".menu")

burger.addEventListener("click", () => {
  const isExpanded = burger.getAttribute("aria-expanded") === "true"
  burger.setAttribute("aria-expanded", !isExpanded)
  if(!isExpanded){
    menu.style.display = "block";
    firstLine.style.transform = "rotate(45deg)"
    secondLine.style.transform = "rotate(45deg)"
    thirdLine.style.transform = "rotate(-45deg)" 
    firstLine.style.top = "6px"
    thirdLine.style.top = "-6px"
    burger.classList.add('no-hover');
    document.body.style.overflow = "hidden";
  } else {
    firstLine.style.transform = "rotate(0)"
    secondLine.style.transform = "rotate(0)"
    thirdLine.style.transform = "rotate(0)"
    firstLine.style.top = "0"
    thirdLine.style.top = "0"
    burger.classList.remove('no-hover');
    menu.style.display = "none";
    document.body.style.overflow = "auto";
  }
});


for (let i = 0; i < li.length; i++) {
  li[i].addEventListener('click', () => {
    menu.style.display = "none";
    document.body.style.overflow = "auto";
    firstLine.style.transform = "rotate(0)"
    secondLine.style.transform = "rotate(0)"
    thirdLine.style.transform = "rotate(0)"
    firstLine.style.top = "0"
    thirdLine.style.top = "0"
    burger.classList.remove('no-hover');
  });
}