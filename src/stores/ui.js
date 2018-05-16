import {extendObservable, observable} from 'mobx';

class UI {
    constructor() {
        extendObservable(this, {
            state: observable.map({}),
            tabs: observable.map({}),

        });
    }
}

export default UI;