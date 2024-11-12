const avarageGrades = [
    50, 60, 69, 71, 75, 80, 81, 85, 89, 90, 95, 100, 120
];

const getGrade = (avarageGrade) => {
    switch (true) {
        case avarageGrade < 60:
            return 'Незадовільно';
        case avarageGrade <= 70:
            return 'Задовільно';
        case avarageGrade <= 80:
            return 'Добре';
        case avarageGrade <= 90:
            return 'Дуже добре';
        case avarageGrade <= 100:
            return 'Відмінно';
        default:
            return 'Ти що Енштейн?';
    }
}

avarageGrades.forEach(avarageGrade => {
    console.log(getGrade(avarageGrade))
})
