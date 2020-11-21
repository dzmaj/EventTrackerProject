window.addEventListener('load', function() {
	console.log('Script loaded');
	init();
});

function init() {
	console.log("in init()");
	//TODO: Set up events
	getAllJobs();
}
function buildJobsTable(jobs) {
	let tableDiv = document.getElementById('tableDiv');
	let table = document.createElement('table');
	table.setAttribute('class', 'table');
	tableDiv.appendChild(table);

	// Table Headers
	let head = document.createElement('thead');
	table.appendChild(head);
	let headRow = document.createElement('tr');
	head.appendChild(headRow);
	let th1 = document.createElement('th');
	th1.textContent = "Position";
	headRow.appendChild(th1);
	let th2 = document.createElement('th');
	th2.textContent = "Company";
	headRow.appendChild(th2);
	let th3 = document.createElement('th');
	th3.textContent = "Description";
	headRow.appendChild(th3);
	let th4 = document.createElement('th');
	th4.textContent = "Location";
	headRow.appendChild(th4);
	let th5 = document.createElement('th');
	th5.textContent = "Status";
	headRow.appendChild(th5);
	let th6 = document.createElement('th');
	th6.textContent = "Source";
	headRow.appendChild(th6);
	let th7 = document.createElement('th');
	th7.textContent = "URL";
	headRow.appendChild(th7);

	// Table Data
	let body = document.createElement('tbody');
	table.appendChild(body);
	jobs.forEach(element => {
		let row = document.createElement('tr');
		body.appendChild(row);

		let data = document.createElement('td')
		data.textContent = element.position;
		row.appendChild(data);
		data = document.createElement('td')
		data.textContent = element.company;
		row.appendChild(data);
		data = document.createElement('td')
		data.textContent = element.description.slice(0,30) + '...';
		row.appendChild(data);
		data = document.createElement('td')
		data.textContent = element.city + ", " + element.state;
		row.appendChild(data);
		data = document.createElement('td')
		data.textContent = 'status';
		row.appendChild(data);
		data = document.createElement('td')
		data.textContent = element.source;
		row.appendChild(data);
		data = document.createElement('td')
		if (typeof element.url === 'string') {
			let url = document.createElement('a');
			url.setAttribute('href', element.url)
			url.textContent = element.url.slice(0,20) + '...';
			data.appendChild(url)
		}
		row.appendChild(data);

		// let position = document.createElement('td')
		// position.textContent = element.position;
		// row.appendChild(position);

		// let company = document.createElement('td')
		// company.textContent = element.company;
		// row.appendChild(company);

		// let description = document.createElement('td')
		// position.textContent = element.position;
		// row.appendChild(position);

		// let location = document.createElement('td')
		// position.textContent = element.position;
		// row.appendChild(position);

		// let status = document.createElement('td')
		// position.textContent = element.position;
		// row.appendChild(position);

		// let source = document.createElement('td')
		// position.textContent = element.position;
		// row.appendChild(position);

		// let url = document.createElement('td')
		// position.textContent = element.position;
		// row.appendChild(position);


	});
	

}

function getAllJobs() {
	let xhr = new XMLHttpRequest();
  xhr.open('GET', 'api/jobs', true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        let jobs = JSON.parse(xhr.responseText);
        console.log(jobs);
        buildJobsTable(jobs);
      }
      else {
        console.error('Error unexpected response status ' + xhr.status);
      }
    }
  }
  xhr.send();
}