import mongoose from 'mongoose';
const gropSchema = new mongoose.Schema({
    
    code: { type: Number },
    name_grop:{type :String}
})

const GROP = mongoose.model('GROP', gropSchema)
export default GROP