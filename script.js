// Auto calculate Joshua's age based on his birthdate and the current date

let joshAge = 0;

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
console.log(`Joshua's age is: ${joshAge}`);

document.getElementById('josh-age').textContent = joshAge;


// function togglePicture() {
//     let profilePic = document.getElementById('profile-pic');

//     profilePic.addEventListener('click', function() {
//         if (profilePic.src.includes('josh_crater_lake_square.jpg')) {
//             profilePic.src = 'assets/images/jonksh.PNG';
//         } else {
//             profilePic.src = 'assets/images/josh_crater_lake_square.jpg';
//         }
//     });
// }

// togglePicture();

let profilePic = document.getElementById('profile-pic');

function togglePicture() {
    if (profilePic.src.includes('josh_crater_lake_square.jpg')) {
        profilePic.src = 'assets/images/jonksh.PNG';
    } else {
        profilePic.src = 'assets/images/josh_crater_lake_square.jpg';
    }
}

profilePic.addEventListener('click', togglePicture);