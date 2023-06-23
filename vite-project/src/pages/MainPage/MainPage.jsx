import Header from "../../components/header/Header";
import HotDeals from "../../components/hot-deals/HotDeals";
import GoodListNavigation from "../../components/good-list-navigation/goodListNavigation";
import ListElements from "../../components/list-elements/listElements";
import Footer from "../../components/footer/footer";
import { useEffect, useState } from "react";
import "./MainPage.css";
import ProjectServices from "../../services/project-services";

export default function MainPage() {
    const [viewMethod, setViewMethod] = useState("list");
    const [arrayOfData, setArrayOfData] = useState([]);
    const [showBy, setShowBy] = useState(5);
    const [sortBy, setSortBy] = useState("Name");
    const [range, setRange] = useState({min: -Infinity, max: Infinity }); 

    useEffect(()=>{
        ProjectServices.getData(showBy, sortBy, range).then(response=>setArrayOfData(response));
    }, [showBy, sortBy, range]);
    return (<>
        <Header></Header>
        <main>
            <HotDeals setRange={setRange}></HotDeals>
            <section className="goods-list">
                <GoodListNavigation 
                    setViewMethod={(method)=>setViewMethod(method)} 
                    viewMethod={viewMethod}
                    setShowBy={setShowBy}
                    setSortBy={setSortBy}
                />
                <div className={(viewMethod === "list")?"goods-list__content":"goods-list__content goods-grid"}>
                    <ListElements viewMethod={viewMethod} arrayOfData={arrayOfData}/>
                </div>               
            </section>
        </main>
        <Footer></Footer>
    </>)
}