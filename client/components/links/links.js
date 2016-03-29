
Template.links.onCreated(function() {
  this.subscribe('links');
});

Template.links.helpers({
  links: function () {
    return ReactionCore.Collections.Links.find({});
  }
});

Template.links.events({
  "click [data-link]": function(event) {
    ReactionLinks.Dictionary.link.set('url', $(event.target).data('url'));
  }
});

