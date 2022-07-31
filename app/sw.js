// // self.addEventListener('install', (event) => {
// // });
// self.addEventListener('fetch', (event) => {

// });
// // self.addEventListener('refreshOffline', function (response) {
// //   return caches.open('offline2').then(function (cache) {
// //     return cache.put(offlinePage, response);
// //   });
// // });
// // self.addEventListener('push', function (event) {
// //   var data = event.data.json(); var opts = {
// //     body: data.body,
// //     icon: data.icon,
// //     data: {
// //       url: data.url
// //     }
// //   };
// //   event.waitUntil(self.registration.showNotification(data.title, opts));
// // });
// // self.addEventListener('notificationclick', function (event) {
// //   var data = event.notification.data; event.notification.close(); event.waitUntil(
// //     clients.openWindow(data.url)
// //   );
// // });