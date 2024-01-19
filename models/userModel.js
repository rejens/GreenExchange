import { Schema, model, models } from "mongoose";

const userSchema = new Schema({
   email: {
      type: String,
      required: true,
   },
   password: {
      type: String,
      required: true,
   },
});

const Password = models.user || model("users", userSchema);
export default Password;
