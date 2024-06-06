// export default function sendNotification(title, options) {
//   // Periksa apakah notifikasi didukung oleh browser
//   if (!("Notification" in window)) {
//     console.error("Browser tidak mendukung notifikasi.");
//     return;
//   }
//   Notification.reque  stPermission().then(function (permission) {
//     if (permission === "granted") {
//       if(title){
//         console.log("log title", title);
//         return new Notification(title, options);
//       }
//     }
//   }).catch(err => {
//     console.error("Gagal meminta izin notifikasi:", err);
//   });
// }


exports.requestPermission = function () {
  return Notification.requestPermission().then(function (result) {
    if (result === "denied") {
      console.log("Fitur notifikasi tidak diijinkan.");
    } else if (result === "default") {
      console.error("Pengguna menutup kotak dialog permintaan izin.");
    }
  });
}

exports.sendNotification = function (title, options) {
  if (!("Notification" in window)) {
    console.error("Browser tidak mendukung notifikasi.");
    return;
  }
  Notification.requestPermission().then(function (permission) {
    if (permission === "granted") {
      if (title) {
        console.log("log title", title);
        return new Notification(title, options);
      }
    }
  }).catch(err => {
    console.error("Gagal meminta izin notifikasi:", err);
  });
}

