"use strict";

import Person from "./person";

class Teacher extends Person{
    constructor(id, name, age, klasses) {
        super(id, name, age);
        this.klasses = klasses;
    }

    introduce() {
        let str = 'I teach No Class.';
        if (this.klasses && this.klasses.length) {
            const classesNumber = this.klasses
                .map(klass => klass.number).join(', ')
            str = `I teach Class ${classesNumber}.`
        }
        return `${super.introduce()} I am a Teacher. ${str}`
    }

    isTeaching(student) {
        return this.klasses.includes(student.klass);
    }
}

export default Teacher;