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
			pageContent = loadHtml("dashboard");
			document.getElementById(`navlink-dashboard`).classList.add("active");
			document.getElementById(`navlink-new`).classList.remove("active");
			document.getElementById(`navlink-all`).classList.remove("active");
			break;

		case "new":
			pageName = "New Log Entry";
			pageIcon = "pencil";
			pageContent = loadHtml("new");
			document.getElementById(`navlink-dashboard`).classList.remove("active");
			document.getElementById(`navlink-new`).classList.add("active");
			document.getElementById(`navlink-all`).classList.remove("active");
			break;

		case "all":
			pageName = "View All Logs";
			pageIcon = "book";

			document.getElementById(`navlink-dashboard`).classList.remove("active");
			document.getElementById(`navlink-new`).classList.remove("active");
			document.getElementById(`navlink-all`).classList.add("active");
			break;
	}

	document.getElementById("page-title").innerHTML = `<i class="fa-solid fa-${pageIcon}"></i> ${pageName}`;
	document.getElementById("main").innerHTML = pageContent;

	if (page === "new") {
		const currentDate = new Date();
		const year = currentDate.getFullYear();
		let month = currentDate.getMonth() + 1;
		let day = currentDate.getDate();

		if (`${month}`.length === 1) month = `0${month}`;
		if (`${day}`.length === 1) day = `0${day}`;

		document.getElementById("date").value = `${year}-${month}-${day}`;
	}
};



function loadHtml(fileName) {
	const filePath = path.join(".", "page", "templates", `${fileName}.html`);
	const html = fs.readFileSync(filePath);
	return html;
};



function setCopyrightInfo() {
	const versionNumber = JSON.parse(fs.readFileSync(path.join(".", "package.json"))).version;
	const currentYear = new Date().getFullYear();

	document.getElementById("version-number").innerText = versionNumber;
	document.getElementById("year").innerText = currentYear;
};



function toggleDateInput() {
	const checked = document.getElementById("today").checked;
	if (checked) {
		document.getElementById("date").setAttribute("disabled", true);

		const currentDate = new Date();
		const year = currentDate.getFullYear();
		let month = currentDate.getMonth() + 1;
		let day = currentDate.getDate();

		if (`${month}`.length === 1) month = `0${month}`;
		if (`${day}`.length === 1) day = `0${day}`;

		document.getElementById("date").value = `${year}-${month}-${day}`;
	} else {
		document.getElementById("date").removeAttribute("disabled");
	};
};