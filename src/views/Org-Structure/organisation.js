import React from 'react';
import ListSharpIcon from '@mui/icons-material/ListSharp';
import GridViewIcon from '@mui/icons-material/GridView';
import LanIcon from '@mui/icons-material/Lan';
import "./organisation.css"
import EmpData from './empData';
import Header from './Header/Header';

const Organisation = () => {

  const [selected, setSelected] = React.useState("tree");


  return (
    <div>
      <div>
        <Header />
      </div>
      <div className="tab-group">
        <div className="tabs-slt" onClick={() => setSelected("list")}>
          <ListSharpIcon style={{
            backgroundColor: selected === "list" ? "white" : "",
            padding: "3px",
            borderRadius: selected === "list" ? "5px" : ""
          }} />
        </div>
        <div className="tabs-slt" onClick={() => setSelected("grid")}>
          <GridViewIcon style={{
            backgroundColor: selected === "grid" ? "white" : "",
            padding: "3px",
            borderRadius: selected === "grid" ? "5px" : ""
          }} />
        </div>
        <div className="tabs-slt" onClick={() => setSelected("tree")}>
          <LanIcon style={{
            backgroundColor: selected === "tree" ? "white" : "",
            padding: "3px",
            borderRadius: selected === "tree" ? "5px" : ""
          }} />
        </div>
      </div>
      {selected === "tree" ?
        <div className="empData">
          <EmpData />
        </div> : null}
    </div>
  )
}

export default Organisation
