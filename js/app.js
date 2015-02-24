(function() {
	var source = $('#project-item-template').html();

	var template = Handlebars.compile(source);

	$.get('/data/projects.json', function(data) {
		var i = 0;
		var showProject = function() {
			var project = data.projects[i++];
			if(!project) return;

			var html = template(project);	
			$('#project-list').append(html);
			setTimeout(showProject, 200);
		}
		showProject();
	});
})();