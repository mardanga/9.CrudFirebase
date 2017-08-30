import { CrudFirebasePage } from './app.po';

describe('crud-firebase App', () => {
  let page: CrudFirebasePage;

  beforeEach(() => {
    page = new CrudFirebasePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
