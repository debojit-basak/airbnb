import React, {useState} from 'react'
import './Search.css'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import {DateRangePicker} from "react-date-range"
import PeopleIcon from '@material-ui/icons/People';
import {Button} from '@material-ui/core'
import {useHistory} from "react-router-dom"
// this is the date picker component
function Search() {
    const history = useHistory();
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: "selection",
    };

    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate);
        setEndDate(ranges.selection.endDate);
    }
    return (
        <div className="search">
            <DateRangePicker className="date-picker" ranges = {[selectionRange]} onChange = {handleSelect}/>
            <h2 className="text_search">Number of Guests <PeopleIcon /></h2>
            <input min={0} defaultValue={2} type="number"/>
            <Button onClick={()=> history.push('/search')}>Search Airbnb</Button>
        </div>
    )
}

export default Search
