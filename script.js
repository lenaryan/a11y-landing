const el = document.querySelector('.overlay');
const dialog = new A11yDialog(el);

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
    document.querySelector('.login').addEventListener('click', () => {
        el.style.display = "block";
        document.querySelector('.dialog-close').focus();
        document.querySelector('footer').setAttribute('aria-hidden', 'true');
        document.querySelector('header').setAttribute('aria-hidden', 'true');
        document.querySelector('main').setAttribute('aria-hidden', 'true');
        dialog.show();
    })

    //doesn't fucking work :-/
    el.addEventListener('click', (e) => {
        if (e.target.classList[0] == 'overlay') {
            el.style.display = "none";
            dialog.hide();
            document.querySelector('footer').removeAttribute('aria-hidden');
            document.querySelector('header').removeAttribute('aria-hidden');
            document.querySelector('main').removeAttribute('aria-hidden');
        }
    })

    document.querySelector('.dialog-close').addEventListener('click', (e) => {
        el.style.display = "none";
        dialog.hide();
        document.querySelector('footer').removeAttribute('aria-hidden');
        document.querySelector('header').removeAttribute('aria-hidden');
        document.querySelector('main').removeAttribute('aria-hidden');
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
                document.querySelector('.subscr__success').removeAttribute('hidden');
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
                document.querySelector('.login__success').removeAttribute('hidden');
                document.querySelector('.login-form').reset();
                document.querySelector('footer').removeAttribute('aria-hidden');
                document.querySelector('header').removeAttribute('aria-hidden');
                document.querySelector('main').removeAttribute('aria-hidden');
                setTimeout(() => {
                    dialog.hide();
                    document.querySelector('.login').focus();
                    document.querySelector('.overlay').style.display = "none";
                }, 3000)
            }
        }
        
    })
})

// yes, I know I could refactor