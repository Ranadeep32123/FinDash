import React from "react";
import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "./data";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

import Button from "@mui/material/Button";

const Datatable = () => {
  const action = [
    {
      field: "Action",
      headerName: "Action",
      width: 200,

      renderCell: (params) => {
        return (
          <div className="Action">
            {/* <button className="userListEdit">Edit</button>
            <button className="userListDelete">Delete</button> */}
            <Box sx={{ "& button": { m: 1 } }}>
              <div>
                <Link to={`/users/${params.row.id}`}>
                  <Button
                    variant="outlined"
                    size="small"
                    className="userListEdit"
                  >
                    View
                  </Button>
                </Link>
                <Button
                  variant="outlined"
                  size="medium"
                  className="userListDelete"
                >
                  Delete
                </Button>
              </div>
            </Box>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable" style={{ width: "100%" }}>
      <DataGrid
        className="datagrid"
        rows={userRows}
        columns={userColumns.concat(action)}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
};

export default Datatable;
