document.addEventListener('DOMContentLoaded', function () {
    // Product array
    const products = [
        {
            id: "fc-1888",
            name: "flux capacitor",
            avgRating: 4.5
        },
        {
            id: "fc-2050",
            name: "power laces",
            avgRating: 4.7
        },
        {
            id: "fs-1987",
            name: "time circuits",
            avgRating: 3.5
        },
        {
            id: "ac-2000",
            name: "low voltage reactor",
            avgRating: 3.9
        },
        {
            id: "jj-1969",
            name: "warp equalizer",
            avgRating: 5.0
        }
    ];

    // Populate product select options
    const productSelect = document.getElementById('productName');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        productSelect.appendChild(option);
    });

    // Set the current year in the footer
    document.getElementById("currentyear").textContent = new Date().getFullYear();

    // Set the last modified date in the footer
    document.getElementById("lastModified").textContent = `Last Modification: ${document.lastModified}`;

    // Initialize review count in localStorage if it doesn't exist
    if (!localStorage.getItem('reviewCount')) {
        localStorage.setItem('reviewCount', 0);
    }

    // Log the current review count
    console.log("Current review count: " + localStorage.getItem('reviewCount'));

    // Add event listener for form submission
    document.getElementById('reviewForm').addEventListener('submit', function () {
        let reviewCount = localStorage.getItem('reviewCount');
        reviewCount++;
        localStorage.setItem('reviewCount', reviewCount);

        // Log the new review count
        console.log("New review count: " + reviewCount);
    });
});