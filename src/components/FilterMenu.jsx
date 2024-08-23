import BoroughsDrowdownMenu from './BoroughsDropdownMenu'
import DistPicker from './DistPicker'
import AvailabiltyPicker from './AvailabilityPicker'

export default function FilterMenu({onClickBoroughs, onClickAvailabilty, onClickDist})
{
    return (
        <div className="filter-menu">
            <BoroughsDrowdownMenu onClick={onClickBoroughs}/>
            <AvailabiltyPicker onClick={onClickAvailabilty}/>
            <DistPicker onClick={onClickDist}/>
        </div>
    );
}