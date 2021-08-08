class ContactValidation {
    validation() {
        const form = document.querySelector(".contact-form--form");

        if (form) {
            // Pristine config
            const config = {
                classTo: 'contact-form--input-group',
                errorClass: 'contact-form--input-group--danger',
                successClass: 'contact-form--input-group--success',
                errorTextParent: 'contact-form--input-group',
                errorTextTag: 'span'
            }

            // Create the pristine instance
            const pristine = new Pristine(form, config);

            form.addEventListener('submit', function (e) {
                e.preventDefault();

                // Check if the form is valid
                const valid = pristine.validate(); // returns true or false

                const xhr = new XMLHttpRequest();
                const formData = new FormData(form);

                if (valid) {
                    const data = {
                        firstname: formData.get('firstname'),
                        lastname: formData.get('lastname'),
                        email: formData.get('email'),
                        phone: formData.get('phone'),
                        description: formData.get('description'),
                    };

                    xhr.open('POST', '/contact');

                    xhr.setRequestHeader('Content-Type', 'application/json');

                    xhr.send(JSON.stringify(data));

                    form.reset();
                }
            }, {passive: true});
        }
    }
}


