import mongoose from 'mongoose'

const NoteSchema = new mongoose.Schema({
  title: { type: String, required: true },
  isFavorite: { type: Boolean, default: false },
  text: { type: String, required: true },
  color: { type: String, required: true },
  createdDate: { type: Date, required: true }
})

export default mongoose.models.Note || mongoose.model('Note', NoteSchema)
