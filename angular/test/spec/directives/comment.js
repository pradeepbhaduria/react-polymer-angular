'use strict';

describe('Directive: comment', function () {

  // load the directive's module
  beforeEach(module('comment'));

  var element, scope;

  beforeEach(inject(function ($rootScope, $compile) {
    scope = $rootScope.$new();
    element = angular.element('<comment-model author="Santiago"><div>hola</div><div class="timestamp">1 hour ago</div></comment-model>');
    element = $compile(element)(scope);
    scope.$digest();
  }));

  it('should render the author', function (){
    expect(element.find('h2').html()).toBe('Santiago');
  });

  it('should render the msg', function (){
    expect(angular.element(element.find('div').children().find('div')[0]).html()).toBe('hola');
  });

  it('should render the time', function (){
    expect(angular.element(element.find('div').children().find('div')[1]).html()).toBe('1 hour ago');
  });
});
