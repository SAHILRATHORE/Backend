import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
    videoFile: {
        type: String, // cloudinary Url
        required: true,
    },
    thumbnail: {
         type: String, // cloudinary Url
        required: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    discription: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    duration: {
        type: Number, // cloudinary Url
        required: true
    },
    view: {
        type: Number, 
        default: 0
    },
    isPublished: {
        type: Boolean, 
        default: true
    },
},
{
    timestamps: true
})

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema)