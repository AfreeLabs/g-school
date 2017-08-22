
export class Student {
    date: string;
    batch: string;
    registree: string;
    class_level: string;
    department: string;

    constructor (StudentData: any) {
        this.date = StudentData.date;
        this.batch = StudentData.batch;
        this.registree = StudentData.registree;
        this.class_level = StudentData.class_level;
        this.department = StudentData.department;
    }
}