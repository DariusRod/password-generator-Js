import './ExpenseDate.css';

function ExpenseDate(props){
const month = props.date1.toLocaleString('en-AU',{month:'long'});
  const day = props.date1.toLocaleString('en-AU',{day:'2-digit'});
  const year = props.date1.getFullYear();

  return(
    <div  className='expense-date'>
    <div className='expense-date__month'>{month}</div>
    <div className='expense-date__year'>{year}</div>
    <div className='epense-date__day'>{day}</div>
  </div>

  );


}

export default ExpenseDate;