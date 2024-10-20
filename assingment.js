university.departments[1].head
// task one

const departmentFinder = university.departments.find(department => department.name === "Computer Science");

for (let i = 0; i < departmentFinder.courses.length; i++) {
    console.log(departmentFinder.courses[i].courseCode);
  }
// TASK TWO






const mathDepartment = university.departments.find(department => department.name === "Mathematics");
const linearAlgebraCourse = mathDepartment.courses.find(course => course.courseCode === "MATH202");
const bobGreen = linearAlgebraCourse.enrolledStudents.find(student => student.name === "Bob Green");

bobGreen.grade = "A+";
console.log(bobGreen);
// task 3 



const newStudent = { studentId: 1008, name: "Hannah Yellow", major: "Mathematics", year: 2 };

university.students.push(newStudent);
console.log(university.students);
// task 4



const csDepartment = university.departments.find(department => department.name === "Computer Science");
const dataStructuresCourse = csDepartment.courses.find(course => course.courseName === "Data Structures");

console.log(dataStructuresCourse.instructor.name);
// task 5

university.departments[1].courses[0].enrolledStudents.push({ studentId: 1008, name: "Hannah Yellow", grade: "B" });
// task 6

const getMathStudentsReults = () =>{
  return university.students.filter(student => student.major === "Mathematics");
}

console.log(getMathStudents());
// task 7


 const  getBobGreenCourses = () => {
  const courses = [];

  for (let i = 0; i < university.departments.length; i++) {
    const department = university.departments[i];
    
    for (let j = 0; j < department.courses.length; j++) {
      const course = department.courses[j];
      
      for (let k = 0; k < course.enrolledStudents.length; k++) {
        const student = course.enrolledStudents[k];
        
        if (student.name === "Bob Green") {
          courses.push({ courseName: course.courseName, grade: student.grade });
        }
      }
    }
  }

  return courses;
}

console.log(getBobGreenCourses());
// task 8