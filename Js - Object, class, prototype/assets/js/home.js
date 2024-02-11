"use";

let stu1 = { id: 1, fullName: "Oruj Mehrabov", age: 26, address: "Yasamal" };
let stu2 = {
  id: 2,
  fullName: "Kenan Amiraslanov",
  age: 27,
  address: "Xirdalan",
};
let stu3 = { id: 3, fullName: "Sahin Movsumzade", age: 22, address: "Masalli" };
let stu4 = { id: 4, fullName: "Orxan Mehrabov", age: 23, address: "Yasamal" };

let group = {
  name: "P418",
  capasity: 3,
  students: [],
  addStudent: function (stu) {
    if (stu === undefined) {
      alert("Input can't be empty");
      return;
    }

    if (this.students.length >= this.capasity) {
      alert("Group already filled");
      return;
    }
    this.students.push(stu);
  },
};

function edit(id, updatedInfo) {
  let studentIndex = this.students.findIndex((stu) => stu.id === id);
  if (studentIndex === -1) {
    alert("Student not found");
    return;
  }
  this.students[studentIndex] = {
    ...this.students[studentIndex],
    ...updatedInfo,
  };
}
group.deleteStudent = function (stuId) {
  let index = this.students.findIndex((stu) => stu.id === stuId);
  if (index === -1) {
    alert("Student not found");
    return;
  }
  this.students.splice(index, 1);
};

function searchStudentByName(name) {
  for (let i = 0; i < group.students.length; i++) {
    if (group.students[i].fullName === name) {
      return group.students[i];
    }
  }
  return null;
}
let searchedStudent = searchStudentByName("Oruj Mehrabov");
console.log(searchedStudent);

function getById(id) {
  for (let i = 0; i < group.students.length; i++) {
    if (group.students[i].id === id) {
      return group.students[i];
    }
  }
  return null;
}
