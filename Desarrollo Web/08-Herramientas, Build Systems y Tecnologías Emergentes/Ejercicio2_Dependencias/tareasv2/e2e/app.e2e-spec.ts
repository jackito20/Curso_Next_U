import { Tareasv2Page } from './app.po';

describe('tareasv2 App', function() {
  let page: Tareasv2Page;

  beforeEach(() => {
    page = new Tareasv2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('t works!');
  });
});
