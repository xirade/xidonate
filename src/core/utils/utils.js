import moment from "moment";

const calculateSumOfNumbers = (numbers) => {
  let result = numbers.reduce((acc, num) => (acc += num.amount), 0);
  return result;
};

const getFormattedTime = (date) => {
  let formattedDate = moment(date).format("MMMM Do YYYY, h:mm:ss a");
  return formattedDate;
};

export { calculateSumOfNumbers, getFormattedTime };
