const hamburger = document.querySelector("#sidelogo-btn");

hamburger.addEventListener("click", function() {
    document.querySelector("#sidebar").classList.toggle("expand");
});

//-------- FUNGSI UNTUK MELIHAT USER TELAH MENGIKUTI TEST ATAU BELUM PERNAH ---------- //
document.addEventListener('DOMContentLoaded', () => {
  // Memeriksa apakah pengguna telah menyelesaikan tes
  const isTestCompleted = localStorage.getItem('testCompleted') === 'true';
  
  // Mengambil elemen DOM untuk bagian tes dan pelatihan
  const takeTestSection = document.getElementById('takeTest');
  const trainingSection = document.getElementById('trainingSection');
  
  // Pastikan elemen yang diambil ada
  if (takeTestSection && trainingSection) {
    // Logika tampilan berdasarkan apakah pengguna telah menyelesaikan tes
    if (isTestCompleted) {
      takeTestSection.style.display = 'none'; // Sembunyikan bagian tes
      trainingSection.style.display = 'block'; // Tampilkan bagian pelatihan
      displayTrainingByCategory(); // Panggil fungsi untuk menampilkan pelatihan
    } else {
      takeTestSection.style.display = 'flex'; // Pastikan tampilan 'flex' jika belum mengikuti tes
      trainingSection.style.display = 'none'; // Sembunyikan bagian pelatihan
    }
  } else {
    console.error('Elemen #takeTest atau #trainingSection tidak ditemukan');
  }
});

// Menampilkan pelatihan berdasarkan kategori yang direkomendasikan
function displayTrainingByCategory() {
    const recommendedCategory = localStorage.getItem("recommendedCategory");

    if (!recommendedCategory) {
      console.error('No category selected');
      return;
    }

    let API = "https://66e3fab0d2405277ed1287b5.mockapi.io/api/dasboard/trainings";
    let listPelatihan = document.getElementById("list-pelatihan");
    let spinner = document.getElementById("loading-spinner"); // Ambil elemen spinner

    fetch(API)
      .then((response) => response.json())
      .then(result => {
        console.log(result); // Log respon API untuk memeriksa data
        let filteredData = result.filter(item => item.category === recommendedCategory);
        console.log(filteredData); // Log data yang sudah difilter
        
        // Tampilkan data yang sesuai
        listPelatihan.innerHTML = filteredData.map((item) => `
          <div class="col">
            <div class="card h-100">
              <img src="${item.image_url}" class="card-img-top" alt="...">
              <div class="card-body">
                <h3 class="card-title">${item.category}</h3>
                <p class="card-text">${item.level}</p>
                <p class="card-text">Provider : ${item.provider}</p>
                <a href="${item.registration_url}" class="buttonPelatihan">Lihat Lebih lanjut</a>
              </div>
            </div>
          </div>
        `).join('');
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      })
      .finally(() => {
        console.log("Fetching selesai, menghapus spinner");
        spinner.remove(); // Menghapus elemen spinner dari DOM
    });    
}