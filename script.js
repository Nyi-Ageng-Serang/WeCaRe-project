const hamburger = document.querySelector("#sidelogo-btn");

hamburger.addEventListener("click", function() {
    document.querySelector("#sidebar").classList.toggle("expand");
});

// API untuk Menampilkan Pelatihan kontainer
let API = "https://66e3fab0d2405277ed1287b5.mockapi.io/api/dasboard/trainings"

let listPelatihan = document.getElementById("list-pelatihan")

fetch(API)
.then((respons) => respons.json())
.then(result => {
    result.map((item) => {
        listPelatihan.innerHTML += `
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
        `
    })
})
.catch((error) => {
    console.error('Error fetching data:', error);
});








// // Cek apakah user sudah melakukan tes
// document.addEventListener('DOMContentLoaded', function() {
//     const takeTestSection = document.querySelector('.takeTest');
    
//     // Cek status tes di localStorage
//     const hasTakenTest = localStorage.getItem('testTaken');
    
//     // Jika user sudah melakukan tes, sembunyikan section takeTest
//     if (hasTakenTest === 'true') {
//         takeTestSection.style.display = 'none';
//     }
// });

// // Fungsi yang dijalankan setelah user melakukan tes
// function completeTest() {
//     // Setel status tes di localStorage
//     localStorage.setItem('testTaken', 'true');
    
//     // Redirect atau update UI
//     alert('Tes sudah selesai, kamu bisa melihat hasilnya!');
//     // Kamu bisa mengarahkan user ke halaman lain atau melakukan tindakan lain di sini.
// }