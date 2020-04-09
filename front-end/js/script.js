function init() {
    const span = document.querySelector('span');
    span.innerText = text;
    span.setAttribute('contenteditable', isEditable);
}

document.addEventListener('DOMContentLoaded', init);