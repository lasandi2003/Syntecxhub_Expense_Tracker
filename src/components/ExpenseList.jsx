import ExpenseItem from "./ExpenseItem";


function ExpenseList({expenses,deleteExpense}){


return(

<div className="expense-list">


<h2>
Recent Expenses
</h2>



{

expenses.length===0?

<p>
No expenses found
</p>


:


expenses.map(item=>(

<ExpenseItem

key={item.id}

expense={item}

deleteExpense={deleteExpense}

/>

))


}



</div>


)


}


export default ExpenseList;