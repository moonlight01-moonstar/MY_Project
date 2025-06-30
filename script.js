function afficherPage(nomPage) {
  const pages = ['accueil', 'peluches', 'accessoires', 'vetements', 'jouets'];
  
  // Affiche uniquement la section correspondant à la page demandée
  pages.forEach(id => {
    const section = document.getElementById(id);
    if (section) {
      section.style.display = (id === nomPage) ? 'block' : 'none';
    }
  });

  // Affiche ou cache la section .contact
  const contactSection = document.querySelector('.contact');
  if (contactSection) {
    contactSection.style.display = (nomPage === 'accueil') ? 'block' : 'none';
  }

  // Affiche les blocs normaux (pas besoin de les cacher selon les pages)
  const blocs = document.querySelectorAll('.categorie-bloc');
  blocs.forEach(bloc => {
    bloc.style.display = 'inline-block'; // ou 'block' selon ton design
  });
}

function retourAccueil() {
  afficherPage('accueil');
}

window.onload = () => {
  afficherPage('accueil');
};

// Cible toutes les images sauf celles avec .no-zoom
document.querySelectorAll('img:not(.no-zoom)').forEach(img => {
  img.addEventListener('click', () => {
    const zoomOverlay = document.getElementById('zoomOverlay');
    const zoomedImg = document.getElementById('zoomedImg');
    zoomedImg.src = img.src;
    zoomOverlay.classList.remove('hidden');
  });
});
// Fermer l’image quand on clique sur la croix
document.getElementById('closeZoom').addEventListener('click', () => {  document.getElementById('zoomOverlay').classList.add('hidden');
});
// Fermer si on clique en dehors de l’image
document.getElementById('zoomOverlay').addEventListener('click', (e) => {
  if (e.target.id === 'zoomOverlay') {   document.getElementById('zoomOverlay').classList.add('hidden');
  }
});