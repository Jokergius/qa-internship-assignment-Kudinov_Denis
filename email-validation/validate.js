        const emailInput = document.getElementById('emailInput');
        const validateBtn = document.getElementById('validateBtn');
        const message = document.getElementById('message');
        
        function validateEmail(email) {
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            return re.test(String(email).toLowerCase());
        }
        
        function showMessage(text, isSuccess) {
            message.textContent = text;
            message.className = 'message ' + (isSuccess ? 'success' : 'error');
            message.innerHTML = text;
            
            if (!isSuccess) {
                emailInput.classList.add('shake');
                setTimeout(() => emailInput.classList.remove('shake'), 400);
            }
        }
        
        validateBtn.addEventListener('click', () => {
            const email = emailInput.value.trim();
            
            if (!email) {
                showMessage('Пожалуйста, введите email', false);
                emailInput.focus();
                return;
            }
            
            if (validateEmail(email)) {
                showMessage('Валидация email пройдена', true);
                // Здесь можно добавить отправку формы
            } else {
                showMessage('Некорректный email. Попробуйте снова', false);
            }
        });
        