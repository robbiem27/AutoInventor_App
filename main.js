
function enablePush() {
    // Register the service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js')
        .then(function(reg) {
            console.log('Service Worker registered:', reg);
        }).catch(function(error) {
            console.error('Service Worker registration failed:', error);
        });
    }

    // Ask for notification permission
    if ('Notification' in window) {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                new Notification('✅ Notifications enabled for AutoInventor + AGI!');
            } else {
                alert('Notifications were not enabled.');
            }
        });
    }
}

// Simulate live AGI status updates
let agiProgress = 0;
let truthLock = 0.0;

function updateStatus() {
    if (agiProgress < 100) agiProgress += Math.random() * 2;
    if (truthLock < 100) truthLock += Math.random();

    document.getElementById('agi-progress').innerText = 'AGI Evolution: ' + agiProgress.toFixed(1) + '%';
    document.getElementById('truth-lock').innerText = 'Truth Lock Status: ' + truthLock.toFixed(2) + '%';

    setTimeout(updateStatus, 2000);
}
updateStatus();
