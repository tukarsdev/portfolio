module.exports = function (eleventyConfig) {
	eleventyConfig.addNunjucksShortcode("year", function () {
		return new Date().getFullYear();
	});
  
  eleventyConfig.addPassthroughCopy({ "src/dev/tukars/styles": "styles" });
  eleventyConfig.addPassthroughCopy({ "src/dev/tukars/scripts": "scripts" });
	
  return {
    dir: {
      input: "src/dev/tukars/pages",
      output: "_site",
      includes: "../includes",
      layouts: "../layouts"
    }
  };
};