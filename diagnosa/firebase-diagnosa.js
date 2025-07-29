// Fungsi untuk menyimpan hasil diagnosa ke Firebase
function simpanDiagnosaKeFirebase(diagnosa) {
    try {
        // Dapatkan timestamp saat ini
        const timestamp = new Date().toISOString();
        
        // Buat referensi ke lokasi penyimpanan
        const diagnosaRef = database.ref('diagnosa').push();
        
        // Data yang akan disimpan
        const diagnosaData = {
            gejala: diagnosa.nama,
            deskripsi: diagnosa.deskripsi,
            solusi: diagnosa.solusi,
            timestamp: timestamp,
            ipAddress: "0.0.0.0" // Dalam implementasi nyata bisa diambil dari request
        };
        
        // Simpan ke Firebase
        diagnosaRef.set(diagnosaData)
            .then(() => console.log('Diagnosa berhasil disimpan ke Firebase'))
            .catch(error => console.error('Error menyimpan diagnosa:', error));
    } catch (error) {
        console.error('Error dalam fungsi simpanDiagnosaKeFirebase:', error);
    }
}

// Fungsi untuk membaca histori diagnosa dari Firebase
function bacaHistoriDiagnosa(callback) {
    try {
        const diagnosaRef = database.ref('diagnosa');
        
        diagnosaRef.once('value')
            .then(snapshot => {
                const data = snapshot.val();
                callback(data);
            })
            .catch(error => {
                console.error('Error membaca data:', error);
                callback(null, error);
            });
    } catch (error) {
        console.error('Error dalam fungsi bacaHistoriDiagnosa:', error);
        callback(null, error);
    }
}

// Contoh penggunaan:
// bacaHistoriDiagnosa((data, error) => {
//     if (error) {
//         console.error('Gagal membaca data:', error);
//         return;
//     }
//     console.log('Data histori:', data);
// });
