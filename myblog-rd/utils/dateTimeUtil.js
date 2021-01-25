module.exports = {
  formatTime(timeStamp, fmt = "YYYY-MM-DD HH:mm:ss") {
    let config = {
      YYYY: timeStamp.getFullYear(),
      MM: timeStamp.getMonth() + 1,
      DD: timeStamp.getDate(),
      HH: timeStamp.getHours(),
      mm: timeStamp.getMinutes(),
      ss: timeStamp.getSeconds()
    };
    for (let key in config) {
      fmt = fmt.replace(key, config[key])
    }
    return fmt;
  }
}

