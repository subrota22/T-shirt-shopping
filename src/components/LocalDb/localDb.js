
const storeDataToLocalStorage = (id) => {
const localStorageData = localStorage.getItem("tshirt-data") ;
let storeNewData = {} ;
if(localStorageData) {
storeNewData = JSON.parse(localStorageData) ;
}else{
storeNewData = {} ;
}
const quantity = storeNewData[id] ;
 if(quantity) {
  let newQuantity = quantity + 1 ;
  storeNewData[id] = newQuantity ;
 }else{
  storeNewData[id] = 1 ;
 }
localStorage.setItem("tshirt-data" , JSON.stringify(storeNewData)) ;
}

const checkLocaleStorageData = () =>  {
    let storeNewData = {} ;
    const localStorageData = localStorage.getItem("tshirt-data") ;
    if(localStorageData) {
    storeNewData = JSON.parse(localStorageData) ;
    }
    return storeNewData ;
}

const deleteDataFromLocalStorage = (id) => {
    const localStorageData = localStorage.getItem("tshirt-data") ;
    if(localStorageData) {
    const checkData = JSON.parse(localStorageData) ;
    if(id in checkData) {
     delete checkData[id]  ;
    localStorage.setItem("tshirt-data" , JSON.stringify(checkData) ) ;
    }
    }
}

const removeDataFromLocalStorgae = () => {
    const checkData = localStorage.getItem("tshirt-data") ;
    if(checkData) {
     localStorage.removeItem(checkData) ;
    }
}
export {
    storeDataToLocalStorage ,  checkLocaleStorageData ,
    deleteDataFromLocalStorage , removeDataFromLocalStorgae
    }