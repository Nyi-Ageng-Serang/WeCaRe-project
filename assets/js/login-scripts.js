const loginData = {
  username: "user",
  password: "12345",
};

// Fungsi login
function login(event) {
  event.preventDefault(); // Mencegah form di-submit

  // Mengambil nilai input username dan password
  const inputUsername = document.getElementById("username").value;
  const inputPassword = document.getElementById("password").value;

  // Mengambil elemen alert
  const alertBox = document.getElementById("login-alert");

  // Mengecek apakah username dan password cocok dengan data yang ada
  if (inputUsername === loginData.username && inputPassword === loginData.password) {
    // Menyembunyikan alert jika login berhasil
    alertBox.classList.add("d-none");

    alert("Login berhasil!");
    window.location.href = "../index.html";
  } else {
    // Menampilkan alert jika login gagal
    alertBox.classList.remove("d-none");
  }
}

function register(e) {
  e.preventDefault();
}

// Menambahkan event listener ke form
document.getElementById("login-form").addEventListener("submit", login);
