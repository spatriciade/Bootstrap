 $(document).ready(function () {
     $(".owl-carousel").owlCarousel({
         items: 1,
         loop: true,
         autoplay: true,
         autoplayTimeout: 5000,
     });
 });

 const citas = [
    "Your website is the center of your digital ecosystem, like a brick and mortar location, the experience matters once a customer enters, just as much as the perception they have of you before they walk through the door. - Leland Dieno",
    "Websites promote you 24/7: No employee will do that. - Paul Cookson",
    "A designer knows he has achieved perfection not when there is nothing left to add, but when there is nothing left to take away. - Antoine de Saint-Exupéry"
];

const citaAleatoria = citas[Math.floor(Math.random() * citas.length)];
document.getElementById('cita').innerText = citaAleatoria;