const formatDate = (timeInSeconds) => {
  let minutes = Math.floor(timeInSeconds / 60);
  let hours = Math.floor(timeInSeconds / 3600);
  let seconds = timeInSeconds % 60;
  let minutesLeft = minutes % 60;
  if (!timeInSeconds) {
    timeInSeconds = '0' ;
  } else if (timeInSeconds >= 3600) {
      if (minutesLeft == 0 && seconds == 0) {
        timeInSeconds = String(hours) + "h";
        return `${timeInSeconds}`;
      } else if (minutesLeft == 0) {
        timeInSeconds = String(hours) + "h " + String(seconds);
        return `${timeInSeconds}s`;
      } else if (seconds == 0){
        timeInSeconds = String(hours) + "h " + String(minutesLeft) + "m";
        return `${timeInSeconds}`;
      } else {
      timeInSeconds = String(hours) + "h " + String(minutesLeft) + "m " + String(seconds); 
      }
  
  } else if (timeInSeconds >= 60) {
    if (seconds == 0){
      timeInSeconds = String(minutes) + "m";
      return `${timeInSeconds}`;
    } else {
      timeInSeconds = String(minutes) + "m " + String(seconds);
    }
  } 
  
    return `${timeInSeconds}s`;
  }
  
  module.exports = formatDate;