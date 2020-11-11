const cards = document.querySelectorAll('.card');
const dropzones = document.querySelectorAll('.dropzone')

cards.forEach(card => {
    card.addEventListener('dragstart',dragstart)
    card.addEventListener('dragend',dragend)
})

function dragstart(){
    dropzones.forEach(dropzone => dropzone.classList.add('highlight'))

    this.classList.add('is-dragging')
} 

function dragend(){
    dropzones.forEach(dropzone => dropzone.classList.remove('highlight'))

    this.classList.remove('is-dragging')
}

//place where cards will be dropped
dropzones.forEach(dropzone => {
    dropzone.addEventListener('dragover',dragover)
    dropzone.addEventListener('dragleave',dragleave)
    dropzone.addEventListener('drop',drop)
})

function dragover(){
    this.classList.add('over')

    //Get Dragging Card
    const $cardDragging = document.querySelector('.is-dragging')

    this.appendChild($cardDragging);
}

function dragleave(){
    this.classList.remove('over')
    // log('Dropzone :  Leave')
}

function drop(){
    // log('Dropzone : Dropped')
    this.classList.remove('over')
}


