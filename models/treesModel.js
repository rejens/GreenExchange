import { mongoose } from 'mongoose'

const treesSchema = new mongoose.Schema({
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
})

const Tree = mongoose.model.trees || mongoose.model('trees', treesSchema)

export default Tree
