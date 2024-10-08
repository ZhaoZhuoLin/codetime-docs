interface SeduceTask {
    id: string,
    name: string,
    status: boolean,
    time?: Date
    run(): void;
}

class RadarTask implements SeduceTask {
    id: string;
    name: string;
    status: boolean;
    constructor(id: string, name: string) {
        this.id = id;
        this.name = name;
        this.status = true;
    }
    run() {
        console.log(`任务id:${this.id},运行状态${this.status}`)
    }
}

const task1 = new RadarTask("1", 'radar');
task1.run();
