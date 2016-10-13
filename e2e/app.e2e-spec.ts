import { GerundioUiPage } from './app.po';

describe('gerundio-ui App', function() {
  let page: GerundioUiPage;

  beforeEach(() => {
    page = new GerundioUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
