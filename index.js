const readline = require('readline');
      const ytdl = require('ytdl-core');
      const fs = require('fs');
      
      function downloadVideo() {
        const link = document.getElementById("video-link").value;
        const message = document.getElementById("message");
        message.innerHTML = "Downloading and converting video, please wait...";
        const rl = readline.createInterface({
          input: process.stdin,
          output: process.stdout
        });
        rl.question(link, (link) => {
          ytdl(link, {
            filter: (format) => format.container === 'mp4'
          }).pipe(fs.createWriteStream('video.mp4')).on('close', () => {
            console.log('Video downloaded and converted successfully!');
            rl.close();
            message.innerHTML = "Video downloaded and converted successfully!";
          });
        });
      }

      
      