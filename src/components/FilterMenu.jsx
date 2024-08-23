export default function FilterMenu({onClickBorough, onClickAvailabilty, onClickDist})
{
    return (
        <div className="filter-menu">
            <BoroughsDrowdownMenu onClick={onClickBorough}/>
            <AvailabiltyPicker onClick={onClickAvailabilty}/>
            <DistPicker onClick={onClickDist}/>
        </div>
    );
}