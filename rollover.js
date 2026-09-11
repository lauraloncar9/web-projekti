function swapSlika() {
    let slika = document.getElementById("swapSlika");
    if (slika.src.includes("slika1.jpg")) {
        slika.src = "6swap.jpg";
    } else {
        slika.src = "6.jpg";
    }
}