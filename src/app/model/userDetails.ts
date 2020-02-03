export class UserDetails {


    constructor(
        public userId: number,
        public username: string,
        public password: string,
        public roleId: number,
        public firstName: string,
        public lastName: string,
        public city: string,
        public state: string,
        public isActive: number,
        public createdTime: Date,
        public updatedTime: Date,
        public phoneNumber: string

    ) { }
}
