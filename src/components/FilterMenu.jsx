import BoroughsDrowdownMenu from './BoroughsDropdownMenu'
import DistPicker from './DistPicker'
import AvailabiltyPicker from './AvailabilityPicker'

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