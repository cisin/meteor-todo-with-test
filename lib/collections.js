Messages = new Mongo.Collection("messages");

Meteor.methods({
    addMessage: function(text) {
        if (!Meteor.userId()) {
            throw new Meteor.Error("not-authorized");
        }
        Messages.insert({
            text: text,
            createdAt: new Date(),
            completed: false,
            owner: Meteor.userId(),
            username: Meteor.user().username
        });
    },
    deleteMessage: function(messageId) {
        var message = Messages.findOne(messageId);

        Messages.remove(messageId);
    }
});
