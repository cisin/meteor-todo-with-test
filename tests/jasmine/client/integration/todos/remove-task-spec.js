describe("the todo page : remove message", function() {

    beforeEach(function() {
        Meteor.call('fixtures.createMessage');
    });
    afterEach(function() {
        Meteor.call('fixtures.destroyMessages');
    })

    it("should remove a message when the delete button is clicked", function(done) {
        Meteor.setTimeout(function() {
            // remove the message
            $('.delete').click();

            // ensure it is not in the database
            expect(Messages.find().count()).toEqual(0);

            // ensure it is not in the UI
            expect($('li').size()).toEqual(0);
            done();
        }, 400);
    });

});
