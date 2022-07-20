import {
	faGem,
	faInfoCircle,
	faShippingFast,
	faTable,
	faWarehouse,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { HashLink } from "react-router-hash-link";
import React, { useState, useEffect } from "react";
import "../dashboard.css";
import axios from "axios";
import { Box, Grid } from "@mui/material";
import DashboardCard from "../DashBoardHome/dashboardCard/dashboardCard";
import { dashboardHorizontalCards } from "./dashboardCardsData"

const DashboardCards = () => {
	const [logdata, setLogData] = useState([]);
	const [storageData, setStorageData] = useState([]);
	const [quotation, setQuotation] = useState([]);
	const [logquotation, setLogQuotation] = useState([]);
	const [storageQuotation, setStorageQuotation] = useState([]);
	const [productQuotation, setProductQuotation] = useState([]);

	const getLogData = () => {
		axios
			// .get("https://rhinojohnbackend.herokuapp.com/api/logisticsrecords")
			.get("http://localhost:7000/api/shipping/all")
			.then((res) => {
				setLogData(res.data);
			})
			.catch((err) => console.log(err));
	};

	const getQuotationData = () => {
		axios
			// .get("https://rhinojohnbackend.herokuapp.com/api/quotation")
			.get("http://localhost:7000/api/quotation/all")
			.then((res) => {
				setQuotation(res.data);
			})
			.catch((err) => console.log(err));
	};

	const getStorageData = () => {
		axios
			// .get("https://rhinojohnbackend.herokuapp.com/api/storageshipment")
			.get("http://localhost:7000/api/storage/all")
			
			.then((res) => {
				setStorageData(res.data);
			})
			.catch((err) => console.log(err));
	};

	const getLogisticsQuotation = () => {
		axios
			.get(
				// "https://rhinojohnbackend.herokuapp.com/api/logisticsquotation"
				"http://localhost:7000/api/shipmentquotation/all"
			)
			.then((res) => {
				setLogQuotation(res.data);
			})
			.catch((err) => console.log(err));
	};

	const getStorageQuotation = () => {
		axios
			// .get("https://rhinojohnbackend.herokuapp.com/api/storagequotation")
			.get("http://localhost:7000/api/storagequotation/all")
			.then((res) => {
				setStorageQuotation(res.data);
			})
			.catch((err) => console.log(err));
	};

	const getProductQuotation = () => {
		axios
			// .get("https://rhinojohnbackend.herokuapp.com/api/productquotation")
			.get("http://localhost:7000/api/productquotation/all")
			.then((res) => {
				setProductQuotation(res.data);
			})
			.catch((err) => console.log(err));
	};

	useEffect(() => {
		getLogData();
		getStorageData();
		getQuotationData();
		getLogisticsQuotation();
		getStorageQuotation();
		getProductQuotation();
	}, []);

	return (
		<div className="dashboard-cards">
				<Grid spacing={2} container>
					{
						dashboardHorizontalCards.map(item => (
							<Grid item lg={4} sm={12} key={item.id}>
								<DashboardCard 
									icon={item.icon}
									title={item.title}
									path={item.path}
									text={item.text}
								/>
							</Grid>
						))
					}
				</Grid>
		</div>
	);
};

export default DashboardCards;
