import { BlogAdminPage } from './app.po';

describe('blog-admin App', () => {
  let page: BlogAdminPage;

  beforeEach(() => {
    page = new BlogAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
