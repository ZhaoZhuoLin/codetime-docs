"use strict";
class Task {
    constructor(name) {
        this.name = name;
        this._status = true;
        this._much = "4qweasdas545";
    }
    get status() {
        return this.status;
    }
    set status(status) {
        this._status = status;
        console.log("status被改变了~~");
    }
}
const a = new Task("radar");
// a._much = "123asdasd";
a.status = false;
console.log(a);
