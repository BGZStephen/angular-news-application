import { AngularNewsAppPage } from './app.po';

describe('angular-news-app App', () => {
  let page: AngularNewsAppPage;

  beforeEach(() => {
    page = new AngularNewsAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
