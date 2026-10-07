const joshAge = 0;

function calculateAge() {
    const birthDate = new Date('2001-02-09');
    const today = new Date();
    console.log(today.getFullYear);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    
    return age;
}

console.log(`Joshua's age is: ${calculateAge()}`);

joshAge = calculateAge();

updateAgeDisplay();