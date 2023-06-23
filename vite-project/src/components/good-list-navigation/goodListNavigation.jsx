import gridPic from "../../assets/grid.svg";
import gridPicActive from "../../assets/grid active.svg";
import listPic from "../../assets/list.svg";
import listPicActive from "../../assets/list active.png";
import Dropdown from "../dropdown/dropdown";

export default function GoodListNavigation({ setViewMethod, viewMethod, setShowBy, setSortBy }) {
    return (
        <nav className="goods-list__navigation">
            <div className="goods-list__overall">
            <i className="fi fi-rr-bars-filter" style={{marginRight: "20px"}}></i> Items
            </div>
            <div className="goods-list__sort">
                <div>Sort by:</div>

                <div className="goods-list__sort-selector">
                    <Dropdown options={[
                        { label: "Name", value: "Name" },
                        { label: "Price", value: "Price" },
                        { label: "Reviews", value: "Reviews" },
                    ]}
                        width={"120px"}
                        onChangeFunc={setSortBy}
                    />
                </div>
                <div className="goods-list__show">
                    <div>Show by:</div>
                    <div className="goods-list__show-selector">
                        <Dropdown options={[
                            { label: "5", value: 5 },
                            { label: "6", value: 6 },
                            { label: "12", value: 12 },
                        ]}
                            width={"120px"}
                            onChangeFunc={setShowBy}

                        />
                    </div>
                </div>
            </div>
            <div className="goods-list__switcher">
                <div className="goods-list__grid" onClick={() => setViewMethod("grid")}>
                    <img src={viewMethod !== "grid" ? gridPic : gridPicActive} alt="" />
                </div>
                <div className="goods-list__list" onClick={() => setViewMethod("list")}>
                    <img src={viewMethod !== "list" ? listPic : listPicActive} alt="" />
                </div>
            </div>
        </nav>
    );
}