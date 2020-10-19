const imageNames = ['IMG_2663.JPG', 'IMG_2664.JPG', 'IMG_2785.JPG', 'IMG_2787.JPG', 'IMG_2788.JPG', 'IMG_2789.JPG', 'IMG_2791.JPG', 'IMG_2792.JPG', 'IMG_2794.JPG', 'IMG_2796.JPG', 'IMG_2797.JPG', 'IMG_2799.JPG', 'IMG_2801.JPG', 'IMG_2802.JPG', 'IMG_2803.JPG', 'IMG_2806.JPG', 'IMG_2815.JPG', 'IMG_2816.JPG', 'IMG_2817.JPG', 'IMG_2819.JPG', 'IMG_2820.JPG', 'IMG_2821.JPG'];

window.onscroll = () => {
  if (window.pageYOffset > (window.innerHeight * 0.70)) {
    document.getElementById('header').style.background = 'rgba(0, 0, 0, 1)';
  } else {
    document.getElementById('header').style.background = 'rgba(0, 0, 0, 0.5)';
  }
};

function loadImages() {
  imageNames.forEach((imgName) => {
    // small image & btn
    const img = document.createElement('img');
    img.src = `./showcase/${imgName}`;
    img.className = 'showcase-img';

    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'showcase-btn';
    btn.appendChild(img);

    // overlay
    const overlayIMG = document.createElement('img');
    overlayIMG.src = `./showcase/${imgName}`;
    overlayIMG.className = 'showcase-img-large';

    const overlayX = document.createElement('i');
    overlayX.className = 'fas fa-times-circle x-btn fa-7x';

    const overlayBTN = document.createElement('button');
    overlayBTN.type = 'button';
    overlayBTN.className = 'showcase-overlay';

    overlayBTN.appendChild(overlayIMG);
    overlayBTN.appendChild(overlayX);

    btn.addEventListener('click', () => {
      overlayBTN.style.display = 'flex';
    });

    overlayBTN.addEventListener('click', () => {
      overlayBTN.style.display = 'none';
    });

    document.getElementById('showcase-grid').appendChild(overlayBTN);
    document.getElementById('showcase-grid').appendChild(btn);
  });
}
