window.document.addEventListener('DOMContentLoaded', () => {
  const rowGrowdev = document.getElementById('row-growcast');
  const rowWebinar = document.getElementById('row-webinar');
  const rowUxUi = document.getElementById('row-ux-ui');
  const rowDiversos = document.getElementById('row-diversos');
  const modalBody = document.getElementById('iframe-modal');

  const growCast1 = document.getElementById('growcast1');

  growCast1.addEventListener('click', () => {
      modalBody.innerHTML = `
      <iframe src="https://www.youtube.com/embed/7OWT3lfHYvE" frameborder="0" class="iframe"></iframe>
      `
  })

  movies.forEach((movie) => {
      if (movie.category == 'growcast') {
          construirCard(movie, rowGrowdev)
      };
      if (movie.category == 'webinar') {
          construirCard(movie, rowWebinar)
      };
      if (movie.category == 'ux-ui') {
          construirCard(movie, rowUxUi)
      };
      if (movie.category == 'geral') {
          construirCard(movie, rowDiversos)
      };
  });

  const moviesCards = document.querySelectorAll('.hover-container')

  for (const movie of moviesCards) {
      const paragraph = movie.querySelector('p');

      movie.addEventListener('mouseover', () => {
          movie.setAttribute('class','img-fluid hover-container hover');
          paragraph.setAttribute('class', '')
      });
      movie.addEventListener('mouseout', () => {
          movie.setAttribute('class','img-fluid hover-container');
          paragraph.setAttribute('class', 'visually-hidden');
      });

      movie.addEventListener('click', (event)=> {
          const movieLink = movie.id

          modalBody.innerHTML = `
          <iframe src="${movieLink}" frameborder="0" class="iframe"></iframe>
          `
      });
  };

  
});

function construirCard (movie, row) {
  const newCol = document.createElement('div');
  newCol.setAttribute('class', 'col-12 col-sm-6 col-md-3');

  const newContainer = document.createElement('div');
  newContainer.setAttribute('class', 'container-fluid hover-container');
  newContainer.setAttribute('data-bs-toggle', 'modal');
  newContainer.setAttribute('data-bs-target', '#modal-video')
  newContainer.setAttribute('id', `${movie.link}`);

  const newImg = document.createElement('img');
  newImg.setAttribute('class', 'img-fluid');
  newImg.setAttribute('src', `${movie.img}`);
  newImg.setAttribute('alt', `Picture = ${movie.title}`);

  const newDescricao = document.createElement('p');
  newDescricao.setAttribute('class', 'visually-hidden');

  newDescricao.innerHTML = `
      <i class="bi bi-play-circle-fill"></i> ${movie.title}
  `

  newContainer.appendChild(newImg)
  newContainer.appendChild(newDescricao)
  newCol.appendChild(newContainer)
  row.appendChild(newCol)
};