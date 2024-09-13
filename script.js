// menyimpan score ke localStorage
function saveScore(category, score) {
  localStorage.setItem(category, score);
}

// menghitung total skor untuk satu bidang
function handleFormSubmit(category, questions) {
  let totalScore = 0;

  question.forEach((questionName) => {
    const pertanyaan = document.querySelector(
      `input[name="${questionName}"]:checked`
    );

    let score = 0;
    if (pertanyaan) {
      score = parseInt(pertanyaan.value);
    }

    totalScore += score;
  });
}

// menyimpan total score untuk setiap bidang
saveScore(category, totalScore);

// mengarahkan ke halaman selesai
window.location.href = "selesai.html";