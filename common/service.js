
ReactionLinks.Service = {
  create: new ValidatedMethod({
    name: "ReactionLink.Service.create",
    validate(args) {
      //TODO: Permission
    },
    run(args) {
      let link = args && args.page;
      let options = {};
      if (!link) {
        link = {
          _id: Random.id(),
          title: "",
          url: "",
          slug: ""
        };
        options = {validation: false};
      }
      return ReactionCore.Collections.Links.insert(link, options);
    }
  }),
  update: new ValidatedMethod({
    name: "ReactionLinks.Service.update",
    validate(args) {
      //TODO: Permission
    },
    run({key, value, linkId}) {
      let result = {};
      result[key] = value;
      return ReactionCore.Collections.Links.update(linkId, result);
    }
  })
};
