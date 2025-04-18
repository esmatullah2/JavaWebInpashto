function loadPage(event) {
  event.preventDefault(); // Stop the link from refreshing the page

  fetch("java.html") // Replace with the path to your page
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("containerforpagescomponent").innerHTML = data;
    })
    .catch((error) => {
      console.error("Error loading page:", error);
    });
}
