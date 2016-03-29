/**
 * Link Schema
 */

// ReactionCore.Schemas.Page = new SimpleSchema({
//   _id: {
//     type: String,
//     optional: true
//   },
//   shopId: {
//     type: String,
//     autoValue: ReactionCore.shopIdAutoValue,
//     index: 1,
//     label: "Page ShopId"
//   },
//   title: {
//     type: String,
//     defaultValue: ""
//   },
//   pageTitle: {
//     type: String,
//     optional: true
//   },
//   position: {
//     type: Number,
//     defaultValue: 1
//   },
//   content: {
//     type: String,
//     autoform: {
//       rows: 30
//     }
//   },
//   handle: {
//     type: String,
//     index: 1,
//     autoValue: function () {
//       let slug = this.value ||  getSlug(this.siblingField("title").value) || this.siblingField("_id").value || "";
//       if (this.isInsert) {
//         return slug;
//       } else if (this.isUpsert) {
//         return {
//           $setOnInsert: slug
//         };
//       }
//     }
//   },
//   isVisible: {
//     type: Boolean,
//     index: 1,
//     defaultValue: false
//   },
//   publishedAt: {
//     type: Date,
//     optional: true
//   },
//   createdAt: {
//     type: Date,
//     autoValue: function () {
//       if (this.isInsert) {
//         return new Date;
//       } else if (this.isUpsert) {
//         return {
//           $setOnInsert: new Date
//         };
//       }
//     }
//   },
//   updatedAt: {
//     type: Date,
//     autoValue: function () {
//       return new Date;
//     },
//     optional: true
//   }
// });


ReactionCore.Collections.Links = new Mongo.Collection("Links");

//TODO: Add Schema
//ReactionCore.Collections.Pages.attachSchema(ReactionCore.Schemas.Links);
