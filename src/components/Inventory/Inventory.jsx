
import "./Inventory.css" ;
import {TrashIcon } from '@heroicons/react/24/solid'
import { toast } from "react-toastify";
const Inventory = ({cart , removeItem , children}) => { //map , forEach , filter , find = loop // for 
let quantity = 0 ;
let price = 0 ;
let tax = 0 ;
let grandTotalPrice = 0 ;
for(let cartInfo of cart) {
quantity = quantity + cartInfo.quantity ;
price = price + (cartInfo.price * quantity) ;
tax = tax + (price/100 * 10 ) ;
grandTotalPrice = price + tax ;
}

if(cart.length === 2 ) {
toast.warn("Stop I don't have enought money !!")
} else if(cart.length <=  2 ) {
toast.success("You are able to buy now !! ")
}

    return (
        <div className="inventory">
        <div  className={cart.length === 3 ? "orderSummery" : "orderSummeryOk"}> 
       <p >Order Summery </p> 
       </div>
       <hr />
       <p> Total {quantity} tshirt selected !! </p>
       <p> Total price {price} </p>
       <p> Tax {tax} </p>
       <p> Grand total price {grandTotalPrice} </p>
       {children}
       {
        cart.map(dataGet =>  
             <ShowInfo key={dataGet._id}    name={dataGet.name} price = {dataGet.price} 
             dataGet={dataGet} quantity ={dataGet.quantity}   removeItem={removeItem } /> )
       }  
        </div>
    );
};

const ShowInfo = ({name , price , dataGet , removeItem , quantity}) => {
return (

    <>
  <div className="CartText">
    <table className="table">
        <thead>
            <tr>
            <th> Product name </th>
            <th> Price </th>
            <th> Delete </th>
            </tr>
        </thead>
        <tbody>
            <tr>
          <td>   <p>  {name }  </p> </td>
          <td>     <p>   ${price} Quantity {quantity} </p> </td>
          <td>  
   
              <TrashIcon className="trsicon" onClick= {() => removeItem(dataGet) }>
                 </TrashIcon > 

    
    </td>
            </tr>
        </tbody>
    </table>
 
  </div>
    </>
)
}
export default Inventory;