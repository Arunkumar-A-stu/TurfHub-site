document.addEventListener("DOMContentLoaded", function () {
    const dateContainer = document.getElementById("dateContainer");
    const bookButton = document.getElementById("bookSlotButton");
    const timeSlots = document.querySelectorAll(".time-slot");
    const selectedCity = document.getElementById("CitySelect");
    const selectedTurf = document.getElementById("TurfSelect");

    let selectedDate = null;
    let selectedTime = null;

    // Generate the next 7 days dynamically
    function generateDates() {
        let today = new Date();
        for (let i = 0; i < 7; i++) {
            let futureDate = new Date();
            futureDate.setDate(today.getDate() + i);

            let day = futureDate.toLocaleString('en-US', { weekday: 'short' }); // Mon, Tue
            let month = futureDate.toLocaleString('en-US', { month: 'short' }); // Feb, Mar
            let date = futureDate.getDate(); // 14, 15

            let dateBox = document.createElement("div");
            dateBox.classList.add("date-box");
            dateBox.dataset.value = `${month} ${date}`;
            dateBox.innerHTML = `${day}<br>${date} ${month}`;

            // Click event to select a date
            dateBox.addEventListener("click", () => {
                document.querySelectorAll(".date-box").forEach(b => b.classList.remove("active"));
                dateBox.classList.add("active");
                selectedDate = dateBox.dataset.value;
                checkEnableButton();
            });

            dateContainer.appendChild(dateBox);
        }
    }

    generateDates(); // Call function to populate dates

    // Time Slot Selection
    timeSlots.forEach(slot => {
        slot.addEventListener("click", () => {
            timeSlots.forEach(s => s.classList.remove("selected"));
            slot.classList.add("selected");
            selectedTime = slot.dataset.value;
            checkEnableButton();
        });
    });

    function checkEnableButton() {
        if (selectedDate && selectedTime) {
            bookButton.disabled = false;
        } else {
            bookButton.disabled = true;
        }
    }

    bookButton.addEventListener("click", () => {
        alert(`City: ${selectedCity.value}\nTurf: ${selectedTurf.value}\nSelected Date: ${selectedDate}\nSelected Time: ${selectedTime}`);
        window.location.href = "book.html";
    });
});
