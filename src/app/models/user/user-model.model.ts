export class UserModel {

    constructor(
        public uid: string,
        public email: string,
        public displayName: string,
        public photoURL: string,
        public emailVerified: boolean
    ) {}
}
