// Minimal interactions: reservation form handling + year in footer
document.addEventListener('DOMContentLoaded', function(){
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  const form = document.getElementById('reservationForm');
  const msg = document.getElementById('reserveMsg');

  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      // simple fake submit — replace with real API call or form handler
      msg.textContent = 'Sending reservation request…';
      setTimeout(()=>{
        msg.textContent = 'Reservation request received. We will email you within 24 hours to confirm.';
        form.reset();
      }, 900);
    });
  }
});