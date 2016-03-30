
ReactionLinks.Service = {
  create: new ValidatedMethod({
    name: "ReactionLinks.Service.create",
    validate(args) {
      //TODO: Permission
    },
    run(args) {
      if(!args) args = {};

      let options = {},
          link;

      if (!args._id && !args.key && !args.value) {
        link = { title: "", url: "" };
        options = { validation: false };
      } else if (args._id && !args.key && !args.value) {
        link = { _id: args._id, title: "", url: "" };
        options = { validation: false };
      }

      return ReactionCore.Collections.Links.insert(link, options);
    }
  }),
  update: new ValidatedMethod({
    name: "ReactionLinks.Service.update",
    validate(args) {
      //TODO: Permission
    },
    run({key, value, _id}) {
      let result = {};
      result[key] = value;
      return ReactionCore.Collections.Links.update(_id, {$set: result});
    }
  }),
  delete: new ValidatedMethod({
    name: "ReactionLinks.Service.delete",
    validate(_id) {
      //TODO: Permission
    },
    run(_id) {
      return ReactionCore.Collections.Links.remove(_id);
    }
  }),
  get: new ValidatedMethod({
    name: "ReactionLinks.Service.get",
    validate(_id) {

    },
    run(_id) {
      let id;
      if(!_id) {
        id = Random.id();
        ReactionLinks.Service.create.call({_id: id});
      } else {
        id = _id;
      }
      return ReactionCore.Collections.Links.findOne(id);
    }
  })
};
