// Form handling
document.getElementById('voteForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const sport = document.getElementById('sport').value;
  
    if (!email || !sport) {
      alert('Please fill in all fields!');
      return;
    }
  
    document.getElementById('voteResult').innerText =
      `Thank you for voting for ${sport}, ${email}!`;
    this.reset();
  });
  
  // Contact info toggle
  document.getElementById('revealBtn').addEventListener('click', function () {
    const contactInfo = document.getElementById('contactInfo');
    contactInfo.style.display = contactInfo.style.display === 'none' ? 'block' : 'none';
  });
  