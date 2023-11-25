import "./Header.css";
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BedIcon from "@mui/icons-material/Bed";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import Button from "@mui/material/Button";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useState } from "react";
import {format} from "date-fns";

export default function Header({type}) {
  const [openDate, setOpenDate] = useState(false);
  const [date, setDate] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);
  const [openOptions, setOpenOptions] = useState(false);
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    rooms: 1,
  });

  const handleOption = (name,opration)=>{
    setOptions(prev=>{return{
      ...prev, [name]:opration === "i" ? options[name] + 1 : options[name] - 1,
    }})
  }

  return (
    <div className="header">
      <div className={type === "list" ? "headerContainer listMode" : "headerContainer"}>
        <div className="headerList">
          <div className="headerListItems active">
            <FontAwesomeIcon icon={faBed} />
            <span>Stays</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faPlane} />
            <span>Flights</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faCar} />
            <span>Car rentals</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faBed} />
            <span>Attractions</span>
          </div>
          <div className="headerListItems">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Airport taxis</span>
          </div>
        </div>
          { type !== "list" &&
            <><h1 className="headerTitle">Find your next stay</h1>
          <h3 className="headerDescription">
            Search deals on hotels, homes, and much more...
          </h3>
          <div className="headerSearch">
            <div className="headerSearchItem">
              <BedIcon className="headerIcon" />
              <input
                type="text"
                placeholder="Where are you going"
                className="headerSearchInput"
              ></input>
            </div>
            <div className="headerSearchItem">
              <CalendarMonthIcon className="headerIcon" />
              <span onClick={()=>setOpenDate(!openDate)} className="headerSearchText">{`${format(date[0].startDate,"MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`}</span>
              {openDate && <DateRange
                editableDateInputs={true}
                onChange={(item) => setDate([item.selection])}
                moveRangeOnFirstSelection={false}
                ranges={date}
                className="date"
              />}
            </div>
            <div className="headerSearchItem">
              <PersonIcon className="headerIcon" />
              <span className="headerSearchText" onClick={()=>setOpenOptions(!openOptions)}>{`${options.adult} adult . ${options.children} children . ${options.rooms} rooms`}</span>
              {openOptions && <div className="options">
                <div className="optionItems">
                  <div className="optionText">Adult</div>
                  <div className="optionCounter">
                  <button className="optionsCounterButton" onClick={()=>handleOption("adult","d")}
                  disabled={options.adult <= 1}>-</button>
                  <span className="optionCounterNumber">{`${options.adult}`}</span>
                  <button className="optionsCounterButton" onClick={()=>handleOption("adult","i")}>+</button>
                  </div>
                </div>
                <div className="optionItems">
                  <div className="optionText">Childern</div>
                  <div className="optionCounter">
                  <button className="optionsCounterButton" onClick={()=>handleOption("children","d")} disabled={options.children <= 0}>-</button>
                  <span className="optionCounterNumber">{`${options.children}`}</span>
                  <button className="optionsCounterButton" onClick={()=>handleOption("children","i")}>+</button>
                  </div>
                </div>
                <div className="optionItems">
                  <div className="optionText">Rooms</div>
                  <div className="optionCounter">
                    <button className="optionsCounterButton" onClick={()=>handleOption("rooms","d")} disabled={options.children <= 1}>-</button>
                    <span className="optionCounterNumber">{`${options.rooms}`}</span>
                    <button className="optionsCounterButton" onClick={()=>handleOption("rooms","i")}>+</button>
                  </div>
                </div>
              </div>}
            </div>
            <div className="headerSearchItem">
              <Button variant="contained" size="large">
                Search
              </Button>
            </div>
          </div></>}
      </div>
    </div>
  );
}
