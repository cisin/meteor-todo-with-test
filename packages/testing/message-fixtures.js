var createMessage = function(messageAttributes) {
    var message = _.merge({}, getDefaultMessage(), messageAttributes);

    var messageId = Messages.insert(message);

    return Messages.findOne(messageId);
}

var destroyMessages = function() {
    Messages.remove({});
}

var getDefaultMessage = function() {
  var defaultUsername = '';
  var defaultOwnerId = '';

  // if a user is logged in, assign that user
  // as the owner of the message, otherwise we'll
  // default to 'Bob'
  if (Meteor.user()) {
    defaultUsername = Meteor.user().username;
    defaultOwnerId = Meteor.user()._id;
  } else {
    var user = Meteor.users.findOne({username: 'Bob'});
    defaultUsername = user.username;
    defaultOwnerId = user._id;
  }

  return {
    text: 'Message text',
    createdAt: new Date(),
    completed: false,
    username: defaultUsername,
    owner: defaultOwnerId
  }
};
Meteor.methods({
    'fixtures.createMessage': createMessage,
    'fixtures.destroyMessages': destroyMessages
});