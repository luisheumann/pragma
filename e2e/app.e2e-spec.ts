import { PragmaAppPage } from './app.po';

describe('pragma-app App', () => {
  let page: PragmaAppPage;

  beforeEach(() => {
    page = new PragmaAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
