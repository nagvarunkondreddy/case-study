import * as CurrentRouterActions from './current-router.actions';

describe('CurrentRouter', () => {
  it('should create an instance', () => {
    expect(new CurrentRouterActions.LoadCurrentRouters()).toBeTruthy();
  });
});
