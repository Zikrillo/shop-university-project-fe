import starActive from "../../assets/star-active.svg";
import star from "../../assets/star.svg";

const StarsGroup = ({ rate }) => {
    const stars = [];
    for (let i = 0; i < rate; i++) stars.push(<img src={starActive} alt="" key={stars.length}/>);
    for (let i = 0; i < 5 - rate; i++) stars.push(<img src={star} alt="" key={stars.length}/>);
    return (<>
        {stars}
    </>)
}
StarsGroup.defaultProps = {
    rate: 0
}
export default StarsGroup;
