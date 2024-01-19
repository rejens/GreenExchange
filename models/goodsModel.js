import { model, models, Schema } from "mongoose";

const goodsSchema = new Schema({
   pickupDate: {
      type: Date,
      required: true,
   },
   pickupTime: {
      type: String,
      required: true,
   },
   pickupAddress: {
      type: String,
      required: true,
   },
   phone: {
      type: String,
      required: true,
   },
   goodsType: {
      type: String,
      required: true,
   },
   goodsWeight: {
      type: Number,
      required: true,
   },
   goodsDescription: {
      type: String,
   },
   goodsImage: {
      type: String,
      required: true,
   },
   type: {
      type: String,
      required: true,
   },
   status: {
      type: String,
      required: true,
      default: "Pending",
   },
});

const Good = models.goods || model("goods", goodsSchema);
export default Good;
