import { extendObservable, observable } from 'mobx';

class UI {
    constructor() {
        extendObservable(this, {
           state: observable.map({})
        });
    }
}

export default UI;