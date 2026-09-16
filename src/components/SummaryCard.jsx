function SummaryCard({title,amount}){

    return(

        <div className="summary-card">

            <h3>{title}</h3>

            <p>
                Rs. {amount}
            </p>

        </div>

    )

}


export default SummaryCard;