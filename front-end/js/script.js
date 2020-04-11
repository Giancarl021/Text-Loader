function init() {
    const span = document.querySelector('span');
    span.innerHTML = html;
    span.setAttribute('contenteditable', isEditable);

    if (isEditable) {
        span.onfocus = function () {
            this.innerHTML = this.innerHTML
                .replace(/<mark>/g, '{')
                .replace(/<\/mark>/g, '}');
        }
        span.onblur = function () {
            this.innerHTML = this.innerHTML
                .replace(/{/g, '<mark>')
                .replace(/}/g, '</mark>');
        }
    }
}

document.addEventListener('DOMContentLoaded', init);