import { checkLocaleStorageData  } from "../LocalDb/localDb";

export const productAndCart =  async () => {
const getProducts =  await fetch("tshirts.json") ;
const products = await getProducts.json() ;
//just find and get data 
const getStoredData = checkLocaleStorageData() ;
if(getStoredData) {
let storeNewData = [] ;
for(const id in getStoredData) {
const findData = products.find(data => data._id === id)  ;
if(findData) {
const quantity  = getStoredData[id] ;
findData.quantity = quantity ; 
storeNewData.push(findData) ;
} 
}
return {products:products , storeNewData:storeNewData} ;
}
}