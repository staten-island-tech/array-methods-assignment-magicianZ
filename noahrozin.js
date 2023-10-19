
//teachers1 = ['mrs.m','mr.michealwhale','mr.clengo','mr.m']



//console.log(teachers1[teachers1.length - 1])

//teachers1.forEach((teacher)=>console.log(teacher))


const students = [
    {
        name1:'Ryan',
        graduated:true,
        teachers:['goyco','zeregea','michian','rerick'],
        id:24635643
        

    },
    {
        name1:'Nathan ',
        graduated:true,
        teachers:['whalen','macula','mccarthy'],
        id:234092821
    },
    {
        name1:'Ethan',
        graduated:false,
        teachers:['buro','morra'],
        id:221009566
    },

]


//student.forEach((i)=>console.log(i.name1)) part 1


//console.log(students.forEach((student)=> student.teachers.forEach((teacher)=> console.log(teacher)))
//) //part2










//student.forEach((i) => console.log(i.graduated))



//let variable = student.filter((i) => i.graduated.length < 5)part3
//variable.forEach((x)=>console.log(x.graduated))part3


let variable = students.filter((teacher) => teacher.teachers.length > 2)
variable.forEach((x)=>console.log(x.teachers))
















 


