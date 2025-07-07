
self.addEventListener('push', function(event) {
  const options = {
    body: event.data.text(),
    icon: 'icons/icon.png',
    badge: 'icons/icon.png'
  };
  event.waitUntil(
    self.registration.showNotification('AutoInventor + AGI', options)
  );
});
