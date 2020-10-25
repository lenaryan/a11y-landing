// switching between tabs
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.tabs__btn').forEach(btn => {
        btn.addEventListener('click', () => {
            let classes = Array.from(btn.parentNode.children);
            classes.forEach(child => child.classList.remove('grey-btn'));
            btn.classList.add('grey-btn');

            document.querySelectorAll('.tab-panel').forEach(panel => {
                panel.classList.add('hidden');
            })

            let tabname = btn.getAttribute('aria-controls');
            document.querySelector(`#${tabname}`).classList.remove('hidden');
        })
    })
});

// open/close modal
document.addEventListener('DOMContentLoaded', () => {
    const el = document.querySelector('.overlay');
    const dialog = new A11yDialog(el);

    document.querySelector('.login').addEventListener('click', () => {
        document.querySelector('.overlay').style.display = "block";
        //document.querySelector('dialog').setAttribute('open', 'true');
        document.querySelector('.dialog-close').focus();
        dialog.show();
    })

    document.querySelector('.overlay').addEventListener('click', (e) => {
        if (e.target.classList[0] == 'overlay') {
            document.querySelector('.overlay').style.display = "none";
            dialog.hide();
        }
    })

    document.querySelector('.dialog-close').addEventListener('click', (e) => {
        document.querySelector('.overlay').style.display = "none";
        dialog.hide();
        document.querySelector('.login').focus();
    })
});

// validating subscription form
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.subscr').addEventListener('submit', function(e) {
        e.preventDefault();
        let emailField = document.querySelector('#text-field');
        let emailError = document.querySelector('.error-email');
        let checkField = document.querySelector('#check');
        let checkError = document.querySelector('.error-check');
        if (!emailField.value) {
            emailError.removeAttribute('hidden');
            emailField.focus();
            emailField.setAttribute("aria-labelledby", "error-email");
        } else {
            emailError.setAttribute('hidden', 'true');

            if (!checkField.checked) {
                checkField.focus();
                checkError.removeAttribute('hidden');
                checkField.setAttribute("aria-labelledby", "error-check");
            } else {
                checkError.setAttribute('hidden', 'true');

                document.querySelector('.subscr').reset();
            }
        }
        
    })
});

// validating login form
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.login-form').addEventListener('submit', function(e) {
        e.preventDefault();
        let loginField = document.querySelector('#login');
        let loginError = document.querySelector('.error-login');
        let passField = document.querySelector('#password');
        let passError = document.querySelector('.error-pass');
        if (!loginField.value) {
            loginError.removeAttribute('hidden');
            loginField.focus();
            loginField.setAttribute("aria-labelledby", "error-login");
        } else {
            loginError.setAttribute('hidden', 'true');

            if (!passField.value) {
                passField.focus();
                passError.removeAttribute('hidden');
                passField.setAttribute("aria-labelledby", "error-pass");
            } else {
                passError.setAttribute('hidden', 'true');

                document.querySelector('.login-form').reset();
                document.querySelector('.overlay').style.display = "none";
            }
        }
        
    })
})