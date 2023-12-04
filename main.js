
function generateStudentCard() {
    const program = document.getElementById('program').value;
    const year = document.getElementById('year').value;
    const name = document.getElementById('name').value;
    const studentNumber = document.getElementById('studentNumber').value;
    const galleryInput = document.getElementById('galleryInput');

    const studentCard = document.getElementById('studentCard');
    studentCard.innerHTML = '';

    const card = document.createElement('div');
    card.classList.add('student-card');

    const avatar = document.createElement('img');
    avatar.src = galleryInput.files && galleryInput.files[0]
        ? URL.createObjectURL(galleryInput.files[0])
        : 'placeholder.jpg'; // Provide a placeholder image path
    avatar.alt = 'Avatar';

    const details = document.createElement('div');
    details.innerHTML = `
        <p>Program: ${program}</p>
        <p>Year of Entry: ${year}</p>
        <p>Name: ${name}</p>
        <p>Student Number: ${studentNumber}</p>
    `;

    card.appendChild(avatar);
    card.appendChild(details);
    studentCard.appendChild(card);
}
