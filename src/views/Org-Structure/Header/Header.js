import { Button, OutlinedInput } from '@mui/material';
import React from 'react'
import Sidebar from '../../layout/Sidebar/Sidebar';
import "./header.css";
import FilterListIcon from '@mui/icons-material/FilterList';
import Organisation from '../organisation';
import InputAdornment from '@mui/material/InputAdornment';
import AddBoxSharpIcon from '@mui/icons-material/AddBoxSharp';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

function Header() {
  return (
    <nav>
      <div className="navBar">
        <div className="heading-txt">
          People  <AddBoxSharpIcon className="icon-add"/>
        </div>
        <div className="filter-search">
          {/* <input type="text" placeholder="search" className="search-input"/> */}
          <OutlinedInput
            id="outlined-adornment-search"
            aria-describedby="outlined-search-helper-text"
            inputProps={{
              'aria-label': 'search',
            }}
            placeholder="Search"
            className="search-input"
            startAdornment={<InputAdornment position="start">
            <SearchOutlinedIcon />
            </InputAdornment>}
          />
          <Button variant="contained" startIcon={<FilterListIcon />}
           className="filter-btn"
           color="info">Filter</Button>
        </div>
      </div>
      {/* <nav>
        <Sidebar />
      </nav> */}
      {/* <div >
        <Organisation />
      </div> */}
    </nav>
  )
}

export default Header