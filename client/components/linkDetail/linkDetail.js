
Template.linkDetail.onCreated(function() {
  this.subscribe('links');
});

Template.linkDetail.helpers({
  link: function() {
    return ReactionCore.Collections.Links.findOne(
      ReactionRouter.current().params._id
    );
  },
  fieldComponent: function () {
    if (ReactionCore.hasPermission("createLink") || true) {
      return Template.linkEdit;
    }
    return Template.linkField;
  }
});
