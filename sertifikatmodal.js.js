// Fungsi untuk membuka modal
function openModal(element) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = element.src; // Menampilkan gambar yang diklik
    captionText.innerHTML = element.alt; // Menampilkan caption gambar
}

// Fungsi untuk menutup modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// Function to filter gallery based on category
function filterGallery(category) {
    var items = document.querySelectorAll('.gallery-item');

    items.forEach(function (item) {
        if (category === 'all' || item.classList.contains(category)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Function to open modal
function openModal(element) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImage");
    var captionText = document.getElementById("caption");

    modal.style.display = "block";
    modalImg.src = element.src; // Display clicked image
    captionText.innerHTML = element.alt; // Display image description
}

// Function to close modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
