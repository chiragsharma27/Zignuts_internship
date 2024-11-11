class University {
    constructor(university_name) {
        this.university_name = university_name;
        this.department = []
    }

    add_department(department) {
        if (this.department.includes(department)) {
            console.log(`${department} is already exist in ${this.university_name}`);
        }
        else {
            this.department.push(department);
            console.log(`${department} is added in ${this.university_name}`);
        }
    }

    remove_department(department) {
        const index = this.department.indexOf(department);
        if (index === -1) {
            console.log(`${department} is not found in ${this.university_name}`);
        }
        else {
            this.department.splice(index, 1);
            console.log(`${department} is removed from ${this.university_name}`);
        }
    }

    display_department() {

        if (this.department.length === 0) {
            console.log(`${this.university_name} has no department`);
        }
        else {
            console.log(`Departments of ${this.university_name} are`)
            for (let i = 0; i < this.department.length; i++) {
                console.log(this.department[i])
            }
        }
    }


}
const my_universty = new University("GTU");
my_universty.add_department("CSE");
my_universty.add_department("EEE");
my_universty.add_department("BBA");
my_universty.add_department("EEE");
my_universty.display_department();
console.log("");

my_universty.remove_department("EEE");
my_universty.display_department();
console.log("");

my_universty.add_department("EEE");
my_universty.display_department();