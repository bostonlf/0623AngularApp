import { App0623Page } from './app.po';

describe('app0623 App', () => {
  let page: App0623Page;

  beforeEach(() => {
    page = new App0623Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
