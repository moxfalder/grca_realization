export const showHideServices = (e) => {
  const elem = document.querySelectorAll(".refs-title-link");

  for (let i = 0; i < elem.length; i++) {
    elem[i].classList.remove("active");
  }
  e.target.classList.add("active");
};

export const showHide = (e) => {
  e.preventDefault();
  const module = document.querySelectorAll(".module > a");
  const subModuleLink = document.querySelector(".module ul");
  // console.log(module);
  // console.log(subModuleLink);

  for (let i = 0; i < module.length; i++) {
    module[i].classList.remove("active");
    console.log(e.target[i]);
  }

  e.target.classList.add("active");

  // console.log(submodule);

  // const target = document.querySelector(".submodule");
  // // console.log(target);

  // if (e.target.classList.contains("active")) {
  //   e.target.classList.remove("active");
  //   // target.style.display = "none";
  //   submodule.style.display = "none";
  // } else {
  //   e.target.classList.add("active");
  //   // target.style.display = "block";
  //   submodule.style.display = "block";
  // }
};

// export default showHide;
