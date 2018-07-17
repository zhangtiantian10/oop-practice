"use strict";

import Person from "./person";

class Teacher extends Person {
    constructor(id, name, age, klass) {
        super(id, name, age, klass);
        this.klass = klass;
    }

    introduce() {
        return `${super.introduce()} I am a Teacher. I teach ${this.klass ? this.klass.getDisplayName() : 'No Class'}.`;
    }
}

export default Teacher;