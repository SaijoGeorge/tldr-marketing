exports.onCreatePage = ({ page, actions: { createPage } }) => {
  if (page.path.match(/^\/categories/)) {
    page.matchPath = '/categories/*'
    createPage(page)
  }
  if (page.path.match(/^\/posts/)) {
    page.matchPath = '/posts/*'
    createPage(page)
  }
}
