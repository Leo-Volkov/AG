const audio = document.querySelector("audio");

document
  .querySelector(`.button_start`)
  .addEventListener("click", function (evt) {
    if (audio.paused) {
      audio.volume = 0.2;
      audio.play();
      
    } else {
      audio.pause();
    }
    // console.log(`Успешнно всё работает, Молодец👍`)
  });
