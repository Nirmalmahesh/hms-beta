export class UserDetails {


    constructor(
        public userId: Number,
        public username: String,
        public password: String,
        public roleId: Number,
        public firstName: String,
        public lastName: String,
        public city: String,
        public state: String,
        public isActive: Number,
        public createdTime: Date,
        public updatedTime: Date,
        public phoneNumber: String
        
    ) { }
}