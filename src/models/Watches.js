import mongoose from 'mongoose';

const WatchesSchema = new mongoose.Schema({
  model: { type: String, required: true },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true },
  picture: { type: String },
});

export default mongoose.model('Watches', WatchesSchema);
