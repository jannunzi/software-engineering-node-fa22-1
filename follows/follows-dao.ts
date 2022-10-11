import followsModel from "./follows-model";

/**
 * Retrieves all records of who is following who
 * including their usernames and IDs. Mostly for
 * development and testing. NOT FOR PRODUCTION
 */
export const findAllFollows = () =>
    followsModel.find()
        .populate('followed', 'username')
        .populate('follower', 'username')
        .exec();

/**
 * Retrieves all users following user whose
 * ID is :followed
 * @param {string} followed Id of user being followed
 */
export const findFollowers = (followed: string) =>
    followsModel.find({followed: followed})
//        .populate('followed', 'username')
        .populate('follower', 'username')
        .exec();

/**
 * Finds users being followed by follower
 * @param follower Id of user following follower
 */
export const findFollowing = (follower: string) =>
    followsModel.find({follower})
        .populate('followed', 'username')
        // .populate('follower', 'username')
        .exec();

/**
 * Records that follower is following followed
 * @param follower User id following followed
 * @param followed User id of followed user
 */
export const userFollowsUser = (follower: string, followed: string) =>
    followsModel.create({follower: follower, followed: followed});

/**
 * Removes record of follower following followed
 * @param follower User id following followed
 * @param followed User id of followed user
 */
export const userUnfollowsUser = (follower: string, followed: string) =>
    followsModel.deleteOne({follower, followed});

// TODO: 1) singleton pattern
// TODO: 2) implement interface
// TODO: 3) follows data model
