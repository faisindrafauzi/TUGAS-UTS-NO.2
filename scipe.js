function hitungBeratBadanIdeal() {
    // Mengambil input tinggi badan dari pengguna
    let tinggiBadan = parseFloat(document.getElementById("inputTinggi").value);

    if (isNaN(tinggiBadan) || tinggiBadan <= 0) {
        alert("Tinggi badan harus dalam angka yang valid.");
        return;
    }

    // Menghitung berat badan ideal
    let beratBadanIdeal = tinggiBadan - 100 - (0.1 * (tinggiBadan - 100));

    // Menampilkan hasil berat badan ideal
    document.getElementById("hasilBeratBadan").innerHTML = `Berat Badan Ideal: ${beratBadanIdeal.toFixed(2)} kg`;
}

function reset() {
    document.getElementById("inputTinggi").value='';
    document.getElementById("hasilBeratBadan").innerHTML='';

}