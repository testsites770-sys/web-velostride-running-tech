```javascript
// Waitlist Form Handling
document.getElementById('waitlistForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const emailInput = this.querySelector('input[type="email"]');
    const successMsg = document.getElementById('successMessage');
    
    if(emailInput.value) {
        // Simulate API call
        const button = this.querySelector('button');
        button.innerText = 'מעבד...';
        button.disabled = true;
        
        setTimeout(() => {
            this.classList.add('hidden');
            successMsg.classList.remove('hidden');
            console.log('Registered email:', emailInput.value);
        }, 1200);
    }
});

// Navbar change on scroll
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('py-2', 'bg-slate-950/95');
        nav.classList.remove('py-4', 'bg-slate-950/80');
    } else {
        nav.classList.add('py-4', 'bg-slate-950/80');
        nav.classList.remove('py-2', 'bg-slate-950/95');
    }
});

// Simple parallax effect for hero shoe
window.addEventListener('mousemove', (e) => {
    const shoe = document.querySelector('section img');
    if (window.innerWidth > 768) {
        const moveX = (e.clientX - window.innerWidth / 2) * 0.01;
        const moveY = (e.clientY - window.innerHeight / 2) * 0.01;
        shoe.style.transform = `rotate(${-15 + moveX}deg) translate(${moveX}px, ${moveY}px)`;
    }
});

// Smooth Scroll Logic
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
```