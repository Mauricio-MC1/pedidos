function selectRoom(roomNumber) {
    // Muestra el formulario de pedido
    document.querySelector('.rooms').style.display = 'none';
    document.getElementById('orderForm').style.display = 'block';
    
    // Muestra el número de la sala seleccionada
    document.getElementById('roomNumber').textContent = roomNumber;
}

function submitOrder() {
    const coffeeQuantity = document.getElementById('coffeeQuantity').value;
    const roomNumber = document.getElementById('roomNumber').textContent;

    // Crear el mensaje de pedido
    const message = `Sala: ${roomNumber} - Cafés: ${coffeeQuantity}`;

    const phoneNumber1 = '+593995977145'; // Primer número
    const phoneNumber2 = '+593994044700'; // Segundo número
    // Crear los enlaces de WhatsApp
    const whatsappUrl1 = `https://wa.me/${phoneNumber1}?text=${encodeURIComponent(message)}`;
    const whatsappUrl2 = `https://wa.me/${phoneNumber2}?text=${encodeURIComponent(message)}`;

    // Redirigir a ambos números de WhatsApp con un pequeño retraso
    window.open(whatsappUrl1, '_blank');
    
    // Agregar un retraso de 500 ms antes de abrir el segundo enlace
    setTimeout(function() {
        window.open(whatsappUrl2, '_blank');
    }, 500);
}

