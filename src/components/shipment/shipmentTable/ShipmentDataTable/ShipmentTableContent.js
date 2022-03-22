import React, { useState, useEffect } from "react";
import "../../shipment.css";
import moment from "moment";
import { Box, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";

const ShipmentTableContent = ({key, item }) => {
	// const content = array;

	const [date, setDate] = useState("")

		
	const tableContentInfo = makeStyles((theme) => ({
		wrapper: {
			width: "80vw",
			margin: "auto",
			borderBottomLeftRadius: 2,
			borderBottomRightRadius: 2,
		},
		contentWrapper: {
			padding: "10px"
		}
	}))


	const listItem = [1]

	// useEffect(() => {
	// 	setDate(content.currentdate)
	// }, []);


	const classes = tableContentInfo()

	const dateString = moment(date).format("dddd MMMM Do YYYY");
	// console.log(dateString, "the date string")

	return (
		<>
			<Box className={classes.wrapper}>
				
				<Box>
					{console.log(item)}
				</Box>
			</Box>




			<div key={item ? item._id : null} className="shipment-content-table">
				<div className="shipment-content-table-content">
					{/* {
				content.createdAt !== content.date ? (
					): <p>There is nothin here</p>
				} */}

					{	
						listItem.length <= 1 ? listItem.map ( 
							el => 
							<div className="shipment-content-table-content-topic">
								<p className="shipment-content-table-content-topic-hash">#</p>
								<p className="shipment-content-table-content-topic-date">
									{/* {content ? dateString.toString()  : null} */}
									{/* {content ? content._id  : null} */}
								</p>
								<p className="shipment-content-table-content-topic-location">
									Location
								</p>
								<p className="shipment-content-table-content-topic-time">Time</p>
								<p className="shipment-content-table-content-topic-pieces">
									Pieces
								</p>
							</div>
						) : null
					}

						<>
							<div className="shipment-content-table-content-info">
								<p className="shipment-content-table-content-topic-hash">
									<span className="shipment-header-phone-only">
										No: 
									</span>
									{key}
								</p>
								<p className="shipment-content-table-content-topic-date">
									<span className="shipment-header-phone-only">
										Observation: 
									</span>
									{item.notes}
								</p>
								<p className="shipment-content-table-content-topic-location">
									<span className="shipment-header-phone-only">
										Location : 
									</span>
									{item.currentlocation}
								</p>
								<p className="shipment-content-table-content-topic-time">
									<span className="shipment-header-phone-only">
										Time : 
									</span>
									{item.timeevents}
								</p>
								<p className="shipment-content-table-content-topic-pieces">
									<span className="shipment-header-phone-only">
										Pieces: 
									</span>
									 pieces
								</p>
							</div>
						</>
				</div>
			</div>
		</>
	);
};

export default ShipmentTableContent;
