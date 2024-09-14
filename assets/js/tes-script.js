// menyimpan score ke localStorage
function saveScore(category, score) {
  localStorage.setItem(category, score);
}

// menghitung total skor untuk setiap bidang freelance
function handleFormSubmit(category, questions) {
  
  // inisialisasi total score
  let totalScore = 0;

  // ambil jawaban yang dipilih untuk setiap pertanyaan
  questions.forEach((questionName) => {
    const pertanyaan = document.querySelector(
      `input[name="${questionName}"]:checked`
    );

    let score = 0;
    if (pertanyaan) {
      score = parseInt(pertanyaan.value);
    }

    totalScore += score;
  });

  // menyimpan total score ke localstorage
  saveScore(category, totalScore);

  // arahkan ke halaman selesai
  window.location.href = "selesai.html";
}

//menghitung dan menampilkan rekomendasi dari hasil total score
function calculateTotalScore() {
  const scoreMedsos = parseInt(localStorage.getItem("scoreMedsos"));
  const scoreAffiliate = parseInt(localStorage.getItem("scoreAffiliate"));
  const scoreDesign = parseInt(localStorage.getItem("scoreDesign"));
  const scoreWrite = parseInt(localStorage.getItem("scoreWrite"));
 
  
  let rekomendasi = "";
  // mencari nilai tertingi dari setiap bidang freelance
  const hightScore = Math.max(
    scoreMedsos,
    scoreAffiliate,
    scoreDesign,
    scoreWrite
  );

  //menentukan rekomendasi dari total score tertinggi
  if (hightScore === scoreMedsos) {
    rekomendasi =
      "Berdasarkan hasil tes, kamu memiliki minat dan bakat yang kuat dalam mengelola media sosial. Pertimbangkan untuk mempelajari lebih lanjut tentang manajemen akun media sosial, pembuatan konten, dan strategi pemasaran digital. kamu dapat mulai dengan kursus online atau bergabung dengan komunitas profesional di bidang ini";
  } else if (hightScore === scoreAffiliate) {
    rekomendasi =
      "kamu tampaknya memiliki minat dalam affiliate marketing. Pelajari lebih lanjut tentang strategi pemasaran afiliasi, bagaimana memilih produk yang tepat, dan memanfaatkan media sosial serta blog untuk mempromosikan produk. Kursus online dapat membantu kamu memahami lebih dalam tentang bidang ini";
  } else if (hightScore === scoreDesign) {
    rekomendasi =
      "Hasil tes kamu menunjukkan bahwa kamu memiliki minat yang tinggi dalam desain grafis. Canva adalah alat yang sangat baik untuk memulai. Pertimbangkan untuk mengambil kursus desain grafis dan berlatih membuat berbagai materi visual untuk meningkatkan keterampilan kamu.";
  } else if (hightScore === scoreWrite) {
    rekomendasi =
      "kamu menunjukkan minat yang besar dalam menulis konten. Mulailah dengan menulis artikel, blog, atau konten untuk situs web. Pertimbangkan untuk mengikuti kursus menulis atau bergabung dengan kelompok penulis untuk mendapatkan umpan balik dan meningkatkan keterampilan kamu.";
  }

  //menampilkan hasil di halaman selesai
  const result = document.getElementById("result");

  if (result) {
    result.innerHTML = `
    <p>${rekomendasi}<p>`;
  }
}
