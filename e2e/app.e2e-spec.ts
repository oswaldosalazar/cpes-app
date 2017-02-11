import { CpesAppPage } from './app.po';

describe('cpes-app App', function() {
  let page: CpesAppPage;

  beforeEach(() => {
    page = new CpesAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
