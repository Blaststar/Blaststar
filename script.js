  // Set Age
  (function() {
    const now = new Date();
    const birth = new Date(2006, 8, 1); // 0-indexed
    let age = now.getFullYear() - birth.getFullYear();
    if (now < new Date(now.getFullYear(), 7, 1)) age--;
    document.getElementById('age-text').textContent = age;
  })();
 
  // News
  const news = [
    {
      date: "05/31/26",
      header: "Envision Development",
      description: "Currently working on Envision, hope to release relatively soon."
    },
    {
      date: "05/29/26",
      header: "Site Launched",
      description: "After 500 years finally got around to making personal website. Built in plain HTML/CSS."
    }
  ];
 
  const container = document.getElementById('news-container');
  container.innerHTML = news.map(item => `
    <div class="news-item">
      <div class="news-header-row">
        <span class="news-header">${item.header}</span>
        <span class="news-date">${item.date}</span>
      </div>
      <div class="news-desc">${item.description}</div>
    </div>
  `).join('');
 
  document.getElementById('socials-modal').addEventListener('click', function(e) {
    if (e.target === this) this.classList.remove('open');
  });
