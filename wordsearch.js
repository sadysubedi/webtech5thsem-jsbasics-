function searchWord() {
    const input = document.getElementById('searchInput').value.trim();
    const paragraphBox = document.getElementById('paragraph-box');
    const originalText = paragraphBox.textContent;

   
    paragraphBox.innerHTML = originalText;

    if (input === '') {
        alert('Please enter a word to search.');
        return;
    }

    const regex = new RegExp(`(${input})`, 'gi');
    const highlightedText = originalText.replace(regex, '<span class="highlight">$1</span>');

    paragraphBox.innerHTML = highlightedText;
}

function clearHighlight() {
    const paragraphBox = document.getElementById('paragraph-box');
    paragraphBox.innerHTML = paragraphBox.textContent;
    document.getElementById('searchInput').value = '';
}