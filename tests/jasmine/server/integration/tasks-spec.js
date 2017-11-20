describe("Messages : addMessage", function() {

    it("should throw an exception when adding a message if the user " + "is not logged in", function() {
        Meteor.call('addMessage', 'some message', function(err) {
            expect(err).not.toBe(undefined);
            expect(err.error).toEqual('not-authorized');
        });
    });

});
