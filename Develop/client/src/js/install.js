const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
butInstall.classList.toggle("hidden", true);
// Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    window.deferredPrompt = event;
    butInstall.classList.toggle('hidden', false);
});

// Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    if (!promptEvent) {
        butInstall.classList.toggle("hidden", true);
        return;
    }

    // Show prompt
    promptEvent.prompt();

    // Reset the deferred prompt variable
    window.deferredPrompt = null;

    butInstall.classList.toggle('hidden', true);
});

// Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    // Clear prompt
    butInstall.classList.toggle("hidden", true);
    window.deferredPrompt = null;
});
