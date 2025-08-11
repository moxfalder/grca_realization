const getTitle = (e) => {
  // let refLink = document.querySelectorAll(".refs-title > a");
  //   console.log(e);
  const Title = e.target.innerText;
  //   console.log(Title);
  return (
    <>
      <h2>{Title}</h2>
    </>
  );
};

export default getTitle;
