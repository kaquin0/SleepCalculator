const getSleepHours = day => {
  if (day === 'Monday'){return 6;}
  else if (day === 'Tuesday'){return 10;}
  else if (day === 'Wednesday'){return 5;}
  else if (day === 'Thursday'){return 8;}
  else if (day === 'Friday'){return 7;}
  else if (day === 'Saturday'){return 9;}
  else if (day === 'Sunday'){return 8;}
  if (day = ' '){return 'Error';}
  }

const getActualSleepHours = () => 6 + 7 + 9 + 8 + 5 + 10 + 11;

const getIdealSleepHours = () => {
  const idealHours = 8;
  return idealHours * 7;
};

const calculateSleepDebt = () => {
const actualSleepHours = getActualSleepHours(); const idealSleepHours = getIdealSleepHours();
if (actualSleepHours === idealSleepHours){console.log('I got the perfert amount of sleep.');}
else if (actualSleepHours > idealSleepHours){console.log('I slept for ' + (actualSleepHours - idealSleepHours) + ' hour(s) which is more sleep than I needed.');}
else if (actualSleepHours < idealSleepHours){console.log('I slept ' + (idealSleepHours - actualSleepHours) + ' hour(s). ' + 'I need to get more sleep.');}
}

calculateSleepDebt();
