// budget.js
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('presupuestoForm');
    const productoSelect = document.getElementById('producto');
    const plazoInput = document.getElementById('plazo');
    const extrasCheckboxes = document.querySelectorAll('input[name="extras"]');
    const totalSpan = document.getElementById('total');

    function calcularPresupuesto() {
        let total = 0;
        
        const productoPrecio = parseInt(productoSelect.options[productoSelect.selectedIndex].getAttribute('data-precio'));
        total += productoPrecio;

        if (plazoInput.value) {
            const descuento = parseInt(plazoInput.value) * 10; // Por ejemplo, $10 de descuento por mes
            total -= descuento;
        }

        extrasCheckboxes.forEach(checkbox => {
            if (checkbox.checked) {
                total += parseInt(checkbox.getAttribute('data-precio'));
            }
        });

        totalSpan.textContent = total;
    }

    productoSelect.addEventListener('change', calcularPresupuesto);
    plazoInput.addEventListener('input', calcularPresupuesto);
    extrasCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', calcularPresupuesto);
    });

    calcularPresupuesto();
});
