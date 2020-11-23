window.addEventListener("load", function () {
  init();
});

function init() {
  document.getElementById('detailView').style.display = 'none';
  //TODO: Set up events
  getAllJobs();
  document.createForm.submit.addEventListener("click", function (e) {
    e.preventDefault();
    let form = e.target.parentElement;
    let newJob = {
      position: form.position.value,
      description: document.getElementById('createDescription').value,
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
  tableDiv.textContent = "";
  let table = document.createElement("table");
  table.setAttribute("class", "table table-bordered");
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
  th4.textContent = "City";
  headRow.appendChild(th4);
  let th4b = document.createElement("th");
  th4b.textContent = "State";
  headRow.appendChild(th4b);
//   let th5 = document.createElement("th");
//   th5.textContent = "Status";
//   headRow.appendChild(th5);
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
  jobs.forEach((element, index) => {
	let row = document.createElement("tr");
	row.setAttribute('id', index)
	body.appendChild(row);
	row.addEventListener("click", function(e) {
		e.preventDefault();
		// let row = e.target;
		// console.log(index);
		// let job = jobs[index];
		document.getElementById('detailView').style.display = 'initial';
		document.updateForm.position.setAttribute('value', element.position);
		document.updateForm.company.setAttribute('value', element.company);
		document.getElementById('updateDescription').value = element.description;
		document.updateForm.city.setAttribute('value', element.city);
		document.updateForm.state.setAttribute('value', element.state);
		// document.updateForm.status.setAttribute('value', 'status');
		document.updateForm.source.setAttribute('value', element.source);
		document.updateForm.url.setAttribute('value', element.url);
		// document.updateForm.update.removeEventListener('click', function(e){});
		// document.updateForm.delete.removeEventListener('click', function(e){});
		if (document.updateForm.update !== undefined) {
			document.updateForm.update.remove();
		}
		if (document.updateForm.deleteBtn !== undefined) {
			document.updateForm.deleteBtn.remove();
		}
		let update = document.createElement('input');
		let deleteBtn = document.createElement('input');
		update.setAttribute('value', 'Update');
		update.setAttribute('type', 'submit');
		update.setAttribute('name', 'update');
		deleteBtn.setAttribute('value', 'Delete');
		deleteBtn.setAttribute('type', 'submit');
		deleteBtn.setAttribute('name', 'deleteBtn');
		document.updateForm.appendChild(update);
		document.updateForm.appendChild(deleteBtn);
		update.addEventListener('click', function(e) {
			e.preventDefault();
			console.log(document.getElementById('updateDescription'))
			let updatedJob = {
				id: element.id,
				position: document.updateForm.position.value,
				description: document.getElementById('updateDescription').value,
				company: document.updateForm.company.value,
				city: document.updateForm.city.value,
				state: document.updateForm.state.value,
				source: document.updateForm.source.value,
				url: document.updateForm.url.value,
			  };
			updateJob(updatedJob);
		});
		deleteBtn.addEventListener('click', function(e) {
			e.preventDefault();
			deleteJob(element);
		});
		
	});

    let data = document.createElement("td");
    data.textContent = element.position;
    row.appendChild(data);
    data = document.createElement("td");
    data.textContent = element.company;
    row.appendChild(data);
	data = document.createElement("td");
	if (element.description.length > 50) {
		data.textContent = element.description.slice(0, 50) + "...";
	} else {
		data.textContent = element.description;
	}
    row.appendChild(data);
    data = document.createElement("td");
    data.textContent = element.city;
    row.appendChild(data);
    data = document.createElement("td");
    data.textContent = element.state;
    row.appendChild(data);
    // data = document.createElement("td");
    // data.textContent = "status";
    // row.appendChild(data);
    data = document.createElement("td");
    data.textContent = element.source;
    row.appendChild(data);
    data = document.createElement("td");
    if (typeof element.url === "string") {
      let url = document.createElement("a");
	  url.setAttribute("href", element.url);
	  if (element.url.length > 20) {
		  url.textContent = element.url.slice(0, 20) + "...";
	  } else {
		  url.textContent = element.url;
	  }
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
		// jobsData = jobs;
		displayStats(jobs);
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
		// addJobToTable(newJob);
		getAllJobs();
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

function updateJob(job) {
  let xhr = new XMLHttpRequest();
  xhr.open("PUT", "api/jobs/"+job.id, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function () {
	  if (xhr.readyState === 4) {
      if (xhr.status === 202) {
		let updatedJob = JSON.parse(xhr.responseText);
		getAllJobs();
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

function deleteJob(job) {
  let xhr = new XMLHttpRequest();
  xhr.open("DELETE", "api/jobs/"+job.id, true);
  xhr.setRequestHeader("Content-type", "application/json");
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 204) {
		// addJobToTable(newJob);
		getAllJobs();
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

  xhr.send();
}

var displayStats = function (jobs) {
	let dataAggDiv = document.getElementById('dataAggDiv');
	dataAggDiv.textContent = '';
	let table = document.createElement('table');
	table.setAttribute('class', 'table table-bordered')
	let agg = {};
	dataAggDiv.appendChild(table);
	jobs.forEach((element, index) => {
		let location = element.city + ', ' + element.state;
		if (agg[location] != undefined) {
			agg[location]++;
		} else {
			agg[location] = 1;
		}
	});
	console.log(agg);
	let header = document.createElement('thead');
	table.appendChild(header);
	let headRow = document.createElement('tr');
	header.appendChild(headRow);
	let th1 = document.createElement('th');
	th1.textContent = 'Location';
	headRow.appendChild(th1);
	let th2 = document.createElement('th');
	th2.textContent = 'Total Number of Jobs';
	headRow.appendChild(th2);

	let body = document.createElement('tbody');
	table.appendChild(body);
	for (var p in agg) {
		let row = document.createElement('tr');
		body.appendChild(row);
		
		let td1 = document.createElement('td');
		td1.textContent = p;
		row.appendChild(td1);
		
		let td2 = document.createElement('td');
		td2.textContent = agg[p];
		row.appendChild(td2);

	}
}