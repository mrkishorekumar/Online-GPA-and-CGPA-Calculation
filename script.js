
function addSubject(){
    const numberof = document.getElementById('numberof').value
    const numberOfSuject = parseInt(numberof) - 1
    for (let i = 0;i<numberOfSuject;i++){
        const row = document.getElementById('cloneModel')
        const table = document.getElementById('tableToModify')
        const clone = row.cloneNode(true);
        clone.id = "newID";
        table.appendChild(clone);
    }
    
}

function calaculate(){
    const markList = document.getElementsByClassName('marks')
    const mark = []
    for(let i = 0; i<markList.length;i++){
        mark.push(parseInt(markList[i].value))
    }

    const totalCredits = mark.reduce((a, b) => a + b, 0)

    const gradeList = document.getElementsByClassName('grade')
    const grade = []
    for (let j = 0; j<gradeList.length;j++){
        grade.push(parseInt(gradeList[j].value))
    }

    // program
    const gradeMark = []
    for (let k = 0; k<markList.length;k++){
        let total = mark[k]*grade[k]
        gradeMark.push(total)
    }

    const totalMarks = gradeMark.reduce((a, b) => a + b, 0)
    const gpa = totalMarks/totalCredits
    document.getElementById('gpa').innerHTML = `Your GPA is ${gpa}`
}

function addSemester(){
    const numberofCGPA = document.getElementById('numberofCGPA').value
    const numberOfSemester = parseInt(numberofCGPA) - 1
    for (let i = 0;i<numberOfSemester;i++){
        const row = document.getElementById('cloneModelCGPA')
        const table = document.getElementById('tableToModifyCGPA')
        const clone = row.cloneNode(true);
        clone.id = "newID";
        table.appendChild(clone);
    }
    
}

function calaculateCGPA(){
    const CGPAlist = document.getElementsByClassName('cgpa')
    const cgpa = []
    for (let i = 0; i<CGPAlist.length; i++){
        cgpa.push(parseFloat(CGPAlist[i].value))
    }

    const totalCGPA = cgpa.reduce((a, b) => a + b, 0)

    const CGPA = totalCGPA / cgpa.length

    document.getElementById('cgpa').innerHTML = `Your CGPA is ${CGPA}`
}
