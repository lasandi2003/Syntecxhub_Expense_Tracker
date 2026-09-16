import {
useState,
useEffect,
useMemo,
useCallback

} from "react";


import Navbar from "./components/Navbar";

import SummaryCard from "./components/SummaryCard";

import ExpenseForm from "./components/ExpenseForm";

import ExpenseList from "./components/ExpenseList";

import SearchBar from "./components/SearchBar";

import ExpenseChart from "./components/ExpenseChart";


import {fetchExpenses} from "./services/api";



function App(){


const [expenses,setExpenses]=useState([]);

const [search,setSearch]=useState("");




useEffect(()=>{


const loadData=async()=>{


const data=await fetchExpenses();


setExpenses(data);


}


loadData();


},[]);






const addExpense=useCallback((expense)=>{


setExpenses(prev=>[

...prev,

expense

]);


},[]);





const deleteExpense=useCallback((id)=>{


setExpenses(prev=>

prev.filter(item=>item.id!==id)

);


},[]);







const filteredExpenses=useMemo(()=>{


return expenses.filter(item=>

item.title.toLowerCase()
.includes(search.toLowerCase())

);


},[expenses,search]);






const totalExpense=useMemo(()=>{


return expenses.reduce(

(sum,item)=>sum+item.amount,

0

);


},[expenses]);






return(

<div>


<Navbar/>


<div className="summary-container">


<SummaryCard

title="Total Expense"

amount={totalExpense}

/>


<SummaryCard

title="Total Items"

amount={expenses.length}

/>


<SummaryCard

title="Status"

amount="Active"

/>


</div>



<SearchBar

search={search}

setSearch={setSearch}

/>



<ExpenseForm

addExpense={addExpense}

/>



<ExpenseChart

expenses={expenses}

/>



<ExpenseList

expenses={filteredExpenses}

deleteExpense={deleteExpense}

/>




</div>


)


}


export default App;