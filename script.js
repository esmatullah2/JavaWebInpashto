function loadPage(pageUrl) {
  fetch(pageUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Page not found");
      }
      return response.text();
    })
    .then((data) => {
      document.getElementById("containerforpagescomponent").innerHTML = data;
      window.scrollTo(0, 0);
    })
    .catch((error) => {
      console.error("Error loading page:", error);
      document.getElementById("main-content").innerHTML =
        "<p>بخښنه غواړو، صفحه پیدا نه شوه.</p>";
    });
}
function loginForm() {
  window.location.href = "/Ragistration/login.html";
  alert('"تاسو لاګین نه یاست، مهرباني وکړئ لاګین وکړئ."');
}
