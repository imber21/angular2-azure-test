import { OnePage } from './app.po';

describe('one App', () => {
  let page: OnePage;

  beforeEach(() => {
    page = new OnePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('one works!');
  });
});
