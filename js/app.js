(function() {
	var source = $('#project-item-template').html();

	var template = Handlebars.compile(source);

// 	var data = {
// 		"projects": [
// 		{
// 			"title": "NYU: Poetic Landscape",
// 			"image": "img/uap.png",
// 			"url": "/nyu/poetic",
// 			"description": "A soothing scene in Unity"
// 		},
// 		{
// 			"title": "NYU: Treasure Game",
// 			"image": "img/uap.png",
// 			"url": "/nyu/treasure",
// 			"description": "Deserts winds in 1918 obscure treasure untold"
// 		},
// 		{
// 			"title": "NYU: Rube Goldberg Machine",
// 			"image": "img/uap.png",
// 			"url": "/nyu/goldberg",
// 			"description": "A fantastic contraption for a moonlit night"
// 		},
// 		{
// 			"title": "NYU: Rube Goldberg Machine",
// 			"image": "img/uap.png",
// 			"url": "/nyu/goldberg",
// 			"description": "A fantastic contraption for a moonlit night"
// 		},
// 		{
// 			"title": "NYU: Rube Goldberg Machine",
// 			"image": "img/uap.png",
// 			"url": "/nyu/goldberg",
// 			"description": "A fantastic contraption for a moonlit night"
// 		},
// 		{
// 			"title": "NYU: Rube Goldberg Machine",
// 			"image": "img/uap.png",
// 			"url": "/nyu/goldberg",
// 			"description": "A fantastic contraption for a moonlit night"
// 		},
// 		{
// 			"title": "NYU: Rube Goldberg Machine",
// 			"image": "img/uap.png",
// 			"url": "/nyu/goldberg",
// 			"description": "A fantastic contraption for a moonlit night"
// 		}
// 	]
// }

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