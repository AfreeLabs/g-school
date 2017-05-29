import { GSchoolPage } from './app.po';

describe('g-school App', () => {
  let page: GSchoolPage;

  beforeEach(() => {
    page = new GSchoolPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
