function printImage(img) {
    // Create a new window or tab with the image
    var printWindow = window.open('', '_blank');
    printWindow.document.write('<html><head><title>Print Image</title></head><body>');
    
    // Set the image width and height to 100% for full-page printing
    printWindow.document.write('<img style="width: 100%; height: 100%;" src="' + img.src + '" alt="Printed Image">');
    
    printWindow.document.write('</body></html>');
    
    // Wait for the image to load in the new window/tab
    printWindow.document.querySelector('img').onload = function() {
        // Use the browser's print functionality
        printWindow.print();
        // Close the new window/tab after printing
        printWindow.close();
    };
}