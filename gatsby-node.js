const classes = require('./src/data/classes');
const path = require('path');

exports.createPages = ({actions}) => {
  const {createPage} = actions;
  const classPageTemplate = path.resolve('src/templates/ClassTemplate.js');
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  return classes.forEach(page => {
    console.log(page);
    createPage({
      // Path for this page — required
      path: `${page.slug}`,
      component: classPageTemplate,
      context: {
        ...page
      }
    });
  });
};
