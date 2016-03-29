Meteor.publish('links', () => {
  return ReactionCore.Collections.Links.find({});
});
