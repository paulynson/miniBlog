//Declaration and Assigning

const load = document.querySelector(".load");
const result = document.querySelector(".result");
const myErr = document.querySelector(".error");
const url = "https://jsonplaceholder.typicode.com/posts";

// Windows onload Declaration

window.addEventListener("load", () => {
  !load === false ? (load.innerHTML = "Loading...") : (load.innerHTML = " ");

  // Fetch URL

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      let newData = data
        .map(
          (datas) =>
            `
    <div key = datas.id class='space'>
        <h3> ${datas.title} </h3>
          <p> ${datas.body}</p>
       </div>    
    `
        )
        .join(" ");
      result.innerHTML = newData;
      !load === true ? (load.innerHTML = "Loading...") : (load.innerHTML = " ");
    })
    .catch((err) => {
      !load === true ? (load.innerHTML = "Loading...") : (load.innerHTML = " ");
      let allError = err.message;
      result.innerHTML = allError;
    });
});
