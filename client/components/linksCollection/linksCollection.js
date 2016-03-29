
Template.linksCollection.onCreated(function() {
  this.subscribe('links');
});

Template.linksCollection.helpers({
  links: function() {
    return ReactionCore.Collections.Links.find({});
  }
});

Template.linksCollection.events({
  "click [data-link]": function(event) {
    Session.set('linkId', event.target.getAttribute('data-link'));
    ReactionRouter.go("".concat("/reaction/links/", event.target.getAttribute('data-link')));
  }
});
