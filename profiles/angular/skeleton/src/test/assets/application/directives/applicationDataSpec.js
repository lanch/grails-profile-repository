describe("Application module", function() {

    beforeEach(angular.mock.module("application", function() {

    }));

    describe("applicationData directive", function() {

        var element, scope;

        beforeEach(angular.mock.inject(function ($compile, $rootScope, $templateCache) {
            $templateCache.put('/application/applicationData.html', 'Test');
            scope = $rootScope.$new();
            element = angular.element('<application-data></application-data>');
            $compile(element)(scope);
            scope.$digest();
        }));

        it("should be tested", function() {
            expect(element.innerHTML).toEqual("Test");
        });

    });

});

