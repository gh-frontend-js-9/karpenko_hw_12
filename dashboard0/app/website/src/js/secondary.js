// Insert test days in calendar
const secondary = {}
secondary.insertCalendarData = () => {
    let calendar = document.querySelector(".calendar__wrapper");
    for(let i = 1; i < 32; i++){
        let span = document.createElement("span");
        span.className = "calendar__date";
        if(i == 26){
          span.className = "calendar_date_active";
        }
        span.innerHTML = i;
        calendar.append(span);
    }
}
secondary.insertCalendarData();