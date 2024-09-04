function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString(); //kam grum enq function padStart(2, '0')
  const minutes = now.getMinutes().toString();
  const second = now.getSeconds().toString();
  const currentTime = `${hours > 9 ? hours : "0" + hours} : ${
    minutes > 9 ? minutes : "0" + minutes
  } : ${second > 9 ? second : "0" + second}`;
  return currentTime;
}

export default getCurrentTime;
