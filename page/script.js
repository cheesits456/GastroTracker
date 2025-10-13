const fs = require("fs");
const path = require("path");

const os = require("os");

const dataPath = path.join(os.homedir(), "Documents", "GastroTracker");
if (!fs.existsSync(dataPath)) fs.mkdirSync(dataPath);

setCopyrightInfo();
loadPage("dashboard");





function loadPage(page) {
	const pageContent = loadHtml(page);
	document.getElementById("main").innerHTML = pageContent;

	let pageName = "";
	let pageIcon = "";

	switch (page) {
		case "dashboard":
			pageName = "Dashboard";
			pageIcon = "gauge-high";
			document.getElementById("navlink-dashboard").classList.add("active");
			document.getElementById("navlink-new").classList.remove("active");
			document.getElementById("navlink-all").classList.remove("active");

			const directory = fs.readdirSync(dataPath).sort();

			let daysSinceEaten = 0;
			let daysSinceWater = 0;
			let daysSincePooped = 0;
			let daysSinceVomited = 0;

			let lastDayChecked = 0;
			let lastMonthChecked = 0;
			let lastYearChecked = 0;
			for (const file of directory) {
				// Expecting file format: YYYY-MM-DD.json
				const parts = file.split("-");
				const year = Number(parts[0]);
				const month = Number(parts[1]);
				let day = Number(parts[2].split(".")[0]);
				const data = JSON.parse(fs.readFileSync(path.join(dataPath, file)));

				if (lastDayChecked === 0 && lastMonthChecked === 0 && lastYearChecked === 0) {
					// First file, set to previous day
					lastDayChecked = day - 1;
					lastMonthChecked = month;
					lastYearChecked = year;
				};

				// Calculate skipped days using Date objects for accuracy across months/years
				const prevDate = new Date(lastYearChecked, lastMonthChecked - 1, lastDayChecked);
				const currDate = new Date(year, month - 1, day);
				const diffTime = currDate - prevDate;
				const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
				let skippedDays = 0;
				if (diffDays > 1) skippedDays = diffDays - 1;
				if (skippedDays > 0) daysSinceEaten += skippedDays;
				if (data.eatenToday === false) daysSinceEaten++;
				else daysSinceEaten = 0;
				lastDayChecked = day;
				lastMonthChecked = month;
				lastYearChecked = year;
			};

			// Repeat for water, vomit, and defecation
			lastDayChecked = 0;
			lastMonthChecked = 0;
			lastYearChecked = 0;
			for (const file of directory) {
				// Expecting file format: YYYY-MM-DD.json
				const parts = file.split("-");
				const year = Number(parts[0]);
				const month = Number(parts[1]);
				let day = Number(parts[2].split(".")[0]);
				const data = JSON.parse(fs.readFileSync(path.join(dataPath, file)));

				if (lastDayChecked === 0 && lastMonthChecked === 0 && lastYearChecked === 0) {
					// First file, set to previous day
					lastDayChecked = day - 1;
					lastMonthChecked = month;
					lastYearChecked = year;
				};

				// Calculate skipped days using Date objects for accuracy across months/years
				const prevDate = new Date(lastYearChecked, lastMonthChecked - 1, lastDayChecked);
				const currDate = new Date(year, month - 1, day);
				const diffTime = currDate - prevDate;
				const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
				let skippedDays = 0;
				if (diffDays > 1) skippedDays = diffDays - 1;
				if (skippedDays > 0) daysSinceWater += skippedDays;
				if (data.drankToday === false) daysSinceWater++;
				else daysSinceWater = 0;
				lastDayChecked = day;
				lastMonthChecked = month;
				lastYearChecked = year;
			};
			lastDayChecked = 0;
			lastMonthChecked = 0;
			lastYearChecked = 0;
			for (const file of directory) {
				// Expecting file format: YYYY-MM-DD.json
				const parts = file.split("-");
				const year = Number(parts[0]);
				const month = Number(parts[1]);
				let day = Number(parts[2].split(".")[0]);
				const data = JSON.parse(fs.readFileSync(path.join(dataPath, file)));

				if (lastDayChecked === 0 && lastMonthChecked === 0 && lastYearChecked === 0) {
					// First file, set to previous day
					lastDayChecked = day - 1;
					lastMonthChecked = month;
					lastYearChecked = year;
				};

				// Calculate skipped days using Date objects for accuracy across months/years
				const prevDate = new Date(lastYearChecked, lastMonthChecked - 1, lastDayChecked);
				const currDate = new Date(year, month - 1, day);
				const diffTime = currDate - prevDate;
				const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
				let skippedDays = 0;
				if (diffDays > 1) skippedDays = diffDays - 1;
				if (skippedDays > 0) daysSincePooped += skippedDays;
				if (data.poopedToday === false) daysSincePooped++;
				else daysSincePooped = 0;
				lastDayChecked = day;
				lastMonthChecked = month;
				lastYearChecked = year;
			};
			lastDayChecked = 0;
			lastMonthChecked = 0;
			lastYearChecked = 0;
			for (const file of directory) {
				// Expecting file format: YYYY-MM-DD.json
				const parts = file.split("-");
				const year = Number(parts[0]);
				const month = Number(parts[1]);
				let day = Number(parts[2].split(".")[0]);
				const data = JSON.parse(fs.readFileSync(path.join(dataPath, file)));

				if (lastDayChecked === 0 && lastMonthChecked === 0 && lastYearChecked === 0) {
					// First file, set to previous day
					lastDayChecked = day - 1;
					lastMonthChecked = month;
					lastYearChecked = year;
				};

				// Calculate skipped days using Date objects for accuracy across months/years
				const prevDate = new Date(lastYearChecked, lastMonthChecked - 1, lastDayChecked);
				const currDate = new Date(year, month - 1, day);
				const diffTime = currDate - prevDate;
				const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
				let skippedDays = 0;
				if (diffDays > 1) skippedDays = diffDays - 1;
				if (skippedDays > 0) daysSinceVomited += skippedDays;
				if (data.vomitedToday === false) daysSinceVomited++;
				else daysSinceVomited = 0;
				lastDayChecked = day;
				lastMonthChecked = month;
				lastYearChecked = year;
			};

			document.getElementById("statistic-food").innerText = daysSinceEaten;
			document.getElementById("statistic-water").innerText = daysSinceWater;
			document.getElementById("statistic-defecation").innerText = daysSincePooped;
			document.getElementById("statistic-vomit").innerText = daysSinceVomited;
			break;

		case "new":
			pageName = "New Log Entry";
			pageIcon = "pencil";
			document.getElementById("navlink-dashboard").classList.remove("active");
			document.getElementById("navlink-new").classList.add("active");
			document.getElementById("navlink-all").classList.remove("active");

			const currentDate = new Date();
			const year = currentDate.getFullYear();
			let month = currentDate.getMonth() + 1;
			let day = currentDate.getDate();

			if (`${month}`.length === 1) month = `0${month}`;
			if (`${day}`.length === 1) day = `0${day}`;

			document.getElementById("date").value = `${year}-${month}-${day}`;
			break;

		case "all":
			pageName = "View All Logs";
			pageIcon = "book";
			document.getElementById("navlink-dashboard").classList.remove("active");
			document.getElementById("navlink-new").classList.remove("active");
			document.getElementById("navlink-all").classList.add("active");
			break;
	};

	document.getElementById("page-title").innerHTML = `<i class="fa-solid fa-${pageIcon}"></i> ${pageName}`;
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



function submitForm() {
	const pain = document.getElementById("badness").value;
	const sleep = document.getElementById("sleep").value;
	const eatenToday = $("input[type='radio'][name='eaten-today']:checked").val() === "yes" ? true : false;
	const drankToday = $("input[type='radio'][name='drank-today']:checked").val() === "yes" ? true : false;
	const vomitedToday = $("input[type='radio'][name='vomited-today']:checked").val() === "yes" ? true : false;
	const poopedToday = $("input[type='radio'][name='pooped-today']:checked").val() === "yes" ? true : false;
	const date = document.getElementById("date").value;
	const data = {
		pain,
		sleep,
		eatenToday,
		drankToday,
		vomitedToday,
		poopedToday
	};
	fs.writeFileSync(path.join(dataPath, `${date}.json`), JSON.stringify(data, null, "\t"));
	$("#saved-modal").modal("toggle");
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