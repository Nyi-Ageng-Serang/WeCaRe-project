const hamburger = document.querySelector("#sidelogo-btn");

hamburger.addEventListener("click", function() {
    document.querySelector("#sidebar").classList.toggle("expand");
});

//-------- FUNGSI UNTUK MELIHAT USER TELAH MENGIKUTI TEST ATAU BELUM PERNAH ---------- //
document.addEventListener('DOMContentLoaded', () => {
    // Memeriksa apakah pengguna telah melakukan tes
    const testCompleted = localStorage.getItem('testCompleted') === 'true';
    
    if (testCompleted) {
        // Tampilkan pelatihan berdasarkan kategori yang direkomendasikan
        document.getElementById('takeTest').style.display = 'none';
        document.getElementById('trainingSection').style.display = 'block';
        displayTrainingByCategory(); // Panggil fungsi untuk menampilkan pelatihan
    } else {
        // Tampilkan bagian untuk melakukan tes
        document.getElementById('takeTest').style.display = 'block';
        document.getElementById('trainingSection').style.display = 'none';
    }
});


// FUNGSI UNTUK MENENTUKAN NILAI TERTINGGI DAN KATEGORI YANG MASUK
// Menyimpan skor ke localStorage
function saveScore(category, score) {
    localStorage.setItem(category, score);
}

// Menghitung total skor untuk setiap bidang freelance
function handleFormSubmit(category, questions) {
    // Inisialisasi total score
    let totalScore = 0;
  
    // Ambil jawaban yang dipilih untuk setiap pertanyaan
    questions.forEach((questionName) => {
      const pertanyaan = document.querySelector(`input[name="${questionName}"]:checked`);
      let score = 0;
      if (pertanyaan) {
        score = parseInt(pertanyaan.value);
      }
      totalScore += score;
    });
  
    // Menyimpan total score ke localStorage
    saveScore(category, totalScore);
  
    // Arahkan ke halaman selesai
    window.location.href = "selesai.html";
}
  
// Menghitung dan menampilkan rekomendasi dari hasil total score
function calculateTotalScore() {
    const scoreMedsos = parseInt(localStorage.getItem("scoreMedsos")) || 0;
    const scoreAffiliate = parseInt(localStorage.getItem("scoreAffiliate")) || 0;
    const scoreDesign = parseInt(localStorage.getItem("scoreDesign")) || 0;
    const scoreWrite = parseInt(localStorage.getItem("scoreWrite")) || 0;
  
    // Mencari nilai tertinggi dari setiap bidang freelance
    const scores = {
      "Content CopyWriting": scoreWrite,
      "Graphic Design": scoreDesign,
      "Affiliate Marketing": scoreAffiliate,
      "Digital Marketing": scoreMedsos
    };
  
    const highestCategory = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
  
    // Menyimpan kategori tertinggi di localStorage atau menggunakan variabel global
    localStorage.setItem("recommendedCategory", highestCategory);
  
    // Menampilkan hasil di halaman selesai
    const result = document.getElementById("result");
    if (result) {
      result.innerHTML = `<p>Berdasarkan hasil tes, kamu memiliki minat dan bakat yang kuat dalam ${highestCategory}.<p>`;
    }
}
  
// Menampilkan pelatihan berdasarkan kategori yang direkomendasikan
function displayTrainingByCategory() {
    const recommendedCategory = localStorage.getItem("recommendedCategory");
  
    if (!recommendedCategory) {
      console.error('No category selected');
      return;
    }
  
    let API = "https://66e3fab0d2405277ed1287b5.mockapi.io/api/dasboard/trainings";
    let listPelatihan = document.getElementById("list-pelatihan");
  
    fetch(API)
      .then((response) => response.json())
      .then(result => {
        // Filter data berdasarkan kategori yang ditentukan
        let filteredData = result.filter(item => item.category === recommendedCategory);
  
        // Tampilkan data yang sesuai
        listPelatihan.innerHTML = filteredData.map((item) => `
          <div class="col">
            <div class="card h-100">
              <img src="${item.image_url}" class="card-img-top" alt="...">
              <div class="card-body">
                <h3 class="card-title">${item.category}</h3>
                <p class="card-text">${item.level}</p>
                <a href="${item.registration_url}" class="buttonPelatihan">Lihat Lebih lanjut</a>
              </div>
            </div>
          </div>
        `).join('');
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
}
  



// API untuk Menampilkan Pelatihan kontainer
// let API = "https://66e3fab0d2405277ed1287b5.mockapi.io/api/dasboard/trainings"

// let listPelatihan = document.getElementById("list-pelatihan")

// fetch(API)
// .then((respons) => respons.json())
// .then(result => {
//     result.map((item) => {
//         listPelatihan.innerHTML += `
//         <div class="col">
//               <div class="card h-100">
//                 <img src="${item.image_url}" class="card-img-top" alt="...">
//                 <div class="card-body">
//                   <h3 class="card-title">${item.category}</h3>
//                   <p class="card-text">${item.level}</p>
//                   <a href="${item.registration_url}" class="buttonPelatihan">Lihat Lebih lanjut</a>
//                 </div>
//               </div>
//         </div>
//         `
//     })
// })
// .catch((error) => {
//     console.error('Error fetching data:', error);
// });