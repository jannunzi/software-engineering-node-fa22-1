import mongoose from "mongoose";
import followsSchema from "./follows-schema";

const followsModel = mongoose.model('FollowsModel', followsSchema);

export default followsModel;