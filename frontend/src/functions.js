const onClickHandler = (e) => {
  e.preventDefault();

  if (e.target.classList.contains("active")) {
    e.target.classList.remove("active");
  } else {
    e.target.classList.add("active");
  }
};
