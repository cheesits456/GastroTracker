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
				<div class="container">
	<div class="row">
		<div class="col-md-6">
			<h1>Hello World</h1>
		</div>
		<div class="col-md-6">
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