function clearDisplay() {
    document.getElementById('result').value = '';
}

function appendToDisplay(value) {
    document.getElementById('result').value += value;
}

function deleteLast() {
    const display = document.getElementById('result');
    display.value = display.value.slice(0, -1);
}

function calculateResult() {
    try {
        const result = eval(document.getElementById('result').value);
        document.getElementById('result').value = result;
        playSuccessAnimation();
    } catch (error) {
        document.getElementById('result').value = 'Error';
    }
}

// ===== ANIMATIONS & EFFECTS =====
function playSuccessAnimation() {
    const display = document.querySelector('.display');
    display.style.animation = 'none';
    setTimeout(() => {
        display.style.animation = 'calc-success 0.5s ease';
    }, 10);
}

// Add animation when page loads
window.addEventListener('load', () => {
    const card = document.querySelector('.calculator-card');
    if (card) {
        card.style.animation = 'card-enter 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards';
    }
});

// ===== ADD DYNAMIC CSS ANIMATIONS =====
if (!document.querySelector('style[data-animations]')) {
    const animStyle = document.createElement('style');
    animStyle.setAttribute('data-animations', 'true');
    animStyle.innerHTML = `
        @keyframes calc-success {
            0% {
                box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 212, 255, 0.1);
            }
            50% {
                box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.5), 0 0 30px rgba(0, 212, 255, 0.5), 0 0 60px rgba(0, 102, 255, 0.3);
                border-color: rgba(0, 212, 255, 0.8);
            }
            100% {
                box-shadow: inset 0 0 15px rgba(0, 0, 0, 0.5), 0 0 20px rgba(0, 212, 255, 0.1);
            }
        }
        
        @keyframes card-enter {
            from {
                opacity: 0;
                transform: translateY(30px) scale(0.95);
            }
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
    `;
    document.head.appendChild(animStyle);
}

// ===== KEYBOARD SUPPORT =====
document.addEventListener('keydown', function(e) {
    const resultInput = document.getElementById('result');
    
    if (e.key >= '0' && e.key <= '9') {
        appendToDisplay(e.key);
    } else if (e.key === '+' || e.key === '-' || e.key === '*') {
        appendToDisplay(e.key);
    } else if (e.key === '/') {
        e.preventDefault();
        appendToDisplay('/');
    } else if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        calculateResult();
    } else if (e.key === 'Backspace') {
        e.preventDefault();
        deleteLast();
    } else if (e.key === 'Escape') {
        clearDisplay();
    } else if (e.key === '.') {
        appendToDisplay('.');
    }
});

// ===== CONSOLE MESSAGE =====
console.log('%c⚡ Advanced Calculator Initialized', 'color: #00d4ff; font-size: 16px; font-weight: bold; text-shadow: 0 0 10px #00d4ff;');
console.log('%cKeyboard Support Enabled: ESC=Clear, BACKSPACE=Delete, ENTER/==Calculate', 'color: #00d4ff; font-size: 12px;');
