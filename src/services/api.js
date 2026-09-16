import axios from "axios";


export const fetchExpenses = async()=>{

    const response = await axios.get(
        "/src/data/expenses.json"
    );

    return response.data;

}