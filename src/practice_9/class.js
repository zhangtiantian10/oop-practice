"use strict";

class Class {
    constructor(number) {
        this.number = number;
    }

    getDisplayName() {
        return `Class ${this.number}`;
    }

    appendMember(student) {
        student.klass = this;
    }

    assignLeader(student) {
        if (student.klass.number === this.number) {
            this.leader = student;
        } else {
            console.log("It is not one of us.");
        }
    }
}

export default Class;
