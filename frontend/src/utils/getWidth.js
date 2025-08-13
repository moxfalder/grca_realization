const getWidth = () => {
  let workArea = document.querySelector(".workarea");
  let computedStyle = getComputedStyle(workArea);
  console.log(computedStyle.width);
  //   return <>
  //     <h3>{computedStyle}</h3>
  //   </>
};

export default getWidth;
