import { mongoose } from 'mongoose'

const goodsSchema = new mongoose.Schema({
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
    type: String,
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
    default: 'Pending',
  },
})

const Good = mongoose.model.goods || mongoose.model('goods', goodsSchema)

export default Good
