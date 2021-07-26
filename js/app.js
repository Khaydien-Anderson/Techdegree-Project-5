baguetteBox.run('.gallery');
//const search = new Filter('search', 'data-caption');
const search = document.querySelector( '#search' )

const captionss = document.querySelectorAll( '.gallery a' )

const handleSearch = event => {
    const searchTerm = event.target.value.toLowerCase();

    captionss.forEach(caption => {
const text = caption.textContent.toLowerCase();
const pic = caption.parentElement;

if (text.includes(searchTerm)) {
    pic.style.display = "block";
} else {
    pic.style.display = "none"
}
    });
}

search.addEventListener('keyup', handleSearch);