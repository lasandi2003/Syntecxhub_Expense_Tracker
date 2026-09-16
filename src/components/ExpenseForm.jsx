import {useState,useRef} from "react";


function ExpenseForm({addExpense}){


const titleRef = useRef();


const [expense,setExpense]=useState({

title:"",
amount:"",
category:"",
date:""

});



const handleChange=(e)=>{

setExpense({

...expense,

[e.target.name]:e.target.value

});


}



const submitHandler=(e)=>{

e.preventDefault();


addExpense({

...expense,

id:Date.now(),

amount:Number(expense.amount)

});



setExpense({

title:"",
amount:"",
category:"",
date:""

});


titleRef.current.focus();


}




return(

<div className="expense-form">


<h2>Add Expense</h2>


<form onSubmit={submitHandler}>


<input

ref={titleRef}

name="title"

value={expense.title}

onChange={handleChange}

placeholder="Expense title"

/>


<input

name="amount"

value={expense.amount}

onChange={handleChange}

placeholder="Amount"

/>


<input

name="category"

value={expense.category}

onChange={handleChange}

placeholder="Category"

/>


<input

type="date"

name="date"

value={expense.date}

onChange={handleChange}

/>


<button>
Add Expense
</button>


</form>


</div>

)


}


export default ExpenseForm;