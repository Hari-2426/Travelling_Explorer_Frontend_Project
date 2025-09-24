// Click navigation
function addHoverClick(id, url) {
  const el = document.getElementById(id);
  el.addEventListener("click", () => {
    if(url && url !== "#") window.location.href = url;
  });
}

// South India
addHoverClick("ap","Andhra.html");
addHoverClick("ts","Telangana.html");
addHoverClick("ka","Karnataka.html");
addHoverClick("tn","TamilNadu.html");
addHoverClick("kl","Kerala.html");

// North India
addHoverClick("jk","JammuAndKashmir.html");
addHoverClick("hp","HimachalPradesh.html");
addHoverClick("up","UttarPradesh.html");
addHoverClick("uk","Uttarakhand.html");
addHoverClick("rj","Rajasthan.html");

// Staggered fade-slide on load
window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.style.opacity = '1';
      card.style.transform = 'translateY(0) rotateX(0deg) rotateY(0deg)';
    }, index * 150);

    // Interactive card rotation
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left; // mouse X within card
      const y = e.clientY - rect.top;  // mouse Y within card
      const centerX = rect.width/2;
      const centerY = rect.height/2;
      const rotateX = ((y - centerY) / centerY) * 10; // max 10deg
      const rotateY = ((x - centerX) / centerX) * 10; // max 10deg
      card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.07)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
    });
  });
});

// Parallax scroll background
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  document.body.style.backgroundPosition = `center ${scrollTop * 0.3}px`;
});
