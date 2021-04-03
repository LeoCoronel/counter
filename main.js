// Set initial count
let count = 0;

// Select value and buttons
const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");


btns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        // Changes on the value
        if(e.currentTarget.classList[1] == 'decrease') {
            count--;
        } else if(e.currentTarget.classList[1] == 'increase') {
            count++;
        } else {
            count = 0;
        }

        // Changes in styles depending on the value
        if(count < 0) { value.style.color = '#e5989b' }
        if(count > 0) { value.style.color = '#83c5be' }
        if(count == 0) { value.style.color = "#4e4e4e"}

        value.textContent = count;
    });
});

