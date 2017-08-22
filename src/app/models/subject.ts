
export class Subjects {
    class_level: string;
    teacher: string;
    name: string;
    code: string;
    description: string;

    constructor (subjectsData: any) {
        this.class_level = subjectsData.class_level;
        this.teacher = subjectsData.teacher;
        this.name = subjectsData.name;
        this.code = subjectsData.code;
        this.description = subjectsData.description;
    }
}