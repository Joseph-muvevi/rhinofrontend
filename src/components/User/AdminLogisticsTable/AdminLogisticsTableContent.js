
import "./adminlogisticstable.css"
import { DataGrid} from '@mui/x-data-grid';
import { makeStyles } from "@mui/styles";
// import { Link } from 'react-router-dom'

const AdminLogisticsTableContent = ({data, length, logistics}) => {

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
		{ field: "idno", align:"left", headerAlign: "left", headerName: "ID Number", width: 150 },
		{ field: "trackno", align:"left", headerAlign: "left", headerName: "Track number", width: 150 },
		{ field: "product", align:"left", headerAlign: "left", headerName: "Product Name", width: 150 },
		{ field: "producttype", align:"left", headerAlign: "left", headerName: "Product State", width: 150 },
		{ field: "timeevents", align:"left", headerAlign: "left", headerName: "Timed at", width: 150 },
		{ field: "currentlocation", align:"left", headerAlign: "left", headerName: "Currently at", width: 150 },
		{ field: "pieces", align:"left", headerAlign: "left", headerName: "Product Quantity", width: 150 },
		{ field: "weight", align:"left", headerAlign: "left", headerName: "Weight", width: 150 },
		{ field: "weightunit", align:"left", headerAlign: "left", headerName: "Weight Unit", width: 150 },
		{ field: "departurecountry", align:"left", headerAlign: "left", headerName: "Country of departure", width: 180 },
		{ field: "departurecity", align:"left", headerAlign: "left", headerName: "City of departure", width: 180 },
		{ field: "departuredate", align:"left", headerAlign: "left", headerName: "Departure date", width: 150 },
		{ field: "departuretime", align:"left", headerAlign: "left", headerName: "Departure time", width: 150 },
		{ field: "arrivalcountry", align:"left", headerAlign: "left", headerName: "Destination Country", width: 150 },
		{ field: "arrivalcity", align:"left", headerAlign: "left", headerName: "Destination City", width: 150 },
		{ field: "arrivaldate", align:"left", headerAlign: "left", headerName: "Arrival date", width: 150 },
		{ field: "arrivaltime", align:"left", headerAlign: "left", headerName: "Arrival time", width: 150 },
		{ field: "notes", align:"left", headerAlign: "left", headerName: "Departure time", width: 250 },
		{ field: "status", align:"left", headerAlign: "left", headerName: "Status", width: 250 },
	  ];
	  
	return (


			<div style={{ width: '100%' }}>
				{
					logistics && (
						<DataGrid
							rows={logistics}
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
			</div>

		// <div  className="logistics-content-table">
		// 	<div className="logistics-content-table-content">
				   
		// 			<div  className="logistics-content-table-content-info">
		// 				<div className="logistics-content-table-content-topic-upper">
		// 					<p className="logistics-content-table-content-topic-p-number">
		// 						<span className="header-phone-only">
		// 							No: 
		// 						</span>
		// 						{ length + 1 }
		// 					</p>
		// 					<p className="logistics-content-table-content-topic-p-track">
		// 						<span className="header-phone-only">
		// 							Track Number: 
		// 						</span>
		// 						{info ? info.trackno : null}
		// 					</p>
		// 					<p className="logistics-content-table-content-topic-p-fullnames">
		// 						<span className="header-phone-only">
		// 							Product name: 
		// 						</span>
		// 						{info ? info.fullnames : null}    
		// 					</p>
		// 					<p className="logistics-content-table-content-topic-p-product">
		// 						<span className="header-phone-only">
		// 							No: 
		// 						</span>
		// 						{info ? info.product : null}
		// 					</p>
		// 					<p className="logistics-content-table-content-topic-p-address">
		// 						<span className="header-phone-only">
		// 							Addess: 
		// 						</span>
		// 						{info ? info.shipaddress : null}
		// 					</p>
		// 					<p className="logistics-content-table-content-topic-p-weight">
		// 						<span className="header-phone-only">
		// 							Weight unit: 
		// 						</span>
		// 						{info ? info.weight : null} {info ? info.weightunit : null}
		// 					</p>
		// 					<p className="logistics-content-table-content-topic-departure-city">
		// 						<span className="header-phone-only">
		// 							City DExparted: 
		// 						</span>
		// 						 {info ? info.departurecity : null}
		// 					</p>
		// 					<p className="logistics-content-table-content-topic-departure-country">
		// 						<span className="header-phone-only">
		// 							Country Departed: 
		// 						</span>
		// 						{info ? info.departurecountry : null}
		// 					</p>
		// 					<p className="logistics-content-table-content-topic-arrival-city">
		// 						<span className="header-phone-only">
		// 							Arrival City: 
		// 						</span>
		// 						{info ? info.arrivalcity : null}
		// 					</p>
		// 					<p className="logistics-content-table-content-topic-arrival-country">
		// 						<span className="header-phone-only">
		// 							Arrival Country: 
		// 						</span>
		// 						{info ? info.arrivalcountry : null}
		// 					</p>
		// 					<p className="logistics-content-table-content-topic-status">
		// 						<span className="header-phone-only">
		// 							Status: 
		// 						</span>
		// 						{info ? info.status : null}
		// 					</p>
		// 				</div>
		// 				<div className="logistics-content-table-content-topic-lower">
								
		// 					<div className="logistics-content-table-content-topic-lower-observation">
		// 						<p style={{marginLeft: "12px"}} className="logistics-content-table-content-topic-p">
		// 						<span className="header-phone-only">
		// 							Observations : 
		// 						</span>
		// 							{info ? info.notes : null}
		// 						</p>
		// 					</div>
		// 				</div>
		// 			</div>
		// 	</div>
		// </div>
	)
}

export default AdminLogisticsTableContent
