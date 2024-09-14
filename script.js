const hamburger = document.querySelector("#sidelogo-btn");

hamburger.addEventListener("click", function() {
    document.querySelector("#sidebar").classList.toggle("expand");
});


// Cek apakah user sudah melakukan tes
document.addEventListener('DOMContentLoaded', function() {
    const takeTestSection = document.querySelector('.takeTest');
    
    // Cek status tes di localStorage
    const hasTakenTest = localStorage.getItem('testTaken');
    
    // Jika user sudah melakukan tes, sembunyikan section takeTest
    if (hasTakenTest === 'true') {
        takeTestSection.style.display = 'none';
    }
});

// Fungsi yang dijalankan setelah user melakukan tes
function completeTest() {
    // Setel status tes di localStorage
    localStorage.setItem('testTaken', 'true');
    
    // Redirect atau update UI
    alert('Tes sudah selesai, kamu bisa melihat hasilnya!');
    // Kamu bisa mengarahkan user ke halaman lain atau melakukan tindakan lain di sini.
}

