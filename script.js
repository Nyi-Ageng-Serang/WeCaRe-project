// menyimpan score ke localStorage
function saveScore(category, score) {
  localStorage.setItem(category, score);
}

// menghitung total skor untuk satu bidang
function handleFormSubmit(category, questions) {
  let totalScore = 0;

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

  // menyimpan total score untuk setiap bidang
  saveScore(category, totalScore);

  // mengarahkan ke halaman selesai
  window.location.href = "selesai.html";
}

//menghitung total score keseluruhan
function calculateTotalScore() {
  const scoreMedsos = parseInt(localStorage.getItem("scoreMedsos")) || 0;
  const scoreAffiliate = parseInt(localStorage.getItem("scoreAffiliate")) || 0;
  const scoreDesign = parseInt(localStorage.getItem("scoreDesign")) || 0;
  const scoreWrite = parseInt(localStorage.getItem("scoreWrite")) || 0;

  //menentukan rekomendasi
  let rekomendasi = "";
  const hightScore = Math.max(
    scoreMedsos,
    scoreAffiliate,
    scoreDesign,
    scoreWrite
  );

  if (hightScore === scoreMedsos) {
    rekomendasi = "kamu cocok menjadi admin media sosial";
  } else if (hightScore === scoreAffiliate) {
    rekomendasi = "kamu cocok dalam bidang Affiliate";
  } else if (hightScore === scoreDesign) {
    rekomendasi = "kamu cocok dalam bidang freelance graphic design";
  } else if (hightScore === scoreWrite) {
    rekomendasi = "kamu cocok sebagai freelance content writer";
  }

  //menampilkan hasil di halaman selesai
  const result = document.getElementById("result");

  if (result) {
    result.innerHTML = `<h2>${rekomendasi}<h2>`;
  }
}
