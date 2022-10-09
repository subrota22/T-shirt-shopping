import { useContext } from "react";
import { diamondRing, moneyText } from "../GrandFather/GrandFather2";

const Mother = () => {
    const getDiamond = useContext(diamondRing)
    const [money , setMoney ] = useContext(moneyText) ;
    return (
        <div className="mother">
<div className="div">
<h3> Mother ring : {getDiamond}</h3>
<h3> Money :  {money} </h3>
<button className="moneyButton" onClick={() => setMoney( money + 200 )}> Add 200 </button>
</div>
        </div>
    );
};

export default Mother;