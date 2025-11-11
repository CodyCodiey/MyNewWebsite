document.addEventListener('DOMContentLoaded', function () {
    // Get all toggle buttons
    const toggleButtons = document.querySelectorAll('[id^="toggle-code-btn"]');

    toggleButtons.forEach(btn => {
        // Extract the number from the button ID (e.g., "toggle-code-btn-1" -> "-1")
        const idSuffix = btn.id.replace('toggle-code-btn', '');
        const codeSection = document.getElementById('code-section' + idSuffix);

        if (codeSection) {
            // Hide code section by default
            codeSection.style.display = 'none';

            btn.addEventListener('click', function () {
                if (codeSection.style.display === 'none') {
                    codeSection.style.display = 'block';
                    btn.textContent = '▼ Hide Code';
                } else {
                    codeSection.style.display = 'none';
                    btn.textContent = '▼ Show Code';
                }
            });
        }
    });
});
