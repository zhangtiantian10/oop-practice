"use strict";

import Person from "./person";

class Student extends Person{
    constructor(id, name, age, klass) {
        super(id, name, age);
        this.klass = klass;
    }

    introduce() {
        let str = "at ";
        const leader = this.klass.leader;
        if (leader && leader.id === this.id) {
            str = "Leader of ";
        }
        return `${super.introduce()} I am a Student. I am ${str + this.klass.getDisplayName()}.`;
    }
}

export default Student;
