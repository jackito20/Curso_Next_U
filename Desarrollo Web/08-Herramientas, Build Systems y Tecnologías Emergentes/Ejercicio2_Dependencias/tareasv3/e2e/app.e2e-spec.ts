import { Tareasv3Page } from './app.po';

describe('tareasv3 App', function() {
  let page: Tareasv3Page;

  beforeEach(() => {
    page = new Tareasv3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('t works!');
  });
});
