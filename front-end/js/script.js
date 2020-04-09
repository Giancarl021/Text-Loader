function init() {
    const span = document.querySelector('span');
    span.innerHTML = html;
    span.setAttribute('contenteditable', isEditable);
}

document.addEventListener('DOMContentLoaded', init);