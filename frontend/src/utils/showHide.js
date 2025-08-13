export const showHideServices = (e) => {
  const elem = document.querySelectorAll(".refs-title-link");

  for (let i = 0; i < elem.length; i++) {
    elem[i].classList.remove("active");
  }
  e.target.classList.add("active");
};

export const showHide = (e) => {
  e.preventDefault();
  let moduleTitle = document.querySelectorAll(".moduleTitle");
  let submodule = document.querySelectorAll(".submodule");
  // console.log(submodule);
  // console.log(e);
  for (let i = 0; i < moduleTitle.length; i++) {
    moduleTitle[i].classList.remove("active");
    moduleTitle[i].nextSibling.classList.add("submodule-hide");
    // console.log(moduleTitle[i]);
    // console.log(e.target);

    if (moduleTitle[i] == e.target) {
      // console.log(moduleTitle[i].nextSibling);
      // console.log(e);
      // console.log(submodule);
      // console.log(moduleTitle[i]);
      e.target.classList.add("active");
      moduleTitle[i].nextSibling.classList.remove("submodule-hide");
      moduleTitle[i].nextSibling.classList.add("submodule-show");
      // submodule.style.display = "block";
    }
  }
};

// export default showHide;
