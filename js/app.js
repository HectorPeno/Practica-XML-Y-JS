document.addEventListener('DOMContentLoaded', function() {
    fetch('pelis.xml')
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "application/xml");

            const movies = xmlDoc.querySelectorAll('movie');
            const container = document.getElementById('movies-container');

            movies.forEach(movie => {
                const div = document.createElement('div');
                div.classList.add('movie');

                const img = document.createElement('img');
                img.src = movie.querySelector('image').textContent;
                div.appendChild(img);

                const info = document.createElement('div');
                info.classList.add('movie-info');

                const title = document.createElement('h3');
                title.textContent = movie.querySelector('title').textContent;
                info.appendChild(title);

                const director = document.createElement('p');
                director.textContent = `Director: ${movie.querySelector('director').textContent}`;
                info.appendChild(director);

                const duration = document.createElement('p');
                duration.textContent = `Duración: ${movie.querySelector('duration').textContent}`;
                info.appendChild(duration);

                div.appendChild(info);

                img.addEventListener('click', () => {
                    alert(`
                        Título: ${movie.querySelector('title').textContent}
                        Director: ${movie.querySelector('director').textContent}
                        Duración: ${movie.querySelector('duration').textContent}
                        Nacionalidad: ${movie.querySelector('nationality').textContent}
                        Actores: ${movie.querySelector('actors').textContent}
                        Género: ${movie.querySelector('genre').textContent}
                        Sinopsis: ${movie.querySelector('synopsis').textContent}
                    `);
                });

                container.appendChild(div);
            });
        });
});
