function ExpenseItem({expense,deleteExpense}){


return(

<div className="expense-item">


<div>

<h3>
{expense.title}
</h3>

<p>
{expense.category}
</p>

</div>


<div>

<h3>
Rs. {expense.amount}
</h3>

<p>
{expense.date}
</p>


<button
onClick={()=>deleteExpense(expense.id)}
>
Delete
</button>


</div>


</div>

)


}


export default ExpenseItem;