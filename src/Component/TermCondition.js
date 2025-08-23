import Footer from "./Footer";

const TermCondition=()=>
{
    return(
        <div className="font-bold pt-3 pl-2 ">
            <div className="mb-5 mt-7 ml-3">
         <p>Welcome to HungerIt (“we,” “our,” “us”). By downloading, installing, or using our mobile application (“App”) or website, you agree to be bound by these Terms & Conditions. Please read them carefully.</p>
        </div>
        <div className="mb-5 ml-10">
        <h2>1. Use of the App</h2>
        <p>HungerIt is a platform connecting customers, restaurants, and delivery partners.</p>
        <p>You must be at least 1 years old to use our services.</p>
        <p>You agree to use the app only for lawful purposes and not for fraudulent, harmful, or abusive activities.</p>
           </div>
           <div className="mb-5 ml-10">
        <h2>2. Account Registration</h2>
        <p>To place an order, you must create an account with accurate information.</p>
        <p>You are responsible for maintaining confidentiality of your login details.</p>
       <p> HungerIt is not liable for unauthorized use of your account.</p>
        </div>
        
         <div className="mb-5 ml-10">

         <h2>3. Orders & Payments</h2>
         <p>Prices are displayed in the app and may include applicable taxes and delivery charges.</p>
         <p>Payment methods accepted: [UPI, Credit/Debit Cards, Wallets, COD (if enabled)].</p>
         <p>Once an order is placed, it cannot be canceled once it has been confirmed by the restaurant.</p>
         <p></p>




        </div>
         <div className="mb-5 ml-10">
        <h2>4.Delivery</h2>
           <p>Delivery time is an estimate and may vary due to factors beyond our control (traffic, weather, restaurant delays, etc.).</p>
            <p>You are responsible for providing the correct delivery address. Wrong details may result in cancellation or extra charges.</p>
            
         </div>
         
          <div className="mb-5 ml-10">
            <h2>5. Refunds & Cancellations</h2>
            <p>Refunds are processed only in cases such as:</p>
            <ul>

                <li>i) Order not delivered.</li>
                <li>ii) Wrong or damaged items received.</li>
            </ul>
          </div>
          <div className="mb-5 ml-10">
            <h1>6. User Responsibilities</h1>
              
               <p>You agree not to misuse the app (e.g., spamming, false complaints, or fraudulent payments).</p>
                <p>HungerIt reserves the right to suspend or terminate accounts found violating these terms.</p>
          </div>
         <Footer/>

        </div>
    )
}

export default TermCondition;