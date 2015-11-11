function nextYears(start, end , day){
  for (var i = start; i <= end; i++){
    var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thorsday", "Friday", "Saturday"]
    var year = new Date();
    var yearNext = year.setFullYear(i);
    var firstDay = year.setDate(1);
    var firstMonth = year.setMonth(0);
    var dayOfWeek = week[year.getDay()];
    if (dayOfWeek === day) {return i}
  }
  return false
};
console.log(nextYears(2014, 2050, "Monday")) // 2018