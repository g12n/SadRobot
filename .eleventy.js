module.exports =function(eleventyConfig){

  eleventyConfig.addPassthroughCopy("fonts");
  return { 
  dir: {
    input: ".",
    output: "docs"
  },
  pathPrefix: "/sad-robot/",
  templateFormats: ["md", "css", "njk", "11ty.js"],
  passthroughFileCopy: true
};

}