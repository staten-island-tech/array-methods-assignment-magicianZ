
//teachers1 = ['mrs.m','mr.michealwhale','mr.clengo','mr.m']



//console.log(teachers1[teachers1.length - 1])

//teachers1.forEach((teacher)=>console.log(teacher))


const students = [
    {
        name1:'Ryan',
        graduated:true,
        teachers:['goyco','zeregea'],
        id:24635643
        

    },
    {
        name1:'Nathan ',
        graduated:true,
        teachers:['whalen','macula'],
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
/* const x = student.forEach((i)=>{
console.log(i.name1);
console.log(i.graduated);
})
console.log(x)//part2 */

console.log( students.forEach((student)=> student.teachers.forEach((teacher)=> console.log(teacher)))
)










//student.forEach((i) => console.log(i.graduated))



//let variable = student.filter((i) => i.graduated.length < 5)part3
//variable.forEach((x)=>console.log(x.graduated))part3

















 


