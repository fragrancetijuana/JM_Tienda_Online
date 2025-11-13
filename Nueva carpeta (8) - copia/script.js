function openPujas(){ document.getElementById('modalPujas').style.display='flex'; }
function closePujas(){ document.getElementById('modalPujas').style.display='none'; }
function openLogin(){ document.getElementById('modalLogin').style.display='flex'; }
function closeLogin(){ document.getElementById('modalLogin').style.display='none'; }
function goRegister(){ document.getElementById('loginBox').style.display='none'; document.getElementById('registerBox').style.display='block'; }
function goLogin(){ document.getElementById('loginBox').style.display='block'; document.getElementById('registerBox').style.display='none'; }
function loginWithGoogle() {
  // Esto redirige al login real de Google OAuth (ejemplo genérico)
  window.location.href = "https://accounts.google.com/o/oauth2/auth";
}
