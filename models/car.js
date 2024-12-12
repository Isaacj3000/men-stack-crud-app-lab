const carSchema = new mongoose.Schema({
    name: { type: String, required: true},
    Description: { type: String, required: true },
    image: String,
})

const Car = mongoose.model('Car', carSchema)
module.exports = Car