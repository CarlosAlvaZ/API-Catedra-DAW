import { Schema, model } from "mongoose";

const elementSchema = new Schema({
    usuario : {
        type: String,
        required: true,
    },
    registro : {
        type: Date,
    },
    record: {
        type: Array,
    },
    rutinas: {
        type: Array,
    },
    imc: {
        type: Number,
    },
    password: {
        type: String
    }
}, { collection : "routime" })

const Element = model('element', elementSchema)

export default Element