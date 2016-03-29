
Template.linkEdit.helpers({
  i18nPlaceholder: function () { //TODO: Add translations
    i18nextDep.depend();
    const i18nKey = `linkEdit.${this.field}`;
    let i18nextValue = i18next.t(i18nKey);
    if (i18nextValue === i18nKey || i18nextValue == null) {
      ReactionCore.Log.info(`returning empty placeholder pageDetailEdit: ${i18nKey} no i18n key found.`);
    } else {
      return i18nextValue;
    }
  }
});

Template.linkEdit.events({
  'change input:text': function(event) {
    ReactionLinks.Service.update.call({
      key: $(event.target).data('field'),
      value: event.target.value,
      linkUrl: Session.get("linkUrl")
    });
  }
});
