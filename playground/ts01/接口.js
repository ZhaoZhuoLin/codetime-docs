"use strict";
class RadarTask {
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.status = true;
    }
    run() {
        console.log(`任务id:${this.id},运行状态${this.status}`);
    }
}
const task1 = new RadarTask("1", 'radar');
task1.run();
