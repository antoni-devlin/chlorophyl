module.exports = config => {

	// Set directories to pass through to the dist folder
	config.addPassthroughCopy('./src/images/');
	config.addPassthroughCopy('./src/styles/');
	config.addPassthroughCopy('./src/scripts/');

	// Returns work items, sorted by display order
	// config.addCollection('plants', collection => {
	// 	return collection
	// 		.getFilteredByGlob('./src/plants/*.md').reverse()
	// });

	config.addCollection('plants', collection => {
		return collection.getFilteredByGlob("./src/plants/*.md")
			.sort((a, b) => b.data.plant.name - a.data.plant.name);
	});

	return {
		markdownTemplateEngine: 'njk',
		dataTemplateEngine: 'njk',
		htmlTemplateEngine: 'njk',
		dir: {
			input: 'src',
			output: 'dist'
		}
	};
};
