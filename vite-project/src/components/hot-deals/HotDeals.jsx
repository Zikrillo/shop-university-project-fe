import Ranger from "../ranger/Ranger";
import BrandList from "../brand-list/BrandList";

export default function HotDeals({setRange}){
    return (<>
        <aside className="left-menu">
            <div className="left-menu__brand-list">
                <div className="left-menu__brand-list-header">
                    Hot Deals
                </div>
                <BrandList></BrandList>
            </div>
            <Ranger setRange={setRange} minPrice={0} maxPrice={4000}/>
        </aside>
    </>)
}