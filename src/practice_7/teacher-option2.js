"use strict";

import Person from "./person";

class Teacher extends Person{
    constructor(name, age, klass) {
        super(name, age);
        this.klass = klass;
    }

    introduce() {
        return `${super.introduce()} I am a Teacher. I teach ${this.klass ? this.klass.getDisplayName() : 'No Class'}.`;
    }

    introduceWith(student) {
        const string = student.klass.number === this.klass.number ? `teach ${student.name}` : `don't teach ${student.name}`;
        return `${super.introduce()} I am a Teacher. I ${string}.`;
    }
}

export default Teacher;

