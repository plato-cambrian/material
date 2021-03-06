describe('md-button', function() {

  beforeEach(TestUtil.mockRaf);
  beforeEach(module('material.components.button'));

  it('should be anchor if href attr', inject(function($compile, $rootScope) {
    var button = $compile('<md-button href="/link">')($rootScope.$new());
    $rootScope.$apply();
    expect(button[0].tagName.toLowerCase()).toEqual('a');
  }));

  it('should be anchor if ng-href attr', inject(function($compile, $rootScope) {
    var button = $compile('<md-button ng-href="/link">')($rootScope.$new());
    $rootScope.$apply();
    expect(button[0].tagName.toLowerCase()).toEqual('a');
  }));

  it('should be button otherwise', inject(function($compile, $rootScope) {
    var button = $compile('<md-button>')($rootScope.$new());
    $rootScope.$apply();
    expect(button[0].tagName.toLowerCase()).toEqual('button');
  }));

  it('should pass in disabled attribute (testing our DOM bug-fix)', inject(function($compile, $rootScope) {
    var button = $compile('<md-button disabled>')($rootScope.$new());
    $rootScope.$apply();
    expect(button[0].hasAttribute('disabled')).toBe(true);
  }));

  it('should expect an aria-label if element has no text', inject(function($compile, $rootScope, $log) {
    spyOn($log, 'warn');
    var button = $compile('<md-button><md-icon></md-icon></md-button>')($rootScope);
    $rootScope.$apply();
    expect($log.warn).toHaveBeenCalled();

    $log.warn.reset();
    button = $compile('<md-button aria-label="something"><md-icon></md-icon></md-button>')($rootScope);
    $rootScope.$apply();
    expect($log.warn).not.toHaveBeenCalled();
  }));

});
