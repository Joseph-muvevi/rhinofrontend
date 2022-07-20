import React, { useState, useEffect } from "react";
import "../../shipment.css";
import moment from "moment";
import { Box, Container, Grid, Toolbar, Typography} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { DataGrid } from "@mui/x-data-grid";

const ShipmentTableitem = ({result, item}) => {
	

	// const [date, setDate] = useState("")

		
	const tableStyles = makeStyles(theme => ({
		wrapper: {
			width: "100%",
			marginTop: "20px"
			// backgroundColor:"red"
		},
		gridcontainerheader:{
			width: "100%",
			// backgroundColor: "blue"
			backgroundColor: theme.palette.primary.main,
			padding: "10px"
		},
		gridcontainerbody:{
			width: "100%",
			padding: "10px"
			// backgroundColor: "blue"
		},
		gridItems:{
			minWidth: "150px",
			maxWidth: "320px",
			marginTop: "20px",
			marginBottom: "20px",
			paddingLeft: "10px",
			paddingRight: "10px",
		},
		typography: {
			color: theme.palette.text.light,
			textAlign: "left"
		}
	}))



	const classes = tableStyles()

	return (
		<Container>
			<br/><br/>
			<Box className={classes.wrapper}>
					<Grid spacing={2} className={classes.gridcontainerheader} container>
						<Grid item className={classes.gridItems}>
							<Typography variant="body" className={classes.typography} align="left">
								No
							</Typography>
						</Grid>
						<Grid item className={classes.gridItems}>
							<Typography variant="body" className={classes.typography} align="left">
								Time
							</Typography>
							
						</Grid>
						<Grid item className={classes.gridItems}>
							<Typography variant="body" className={classes.typography} align="left">
								Date
							</Typography>
							
						</Grid>
						<Grid item className={classes.gridItems}>
							<Typography variant="body" className={classes.typography} align="left">
								Location
							</Typography>
							
						</Grid>
						<Grid item className={classes.gridItems}>
							<Typography variant="body" className={classes.typography} align="left">
								Status
							</Typography>
							
						</Grid>
						<Grid item className={classes.gridItems}>
							<Typography variant="body" className={classes.typography} align="left">
								Observation
							</Typography>
							
						</Grid>
					</Grid>
					<Grid className={classes.gridcontainerbody}  container>
						<Grid item className={classes.gridItems} >
							<Typography variant="body" className={classes.typography} align="left">
								{item.number}
							</Typography>
						</Grid>
							<Grid item className={classes.gridItems}>
							<Typography variant="body" className={classes.typography} align="left">
								{item.timeevents}
							</Typography>
							
							</Grid>
							<Grid item className={classes.gridItems}>
							<Typography variant="body" className={classes.typography} align="left">
								{item.dateevents}
							</Typography>
							
							</Grid>
							<Grid item className={classes.gridItems}>
							<Typography variant="body" className={classes.typography} align="left">
								{item.currentlocation}
							</Typography>
							
							</Grid>
							<Grid item className={classes.gridItems}>
							<Typography variant="body" className={classes.typography} align="left">
								{item.shippingstatus}
							</Typography>
							
							</Grid>
							<Grid item className={classes.gridItems}>
							<Typography variant="body" className={classes.typography} align="left">
								{item.notes}
							</Typography>
							
							</Grid>

						</Grid>
			</Box>





			{/* <div key={item ? item._id : null} className="shipment-item-table">
				<div className="shipment-item-table-item">
					
							<div className="shipment-item-table-item-topic">
								<p className="shipment-item-table-item-topic-hash">#</p>
								<p className="shipment-item-table-item-topic-date">
									{item ? item.dateevents  : null}
									{/* {item ? item._id  : null} */}
								{/* </p>
								<p className="shipment-item-table-item-topic-location">
									Location
								</p>
								<p className="shipment-item-table-item-topic-time">Time</p>
								<p className="shipment-item-table-item-topic-pieces">
									Pieces
								</p>
							</div> */}
						

					{/* // {[item].map(() => ( */}
					{/* // 	<> */}
							
							{/* <div className="shipment-item-table-item-info">
								<p className="shipment-item-table-item-topic-hash">
									<span className="shipment-header-phone-only">
										No: 
									</span>
									{item  ? item.length : null}
								</p>
								<p className="shipment-item-table-item-topic-date">
									<span className="shipment-header-phone-only">
										Observation: 
									</span>
									{item ? item.notes : null}
								</p>
								<p className="shipment-item-table-item-topic-location">
									<span className="shipment-header-phone-only">
										Location : 
									</span>
									{item ? item.currentlocation : null}
								</p>
								<p className="shipment-item-table-item-topic-time">
									<span className="shipment-header-phone-only">
										Time : 
									</span>
									{item ? item.timeevents : null}
								</p>
								<p className="shipment-item-table-item-topic-pieces">
									<span className="shipment-header-phone-only">
										Pieces: 
									</span>
									{item ? item.pieces : null} pieces
								</p>
							</div> */}
						{/* </> */}
					{/* // ))} */}
				{/* // </div> */}
			{/* // </div> */}
		</Container>
	);
};

export default ShipmentTableitem;
