import dayjs from "dayjs"

const UseDateFormate = (dateAndTime) => {
    const now = dayjs();
    const inputDate = dayjs(dateAndTime);
    const diffInHours = now.diff(inputDate, 'hour');
    
    let hours;
    if(diffInHours < 24 && diffInHours > 0){
        hours =  `(${diffInHours} hours ago)`;
    }
  return [dayjs(dateAndTime).format("MMM D"),hours]
}

export default UseDateFormate