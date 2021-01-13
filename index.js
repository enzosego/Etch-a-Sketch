const parent = document.querySelector('#parent-cont');
const eraseBtn = document.querySelector('#erase')


const container = document.createElement('section');
container.id = 'container';
parent.appendChild(container);

for (let i = 1; i <= 576; i++) {
    const newTile = document.createElement('div');
    newTile.classList.add('tile');
    newTile.id = [i];
    container.appendChild(newTile);
}
    
container.style.gridTemplateColumns = 'repeat(24,20px)';
container.style.gridTemplateRows = 'repeat(24, 20px)';

const smallBtn = document.querySelector('#small');
const midBtn = document.querySelector('#medium');
const bigBtn = document.querySelector('#big');

smallBtn.addEventListener('click', function() {

    const oldCont = document.getElementById('container');
    oldCont.remove();

    const newContainer = document.createElement('section');
    newContainer.id = 'container';
    parent.appendChild(newContainer);

    for (let i = 1; i <= 576; i++) {
        const newTile = document.createElement('div');
        newTile.classList.add('tile');
        newTile.id = [i];
        newContainer.appendChild(newTile);
    }
    newContainer.style.gridTemplateColumns = 'repeat(24,20px)';
    newContainer.style.gridTemplateRows = 'repeat(24, 20px)'; 
    
    const tiles = document.querySelectorAll('div');

    tiles.forEach((div) => {
        div.addEventListener('mouseover', function(e) {
        e.target.style.background = '#'+Math.floor(Math.random()*16777215).toString(16);
    });
});


});

midBtn.addEventListener('click', function() {
    
    const oldCont = document.getElementById('container');
    oldCont.remove();

    const newContainer = document.createElement('section');
    newContainer.id = 'container';
    parent.appendChild(newContainer);

    for (let i = 1; i <= 2304; i++) {
    const newTile = document.createElement('div');
    newTile.classList.add('tile');
    newTile.id = [i];
    newContainer.appendChild(newTile);
    }
    newContainer.style.gridTemplateColumns = 'repeat(48,10px)';
    newContainer.style.gridTemplateRows = 'repeat(48, 10px)';

    const tiles = document.querySelectorAll('div');

    tiles.forEach((div) => {
        div.addEventListener('mouseover', function(e) {
            e.target.style.background = '#'+Math.floor(Math.random()*16777215).toString(16);
        });
    });

});

bigBtn.addEventListener('click', function() {
    
    const oldCont = document.getElementById('container');
    oldCont.remove();

    const newContainer = document.createElement('section');
    newContainer.id = 'container';
    parent.appendChild(newContainer);

    for (let i = 1; i <= 6400; i++) {
    const newTile = document.createElement('div');
    newTile.classList.add('tile');
    newTile.id = [i];
    newContainer.appendChild(newTile);
    }
    newContainer.style.gridTemplateColumns = 'repeat(80,6px)';
    newContainer.style.gridTemplateRows = 'repeat(80, 6px)';

    const tiles = document.querySelectorAll('div');

    tiles.forEach((div) => {
        div.addEventListener('mouseover', function(e) {
            e.target.style.background = '#'+Math.floor(Math.random()*16777215).toString(16);
        });
    });
})

const tiles = document.querySelectorAll('div');

tiles.forEach((div) => {
    div.addEventListener('mouseover', function(e) {
        e.target.style.background = '#'+Math.floor(Math.random()*16777215).toString(16);
    });
});
