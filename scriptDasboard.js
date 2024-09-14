const hamburger = document.querySelector("#sidelogo-btn");

hamburger.addEventListener("click", function() {
    document.querySelector("#sidebar").classList.toggle("expand");
});

//-------- FUNGSI UNTUK MELIHAT USER TELAH MENGIKUTI TEST ATAU BELUM PERNAH ---------- //
document.addEventListener('DOMContentLoaded', () => {
  // Memeriksa apakah pengguna telah melakukan tes
  const testCompleted = localStorage.getItem('testCompleted') === 'true';
  
  const takeTestSection = document.getElementById('takeTest');
  const trainingSection = document.getElementById('trainingSection');
  
  if (testCompleted) {
      takeTestSection.style.display = 'none';
      trainingSection.style.display = 'block';
      displayTrainingByCategory(); // Panggil fungsi untuk menampilkan pelatihan
  } else {
      takeTestSection.style.display = 'flex';  // memaastikan display tetap 'flex'
      trainingSection.style.display = 'none';
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