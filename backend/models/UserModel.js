import mongoose from "mongoose";

const User = mongoose.Schema({
    judulBuku:{
        type: String,
        required: true
    },
    penulis:{
        type: String,
        required: true
    },
    hargaBuku:{
        type: Number,
        required: true
    },
});

export default mongoose.model('Users', User);