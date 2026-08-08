function toggleMusic() {
      const music = document.getElementById('bg-music');
        const btn = document.getElementById('music-btn');
          if (music.paused) {
              music.play();
                  btn.innerText = "⏸ Tắt nhạc";
                    } else {
                        music.pause();
                            btn.innerText = "🎵 Bật nhạc";
                              }
                              }

                              function sendWish(event) {
                                event.preventDefault();
                                  document.getElementById('wish-form').style.display = 'none';
                                    document.getElementById('thank-text').classList.remove('hidden');
                                    }

