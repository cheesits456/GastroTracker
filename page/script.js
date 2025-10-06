const fs = require("fs");
const path = require("path");

setCopyrightInfo();
loadPage("dashboard");



function loadPage(page) {
	let pageName = "";
	let pageIcon = "";
	let pageContent = "";
	switch (page) {
		case "dashboard":
			pageName = "Dashboard";
			pageIcon = "gauge-high";
			pageContent = `
				<div class="container-fluid">
					<div class="row">
						<div class="col">
							<h1>Hello World</h1>
						</div>
						<div class="col">
							<h1>Hello World</h1>
						</div>
					</div>
				</div>
			`
			break;
		case "new":
			pageName = "New Log Entry";
			pageIcon = "pencil";
			break;
		case "all":
			pageName = "View All Logs";
			pageIcon = "book";
			break;
	}
	document.getElementById("page-title").innerHTML = `<i class="fa-solid fa-${pageIcon}"></i> ${pageName}`;
	document.getElementById("main").innerHTML = pageContent;
}



function setCopyrightInfo() {
	const versionNumber = JSON.parse(fs.readFileSync(path.join(".", "package.json"))).version;
	const currentYear = new Date().getFullYear();

	document.getElementById("version-number").innerText = versionNumber;
	document.getElementById("year").innerText = currentYear;
}