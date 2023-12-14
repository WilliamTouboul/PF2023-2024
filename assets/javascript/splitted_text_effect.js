function splitText(text) {
    return text.split('').map(char => {
        if (char === ' ') {
            return '<span>&nbsp;</span>';
        } else {
            return `<span>${char}</span>`;
        }
    }).join('');
}


let splitting = document.querySelectorAll('.will_split');
splitting.forEach(element => {
    element.innerHTML = splitText(element.textContent);
})


