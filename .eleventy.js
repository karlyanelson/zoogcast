// docs: https://www.11ty.io/docs/config/

// https://11ty.rocks/eleventyjs/dates/
const { DateTime } = require("luxon");

const now = String(Date.now());

module.exports = function (eleventyConfig) {
  // https://css-tricks.com/eleventy-starter-with-tailwind-css-alpine-js/
  eleventyConfig.addWatchTarget("./_tmp/style.css");
  eleventyConfig.addPassthroughCopy({ "./_tmp/style.css": "./style.css" });
  eleventyConfig.addShortcode("version", function () {
    return now;
  });

  eleventyConfig.addPassthroughCopy({ "./src/assets/": "./" });

  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addFilter("postDateTimeStamp", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toISO();
  });

  // https://www.11ty.dev/docs/data-frontmatter-customize/#example-parse-excerpts-from-content
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!-- excerpt -->",
    excerpt_alias: "post_excerpt",
  });

  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
