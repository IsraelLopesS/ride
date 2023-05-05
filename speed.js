const speedElement = document.querySelector("#speed");
const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");

let watchId = null;
startBtn.addEventListener("click", () => {
  if (watchId) return;

  watchId = navigator.geolocation.watchPosition(handleSucecss, handleerror);
  function handleSucecss(position) {
    speedElement.innerHTML = position.coords.speed
      ? (position.coords.speed * 3.6).toFixed(1)
      : 0;
  }

  function handleerror(error) {
    console.log(error.msg);
  }
  const options = { enableHighAccuracy: true };
  watchId = navigator.geolocation.watchPosition(
    handleSucecss,
    handleerror,
    options
  );

  startBtn.classList.add("d-none");
  stopBtn.classList.remove("d-none");
});

stopBtn.addEventListener("click", () => {
  if (!watchId) return;
  navigator.geolocation.clearWatch(watchId);
  watchId = null;
  stopBtn.classList.add("d-none");
  startBtn.classList.remove("d-none");
});
