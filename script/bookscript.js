document.addEventListener('DOMContentLoaded', () => {
    const timeSlots = document.querySelectorAll('.time-slot');
    const bookSlotButton = document.getElementById('bookSlotButton');
    const dateInput = document.getElementById('date');

    timeSlots.forEach(slot => {
        slot.addEventListener('click', () => {
            timeSlots.forEach(s => s.classList.remove('selected'));
            slot.classList.add('selected');
            bookSlotButton.disabled = false;
        });
    });

    bookSlotButton.addEventListener('click', () => {
        const selectedSlot = document.querySelector('.time-slot.selected');
        if (selectedSlot) {
            const selectedTime = selectedSlot.getAttribute('data-value');
            const selectedDate = dateInput.value;
            alert(`You have booked for ${selectedDate} at ${selectedTime}`);
        }
    });
});