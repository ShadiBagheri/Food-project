const Instruction = () => {
    return(
        <div className="flex flex-col w-3/6 mx-auto mb-10 px-5">
            <h1 className="text-xl text-green-500 font-bold">How To Order?</h1>
            <div className="mt-5 text-justify text-sm font-bold leading-loose">
                <p>- sign in or (create an account) and set your delivery address.</p>
                <p>- Choose the restaurant you want to order from.</p>
                <p>- Select your items and tap "Add to Cart".</p>
                <p>- To place your order, select "View cart" or "Checkout".</p>
                <p>- Review your order and tap "Place Order"...</p>
                <p>- Track your order progress.</p>
            </div>
        </div>
    )
}

export default Instruction