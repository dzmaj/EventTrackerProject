window.addEventListener("load", function () {
  console.log("Script loaded");
  init();
});

function init() {
  console.log("in init()");
  //TODO: Set up events
  getAllJobs();
  document.createForm.submit.addEventListener("click", function (e) {
    e.preventDefault();
    let form = e.target.parentElement;
    let newJob = {
      position: form.position.value,
      description: form.description.value,
      company: form.company.value,
      city: form.city.value,
      state: form.state.value,
      source: form.source.value,
      url: form.url.value,
    };
    addJob(newJob);
  });
}

function addJobToTable(job) {
	let body = document.getElementById("jobs-table-body");
  let row = document.createElement("tr");
  body.appendChild(row);

  let data = document.createElement("td");
  data.textContent = job.position;
  row.appendChild(data);
  data = document.createElement("td");
  data.textContent = job.company;
  row.appendChild(data);
  data = document.createElement("td");
  data.textContent = job.description.slice(0, 30) + "...";
  row.appendChild(data);
  data = document.createElement("td");
  data.textContent = job.city + ", " + job.state;
  row.appendChild(data);
  data = document.createElement("td");
  data.textContent = "status";
  row.appendChild(data);
  data = document.createElement("td");
  data.textContent = job.source;
  row.appendChild(data);
  data = document.createElement("td");
  if (typeof element.url === "string") {
    let url = document.createElement("a");
    url.setAttribute("href", element.url);
    url.textContent = job.url.slice(0, 20) + "...";
    data.appendChild(url);
  }
  row.appendChild(data);
}

function buildJobsTable(jobs) {
  let tableDiv = document.getElementById("tableDiv");
  let table = document.createElement("table");
  table.setAttribute("class", "table");
  table.setAttribute("id", "jobs-table");
  tableDiv.appendChild(table);
  
  // Table Headers
  let head = document.createElement("thead");
  table.appendChild(head);
  let headRow = document.createElement("tr");
  head.appendChild(headRow);
  let th1 = document.createElement("th");
  th1.textContent = "Position";
  headRow.appendChild(th1);
  let th2 = document.createElement("th");
  th2.textContent = "Company";
  headRow.appendChild(th2);
  let th3 = document.createElement("th");
  th3.textContent = "Description";
  headRow.appendChild(th3);
  let th4 = document.createElement("th");
  th4.textContent = "Location";
  headRow.appendChild(th4);
  let th5 = document.createElement("th");
  th5.textContent = "Status";
  headRow.appendChild(th5);
  let th6 = document.createElement("th");
  th6.textContent = "Source";
  headRow.appendChild(th6);
  let th7 = document.createElement("th");
  th7.textContent = "URL";
  headRow.appendChild(th7);
  
  // Table Data
  let body = document.createElement("tbody");
  body.setAttribute("id", "jobs-table-body");
  table.appendChild(body);
  jobs.forEach((element) => {
    let row = document.createElement("tr");
    body.appendChild(row);

    let data = document.createElement("td");
    data.textContent = element.position;
    row.appendChild(data);
    data = document.createElement("td");
    data.textContent = element.company;
    row.appendChild(data);
    data = document.createElement("td");
    data.textContent = element.description.slice(0, 30) + "...";
    row.appendChild(data);
    data = document.createElement("td");
    data.textContent = element.city + ", " + element.state;
    row.appendChild(data);
    data = document.createElement("td");
    data.textContent = "status";
    row.appendChild(data);
    data = document.createElement("td");
    data.textContent = element.source;
    row.appendChild(data);
    data = document.createElement("td");
    if (typeof element.url === "string") {
      let url = document.createElement("a");
      url.setAttribute("href", element.url);
      url.textContent = element.url.slice(0, 20) + "...";
      data.appendChild(url);
    }
    row.appendChild(data);
  });
}

function getAllJobs() {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", "api/jobs", true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let jobs = JSON.parse(xhr.responseText);
        // console.log(jobs);
        buildJobsTable(jobs);
      } else {
        console.error("Error unexpected response status " + xhr.status);
      }
    }
  };
  xhr.send();
}

function addJob(job) {
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "api/jobs", true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 201) {
        let newJob = JSON.parse(xhr.responseText);
        addJobToTable(newJob);
      } else {
        console.error(
          "Error unexpected response status " +
            xhr.status +
            ": " +
            xhr.responseText
        );
      }
    }
  };

  xhr.send(JSON.stringify(job));
}
