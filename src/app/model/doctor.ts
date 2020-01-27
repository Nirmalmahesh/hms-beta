import { UserDetails } from './userDetails';

export class Doctor {

    constructor(public doctorId: Number,
        public doctorSpecialization: String,
        public isActive: Number,
        public createdTime: Date,
        public updatedTime: Date,
        public userDetails: UserDetails) { }

}