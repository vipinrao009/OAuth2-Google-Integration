import { Schema,model} from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
        unique: true
    },
    image: {
        type: String,
    }
}, { timestamps: true });

const User = model('User', userSchema);
export default User;