ReactionCore.registerPackage({
  label: "Links",
  name: "alternate-links",
  icon: "fa fa-cubes",
  autoEnable: true,
  settings: {},
  registry: [
    {
      route: "/links/:_id",
      name: "link",
      template: "linkDetail",
      workflow: "corePageWorkflow"
    },
    {
      label: 'Links',
      name: 'linksCollection',
      route: '/links',
      template: 'linksCollection',
      provides: "settings" // Add link into the card other possible options: https://reactioncommerce.com/docs/development/packages#reactioncoreregisterpackage
    },
    {
      provides: "dashboard",
      name: "alternate-links",
      label: "Links",
      description: "Add custom linkinto the sidenav.",
      icon: "fa fa-file-text-o",
      priority: 2,
      container: "core"
    }
  ]
});
