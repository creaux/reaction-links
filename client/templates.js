
Template.linkDetail.onCreated(function() {
    this.subscribe('links');
    this.autorun(function(){
        Session.set('linkId', ReactionRouter.current().params._id);
    });
});

Template.linkDetail.helpers({
    link: function() {
        return ReactionLinks.Service.get.call(Session.get('linkId'));
    },
    fieldComponent: function () {
        if (ReactionCore.hasPermission("createLink") || true) {
            return Template.linkEdit;
        }
        return Template.linkField;
    }
});

Template.linkDetail.events({
    'click [data-create]': function() {
        ReactionLinks.Service.create.call();
        //ReactionRouter.go(); //TODO
    },
    'click [data-delete]': function(event) {
        ReactionLinks.Service.delete.call(
            event.target.getAttribute('data-id')
        );
    }
});


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
            _id: ReactionRouter.current().params._id
        });
    }
});


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
        let linkId = event.target.getAttribute('data-id');
        ReactionRouter.go("".concat("/reaction/link/", linkId));
        Session.set('linkId', linkId);
    }
});
