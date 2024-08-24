import BoroughsDrowdownMenu from './BoroughsDropdownMenu'
import DistPicker from './DistPicker'
import AvailabiltyPicker from './AvailabilityPicker'

import '../styles/FilterMenu.css'

//Navigation menu for filtering
export default function FilterMenu({onClickBoroughs, onClickAvailabilities, onClickDist})
{
    return (
        <nav className="filter-menu">
            <BoroughsDrowdownMenu onClick={onClickBoroughs}/>
            <AvailabiltyPicker onClick={onClickAvailabilities}/>
            {/*<DistPicker onClick={onClickDist}/>*/}
        </nav>
    );
}