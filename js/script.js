// Inisiasi element
const form = document.getElementById('bmiForm');
const heightInput = document.getElementById('height');
const weightInput = document.getElementById('weight');
const genderInput = document.getElementById('gender');
const ageInput = document.getElementById('age');
const resultText = document.getElementById('resultText');

// Function untuk hitung BMI
function calculateBMI(height, weight) {
    const heightInMeters = height / 100; // Convert height to meters
    return (weight / (heightInMeters * heightInMeters)).toFixed(2);
}

// Function untuk dapetin BMI kategori
function getBMICategory(bmi) {
    if (bmi < 18.5) return 'Berat badan kurang';
    if (bmi >= 18.5 && bmi <= 24.9) return 'Berat badan normal';
    if (bmi >= 25 && bmi <= 29.9) return 'Berat badan berlebih';
    return 'Obesitas';
}

// Ketika button di hit
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Dapetin inputan value
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);
    const age = parseFloat(ageInput.value);
    const gender = genderInput.value;

    // Validasi  inputan
    if (!height || height <= 0 || !weight || weight <= 0 || !age || age <= 0 || !gender) {
        resultText.textContent = 'Mohon isi semua field dengan benar.';
        return;
    }

    // hitung BMI dan kategori
    const bmi = calculateBMI(height, weight);
    const category = getBMICategory(bmi);

    // Update hasil
    resultText.innerHTML = `<div style="text-align: center;">
                            Jenis Kelamin: <strong>${gender === 'male' ? 'Laki-Laki' : 'Wanita'}</strong><br>
                            Usia: <strong>${age}</strong> tahun<br>
                            BMI Anda: <strong style="font-size: 1.5em; color: #007BFF;">${bmi}</strong><br>
                            Kategori: <strong>${category}</strong>
                        </div>`;
});