import mongoose from "mongoose";

const actorsSchema = new mongoose.Schema({
    firstName: String,
    lastName: String
}, {collection: 'actors'});

export default actorsSchema;