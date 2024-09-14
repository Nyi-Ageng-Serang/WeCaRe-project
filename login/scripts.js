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

  // Mengecek apakah username dan password cocok dengan data yang ada
  if (
    inputUsername === loginData.username &&
    inputPassword === loginData.password
  ) {
    alert("Login berhasil!");
    window.location.href = "../indeks.html";
  } else {
    alert("Username atau password salah!");
  }
}

function register(e) {
    e.preventDefault();

}

document.querySelector("form").addEventListener("submit", login);
document.querySelector("form").addEventListener("submit", register);
