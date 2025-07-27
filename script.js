const { jsPDF } = window.jspdf;

document.getElementById('invoice-form').addEventListener('submit', function(e) {

    e.preventDefault();

    const businessName = document.getElementById('business-name').value;

    const clientName = document.getElementById('client-name').value;

    const serviceDesc = document.getElementById('service-desc').value;

    const amount = document.getElementById('amount').value;

    

    // Update preview with large brand name

    document.getElementById('invoice-preview').innerHTML = `

        <div class="brand-name">${businessName}</div>

        <h2>Invoice</h2>

        <p><b>To:</b> ${clientName}</p>

        <p><b>Service:</b> ${serviceDesc}</p>

        <p><b>Amount:</b> $${amount}</p>

    `;

    

    // Generate PDF with large brand name

    const doc = new jsPDF();

    doc.setFontSize(24); // Large font for brand name

    doc.setFont("helvetica", "bold");

    doc.text(businessName, 20, 20);

    doc.setFontSize(16); // Reset to normal for rest

    doc.setFont("helvetica", "normal");

    doc.text(`Invoice`, 20, 35);

    doc.text(`To: ${clientName}`, 20, 45);

    doc.text(`Service: ${serviceDesc}`, 20, 55);

    doc.text(`Amount: $${amount}`, 20, 65);

    doc.save('invoice.pdf');

});