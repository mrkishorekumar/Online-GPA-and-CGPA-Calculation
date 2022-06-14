
function addSubject(){
    const row = document.getElementById('cloneModel')
    const table = document.getElementById('tableToModify')
    const clone = row.cloneNode(true);
    clone.id = "newID";
    table.appendChild(clone);
}

function removeSubject(){
    const table = document.getElementsByTagName('tr')
    const len = table.length
    if (len>2){
        const lastElement = table[table.length - 1]
        console.log(lastElement)
    }
}

function calaculate(){
    const markList = document.getElementsByClassName('mark')
    const mark = []
    for(let i = 0; i<markList.length;i++){
        mark.push(parseInt(markList[i].value))
    }
    console.log(mark)

    const totalCredits = mark.reduce((a, b) => a + b, 0)
    console.log("total credits" , totalCredits)

    const gradeList = document.getElementsByClassName('grade')
    const grade = []
    for (let j = 0; j<gradeList.length;j++){
        grade.push(parseInt(gradeList[j].value))
    }
    console.log(grade)

    // program
    const gradeMark = []
    for (let k = 0; k<markList.length;k++){
        let total = mark[k]*grade[k]
        gradeMark.push(total)
    }
    console.log(gradeMark)

    const totalMarks = gradeMark.reduce((a, b) => a + b, 0)
    console.log("total marks" , totalMarks)

    console.log("gpa = ",totalMarks/totalCredits)
}