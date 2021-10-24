const sheetId = "1exa8CWCOtRPzgjWShm0eNcrU1YcpH0PaKYmSK7hvjYA";
const sheetName = "LatestNews";

const api_url =
  "https://script.google.com/macros/s/AKfycbxKREGuiwHeJdO2hJoVkMRYtcp2iQEpv61t3Gjb04ojzIspVuDmL5l5iEoY0j-AtMRu/exec?sheetid=" +
  sheetId +
  "&sheetname=" +
  sheetName;

// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  console.log(data);
  if (response) {
    hideloader();
  }
  show(data);
}

function hideloader() {
  //document.getElementById('loading').style.display = 'none';
}
// Function to define innerHTML for HTML table
function show(data) {
  const latestNews = document.getElementById("latestNews");
  let text = '<li><p class="lead">LATEST NEWS</p></li>';
  data.data.forEach((element) => {
    let link_first = "";
    let link_second = "";
    if (element.link == 1) {
      link_first = `<a href="${element.linklink}">`;
      link_second = "</a>";
    }

    text += `<li>${link_first}<p>${element.news}</p>${link_second}</li>`;
  });
  console.log(text);
  latestNews.innerHTML = text;
}

document.addEventListener("DOMContentLoaded", function () {
  // code
  getapi(api_url);
});
