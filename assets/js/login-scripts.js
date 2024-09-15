const loginData = {
  username: localStorage.getItem("username"),
  password: localStorage.getItem("password"),
};

// Fungsi login
function login(event) {
  event.preventDefault(); 

  // Ambil input username dan password
  const inputUsername = document.getElementById("username").value;
  const inputPassword = document.getElementById("password").value;

  // Ambil elemen alert
  const alertBox = document.getElementById("login-alert");

  // Cek apakah username dan password cocok
  if (inputUsername === loginData.username && inputPassword === loginData.password) {
    // Sembunyikan alert jika login berhasil
    alertBox.classList.add("d-none");
    alert("Login berhasil!");
    window.location.href = "../index.html"; // Arahkan ke halaman utama
  } else {
    // Tampilkan alert jika login gagal
    alertBox.classList.remove("d-none");
  }
}

// Tambahkan event listener untuk form login
document.getElementById("login-form").addEventListener("submit", login);
