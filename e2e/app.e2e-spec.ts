import { Angular7Page } from './app.po';

describe('angular7 App', () => {
  let page: Angular7Page;

  beforeEach(() => {
    page = new Angular7Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
