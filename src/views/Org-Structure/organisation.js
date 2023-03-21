import React from 'react';
import ListSharpIcon from '@mui/icons-material/ListSharp';
import GridViewIcon from '@mui/icons-material/GridView';
import LanIcon from '@mui/icons-material/Lan';
import "./organisation.css"
import EmpData from './empData';

const Organisation = () => {

  const [selected, setSelected] = React.useState("tree")

  const orgChart = {
    name: 'CEO',
    children: [
      {
        name: 'Manager',
        attributes: {
          department: 'Production',
        },
        children: [
          {
            name: 'Foreman',
            attributes: {
              department: 'Fabrication',
            },
            children: [
              {
                name: 'Worker',
              },
            ],
          },
          {
            name: 'Foreman',
            attributes: {
              department: 'Assembly',
            },
            children: [
              {
                name: 'Worker',
                children: [
                  {
                    name: 'Foreman',
                    attributes: {
                      department: 'Fabrication',
                    },
                    children: [
                      {
                        name: 'Worker',
                      },
                    ],
                  },
                  {
                    name: 'Foreman',
                    attributes: {
                      department: 'Assembly',
                    },
                    children: [
                      {
                        name: 'Worker',

                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  };


  return (
    // <div id="treeWrapper" style={{ width: '100em', height: '100em' }}>
    //   <Tree data={orgChart} />
    // </div>
    <div>
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
