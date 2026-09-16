import {

PieChart,
Pie,
Cell,
Tooltip

}

from "recharts";



function ExpenseChart({expenses}){


const data = expenses.map(item=>({

name:item.category,

value:item.amount

}));



return(

<PieChart width={400} height={300}>


<Pie

data={data}

dataKey="value"

nameKey="name"

outerRadius={100}

>


{

data.map((entry,index)=>(

<Cell key={index}/>

))

}


</Pie>


<Tooltip/>


</PieChart>


)


}



export default ExpenseChart;