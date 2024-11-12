const avarageGrades = [
    50, 60, 69, 71, 75, 80, 81, 85, 89, 90, 95, 100, 120
];

const getGrade = (avarageGrade) => {
    if (avarageGrade < 60) {
        return 'Незадовільно';
    }
    
    if (avarageGrade <= 70) {
        return 'Задовільно';
    }

    if (avarageGrade <= 80) {
        return 'Добре';
    }

    if (avarageGrade <= 90) {
        return 'Дуже добре';
    }

    if (avarageGrade <= 100) {
        return 'Відмінно';
    }

    return 'Ти що Енштейн?';
}

avarageGrades.forEach(avarageGrade => {
    console.log(getGrade(avarageGrade))
})
