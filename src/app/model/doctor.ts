import { UserDetails } from './userDetails';

export class Doctor {

    constructor(public doctorId: number,
        public doctorSpecialization: string,
        public isActive: number,
        public createdTime: Date,
        public updatedTime: Date,
        public userDetails: UserDetails) { }

}
