module.exports = function(eleventyConfig) {
  // Add markdown filter for processing markdown in data
  const markdownIt = require("markdown-it");
  const md = markdownIt({ html: true, breaks: true });

  eleventyConfig.addFilter("markdown", function(value) {
    if (!value) return '';
    return md.render(value);
  });

  // Copy static assets
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/images");

  // Add collections
  eleventyConfig.addCollection("recipes", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/recipes/*.md").sort((a, b) => {
      return a.data.title.localeCompare(b.data.title);
    });
  });

  // Add filters
  eleventyConfig.addFilter("readingTime", (content) => {
    const wordsPerMinute = 200;
    const numberOfWords = content.split(/\s+/g).length;
    return Math.ceil(numberOfWords / wordsPerMinute);
  });

  // Add a filter to prepend the path prefix to recipe URLs
  eleventyConfig.addFilter("recipeUrl", (url) => {
    return `/recipes${url}`;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    pathPrefix: "/recipes/"
  };
};