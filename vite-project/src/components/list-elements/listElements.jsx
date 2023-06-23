import ListElement from "../list-element/ListElement";
import GridElement from "../grid-element/GridElement";
import "./listElements.css"


export default function ListElements({viewMethod, arrayOfData}){
    if (arrayOfData !== undefined || arrayOfData?.length === 0)
    if (viewMethod === "list")
        return(
            <>
                {arrayOfData.map((element, key)=><ListElement params={element} key={key}/>)}
            </>
        )
    else 
    return(
        <>
            {arrayOfData.map((element, key)=><GridElement params={element} key={key}/>)}
        </>
    )
    else
    return (<div className="left-menu__ranger-header">Empty data</div>)
}