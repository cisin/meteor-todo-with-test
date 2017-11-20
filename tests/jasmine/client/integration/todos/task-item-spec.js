describe("the todo page : an individual message item", function() {

    beforeEach(function() {
        Meteor.call('fixtures.createMessage', {
            text: 'The message'
        });
    });
    afterEach(function() {
        Meteor.call('fixtures.destroyMessages');
    });
    it("should include the name of the user who created " + "the message along with the message text", function(done) {
        Meteor.setTimeout(function() {
            var messages = TodosSpecHelper.retrieveMessagesFromUI();

            expect(messages.length).toEqual(1);
            expect(messages[0]).toEqual('Bob - The message');
            done();
        }, 400);
    });
    it("should include the message text", function(done) {
        Meteor.setTimeout(function() {
            var messages = TodosSpecHelper.retrieveMessagesFromUI();

            expect(messages.length).toEqual(1);
            expect(messages[0]).toEqual('Bob - The message');
            done();
        }, 400);
    });

    it("should include a delete button", function(done) {
        Meteor.setTimeout(function() {
            var deleteButton = $('.delete');
            expect(deleteButton.length).toEqual(1);
            done();
        }, 400);
    });

});
