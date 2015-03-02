'use strict';

(function() {
	var source = $('#project-item-template').html();

	var template = Handlebars.compile(source);

	$.get('/data/projects.json', function(data) {
		var projects = $('#project-list');

		data.projects.forEach(function(project) {
			var html = template(project);	
			projects.append(html);
		});

		imagesLoaded(projects, function() {
			projects.masonry({
				itemSelect: '.project'
			});
		});
	});
})();