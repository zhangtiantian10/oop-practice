"use strict";

import Person from "./person";

class Worker extends Person{
    constructor(name, age) {
        super(name, age);
    }

    introduce() {
        return `${super.introduce()} I am a Teacher. I have a job.`;
    }
}

export default Worker;
