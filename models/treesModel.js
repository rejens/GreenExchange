import { Schema, model, models } from "mongoose";
const treesSchema = new Schema({
   latitude: {
      type: String,
      required: true,
   },
   longitude: {
      type: String,
      required: true,
   },
   treeType: {
      type: String,
      required: true,
   },
   plantedDate: {
      type: Date,
      required: true,
   },
});

const Tree = models.trees || model("trees", treesSchema);

export default Tree;
