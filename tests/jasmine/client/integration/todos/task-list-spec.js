describe("the todo page : message list", function() {

    beforeEach(function() {
        Meteor.call('fixtures.createMessage', {
            text: 'This is message 1',
            createdAt: '2015-01-01'
        });
        Meteor.call('fixtures.createMessage', {
            text: 'This is message 2',
            createdAt: '2015-02-01'
        });
        Meteor.call('fixtures.createMessage', {
            text: 'This is message 3',
            createdAt: '2015-03-01'
        });
    });
    afterEach(function() {
        Meteor.call('fixtures.destroyMessages');
    });

    it("should contain the current list of messages sorted by creation date descending", function(done) {
        Meteor.setTimeout(function() {

            var messages = TodosSpecHelper.retrieveMessagesFromUI(); // use the helper

            expect(messages.length).toEqual(3);
            expect(messages[0]).toEqual('Bob - This is message 3');
            expect(messages[1]).toEqual('Bob - This is message 2');
            expect(messages[2]).toEqual('Bob - This is message 1');
            done();
        }, 400);
    });

});