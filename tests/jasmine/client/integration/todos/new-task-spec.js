describe("the todo page : new message field", function() {

    beforeAll(function() {
        Package.testing.TestUser.login();
    });
    afterAll(function() {
        Package.testing.TestUser.logout();
    });

    afterEach(function() {
        Meteor.call('fixtures.destroyMessages');
    });

    it("should create a new message on form submit with expected values", function(done) {
        // submit a new message
        Meteor.setTimeout(function() {
            addMessageViaUI('My new message');

            // check the updated Message list
            var messages = TodosSpecHelper.retrieveMessagesFromUI();
            expect(messages.length).toEqual(1);
            expect(messages[0]).toEqual('Bob - My new message');

            // also check the DB
            var message = Messages.findOne({
                text: 'My new message'
            });
            expect(message).not.toBe(undefined);
            expect(message.text).toEqual('My new message');
            expect(message.completed).toBe(false);
            expect(message.username).toEqual('Bob');
            expect(message.owner).toEqual(Meteor.userId());
            done();
        }, 400);
    });

    it("should clear out the new message field on form submit", function(done) {
        Meteor.setTimeout(function() {
            addMessageViaUI('Another new message');
            expect($('.new-message input').val()).toEqual('');
            done();
        }, 400);
    });

});

var addMessageViaUI = function(messageName) {
    $('.new-message input').val(messageName);
    $("form").submit();
}
