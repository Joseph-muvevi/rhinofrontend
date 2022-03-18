import React, { useState, useEffect } from "react";
import axios from "axios";
import "./adminstoragetable.css";
import { DataGrid} from '@mui/x-data-grid';
import { makeStyles } from "@mui/styles";
import { Container } from "@mui/material";

const AdminStorageTable = () => {
	const [adminStorage, setAdminStorage] = useState([]);

	useEffect(() => {
		axios
			.get(`https://rhinojohnbackend.herokuapp.com/api/storageshipment`)
			.then((res) => {
				setAdminStorage(res.data);
				console.log("data from admin storage", adminStorage);
			})
			.catch((err) => console.log(err));
	}, []);

	
	const tableStyles = makeStyles(theme => ({
		root: {
			"& .MuiDataGrid-columnHeaders": {
				backgroundColor: theme.palette.primary.main,
				color: "whitesmoke",
				fontSize: 18,
				borderTopLeftRadius: 4,
				borderTopRightRadius: 4,
				paddingTop: 2,
				paddingBottom: 2
			  },
			"& .MuiDataGrid-virtualScrollerRenderZone": {
				"& .MuiDataGrid-row": {
				  "&:nth-child(2n)": { backgroundColor: "#333333" }
				}
			  }
		}
	}))

	const classes = tableStyles()

	  const columns =  [
		{ field: "id", hide: true },
		{ field: "fullnames", align:"left", headerAlign: "left", headerName: "Fullname", width: 150 },
		{ field: "trackno", align:"left", headerAlign: "left", headerName: "Track number", width: 150 },
		{ field: "email", align:"left", headerAlign: "left", headerName: "Email", width: 150 },
		{ field: "collectedby", align:"left", headerAlign: "left", headerName: "Collector's fullname", width: 150 },
		{ field: "collectoraddress", align:"left", headerAlign: "left", headerName: "Collector's Telephone", width: 150 },
		{ field: "collectortel", align:"left", headerAlign: "left", headerName: "Collector's Address", width: 150 },
		{ field: "intime", align:"left", headerAlign: "left", headerName: "Time in", width: 150 },
		{ field: "datein", align:"left", headerAlign: "left", headerName: "Date in", width: 150 },
		{ field: "storagecity", align:"left", headerAlign: "left", headerName: "Stored city", width: 150 },
		{ field: "storagecountry", align:"left", headerAlign: "left", headerName: "Stored country", width: 150 },
		{ field: "warehousetype", align:"left", headerAlign: "left", headerName: "Warehouse type", width: 150 },
		{ field: "weight", align:"left", headerAlign: "left", headerName: "Weight", width: 150 },
		{ field: "weightunit", align:"left", headerAlign: "left", headerName: "unit", width: 150 },
		{ field: "notes", align:"left", headerAlign: "left", headerName: "Notes", width: 250 },

	  ];

	return (
		<div className="admin-storage-table">
			<div className="admin-storage-table-content">
					
				<div style={{ width: '100%' }}>
				{/* <Container> */}
					{
						adminStorage && (
							<DataGrid
								rows={adminStorage}
								columns={columns}
								autoPageSize
								getRowId={(logistics) => logistics._id }
								autoHeight
								headerHeight={60}
								pageSize={100}
								className={classes.root}
								sx={{
									boxShadow: 2,
									border: 0,
									borderColor: 'primary.main',
									'& .MuiDataGrid-cell:hover': {
									  color: 'primary.main',
									},
									color: "whitesmoke"
								  }}
							/>
						)
					}

				{/* </Container> */}

				</div>
			</div>
		</div>
	);
};

export default AdminStorageTable;
