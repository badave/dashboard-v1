import { extendObservable } from 'mobx';

class User {
    constructor() {
        extendObservable(this, {
           name: ''
        });
    }
}

export default User;