(function() {
	var source = $('#project-item-template').html();

	var template = Handlebars.compile(source);

	$.get('/data/projects.json', function(data) {
		data.projects.forEach(function(project) {
			var html = template(project);	
			$('#project-list').append(html);
			setTimeout(showProject, 200);
		});
	});
})();