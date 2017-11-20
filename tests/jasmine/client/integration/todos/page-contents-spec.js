describe("the todo page : page contents", function() {

    describe("for all users", function() {
        it("should include a page title of 'Todo List'", function() {
            expect($('title').text()).toEqual('Todo List');
        });

        it("should include an unordered list for displaying the messages", function() {
            expect($('ul').length).toEqual(1);
        });
    });

    describe("for logged in users", function() {

        beforeEach(function() {
            Package.testing.TestUser.login();
        });

        it("should include a field for entering a new message " + "with an appropriate placeholder", function() {
            var input = $('.new-message input');
            expect(input.length).toEqual(1);
            expect(input.attr('placeholder')).toEqual('Type to add new messages');
        });
    });

    describe("for logged out users", function() {

        beforeEach(function() {
            Package.testing.TestUser.logout();
        });

        it("should not include a field for entering a new message", function(done) {
            Meteor.setTimeout(function() {
                expect($('.new-message input').length).toEqual(0);
                done();
            }, 400);
        });

        it("should include a login link", function(done) {
            Meteor.setTimeout(function() {
                expect($('a#login-sign-in-link').length).toEqual(1);
                done();
            }, 400);
        });
    });
});
