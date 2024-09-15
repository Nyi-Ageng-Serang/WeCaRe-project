function register(event) {
    event.preventDefault(); 
  
    // Ambil input username dan password
    const regUsername = document.getElementById("username").value;
    const regPassword = document.getElementById("password").value;
    const name = document.getElementById("name").value
  
    // Simpan data username dan password ke localStorage
    localStorage.setItem("username", regUsername);
    localStorage.setItem("password", regPassword);
    localStorage.setItem("name", name)
  
    // Tampilkan alert bahwa registrasi berhasil
    alert("Registrasi Berhasil. Silahkan Login!")
  
    // Redirect ke halaman login setelah registrasi berhasil
    setTimeout(() => {
      window.location.href = "login.html";
    }, 1000); 
  }
  
  // Tambahkan event listener untuk form register
  document.getElementById("register-form").addEventListener("submit", register);
  