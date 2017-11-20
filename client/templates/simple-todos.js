Template.body.onCreated(function() {
    Meteor.subscribe("messages");
});

Template.body.helpers({
    messages: function() {
        return Messages.find({}, {
            sort: {
                createdAt: -1
            }
        });
    }
});

Template.body.events({
    "submit .new-message": function(event) {
        // Prevent default browser form submit
        event.preventDefault();

        // Get value from form element
        var text = event.target.text.value;

        // Insert a message into the collection
        Meteor.call("addMessage", text);

        // Clear form
        event.target.text.value = "";
    },
    "click .delete": function() {
        Meteor.call("deleteMessage", this._id);
    }
});
