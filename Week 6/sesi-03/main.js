
const cards = document.querySelectorAll(".card");

cards.forEach(function (card) {
    const detail = card.querySelector(".detail");
    const tombol = card.querySelector("a");

    detail.style.display = "none";

    tombol.addEventListener("click", function (event) {
        event.preventDefault();

        alert(detail.textContent.trim());
    });
});

const formCatatan = document.querySelector("#formCatatan");
const inputPesan = document.querySelector("#pesan");
const pesanHasil = document.querySelector("#pesanHasil");

formCatatan.addEventListener("submit", function (event) {
    event.preventDefault();

    const pesan = inputPesan.value.trim();

    if (pesan === "") {
        pesanHasil.textContent = "Pesan tidak boleh kosong!";
        return;
    }

    pesanHasil.textContent = "Pesan berhasil dikirim: " + pesan;

    inputPesan.value = "";
});


