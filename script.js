fetch('counties.json')
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById('county-list');
    data.forEach(county => {
      const div = document.createElement('div');
      div.className = 'county';
      div.innerHTML = `<strong>${county.name}</strong>`;
      const details = document.createElement('div');
      details.className = 'county-details';
      details.innerHTML = `
        <p><a href="${county.website}" target="_blank">${county.website}</a></p>
        <p>Phone: ${county.phone}</p>
        <p>Address: ${county.address}</p>
        <p>${county.notes}</p>
      `;
      div.addEventListener('click', () => {
        details.style.display = details.style.display === 'block' ? 'none' : 'block';
      });
      container.appendChild(div);
      container.appendChild(details);
    });
  });
