let data = [];

fetch("utilities/data.json")
  .then((response) => response.json())
  .then((d) => {
    data = d;
  })
  .catch((error) => console.error("an error in the data file"));

const paths = document.querySelectorAll("path");
paths.forEach((path) => {
  path.addEventListener("click", () => {
    data.forEach((d) => {
      if (d.id == path.id) showModal(path, d);
    });
  });
});

function showModal(path, data) {
  console.log(path);
  console.log(data);
}
