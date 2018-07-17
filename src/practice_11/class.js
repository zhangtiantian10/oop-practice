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
        if (this.teacher) {
            console.log('I am ' + this.teacher.name + '. I know ' + student.name + ' has joined Class ' + this.number + '.');
        }
    }

    assignLeader(student) {
        if (this.isIn(student)) {
            this.leader = student;
            if (this.teacher) {
                console.log('I am ' + this.teacher.name + '. I know ' + student.name + ' become Leader of Class ' + this.number + '.');
            }
        } else {
            console.log("It is not one of us.");
        }
    }

    isIn(student) {
        return student.klass.number === this.number;
    }

    registerAssignLeaderListener(teacher) {
        this.teacher = teacher;
    }

    registerJoinListener(teacher) {
        this.teacher = teacher;
    }
}

export default Class;
