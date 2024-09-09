import moment from "moment";

export const getRelativeTime = (date) => {
    const today = moment();
    const inputDate = moment(date, "YYYY-MM-DD HH:mm:ss");

    if (inputDate.isSame(today, "day")) {
        return "Today";
    } else if (inputDate.isSame(today.subtract(1, "days"), "day")) {
        return "Yesterday";
    } else if (inputDate.isSame(today.add(2, "days"), "day")) {
        return "Tomorrow";
    } else {
        return inputDate.fromNow(); // Example: "in 2 days", "2 days ago"
    }
};