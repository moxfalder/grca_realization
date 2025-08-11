const showHide = (e) => {
  e.preventDefault();
  const target = document.querySelector(".submodule");
  // console.log(target);

  if (e.target.classList.contains("active")) {
    e.target.classList.remove("active");
    target.style.display = "none";
  } else {
    e.target.classList.add("active");
    target.style.display = "block";
  }
};

export default showHide;
