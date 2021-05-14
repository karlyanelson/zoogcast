// docs: https://www.11ty.io/docs/config/

const now = String(Date.now());

module.exports = function (eleventyConfig) {
  // https://css-tricks.com/eleventy-starter-with-tailwind-css-alpine-js/
  eleventyConfig.addWatchTarget("./_tmp/style.css");
  eleventyConfig.addPassthroughCopy({ "./_tmp/style.css": "./style.css" });
  eleventyConfig.addShortcode("version", function () {
    return now;
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
