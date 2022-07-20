import { faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import "../LogisticsForms.css";
import axios from "axios";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

const logisticsFormStyles = makeStyles({
	wrapper: {
		width: "80vw",
		marginLeft: "18vw"
	}
})


const LogisticsFormsContent = ({setModalIsOpen}) => {
	const [errors, setErrors] = useState("");
	
	
	const formik = useFormik({
		initialValues: {
			trackno:"",
			shippersfullname:"",
			departurecity:"",
			departurecountry:"",
			departuredate:"",
			consignfullnames:"",
			collectorfullname:"",
			collectoraddress:"",
			collectortel:"",
			itemsname:"",
			departuretime:"",
			arrivalcity:"",
			arrivalcountry:"",
			arrivaltime:"",
			arrivaldate:"",
			shippersemail:"",
			shippersidno:"",
			shipperstelephone:"",
			shipperscompany:"",
			shippersaddress:"",
			consigntelephone:"",
			consignemail:"",
			consigncompany:"",
			consignaddress:"",
			logisticstype:"",
			itemsweight:"",
			itemsweightunit:"",
			itemsproducttype:"",
			itemspieces:"",
			itemsquality:"",
			quantifiableunit:"",
			// events:""
		},
		validationSchema: Yup.object().shape({
			trackno:			Yup.string().required().min(3).max(100),
			shippersfullname:	Yup.string().required().min(3).max(100),
			shippersemail:		Yup.string().required().min(3).max(100),
			shipperscompany:	Yup.string().required().min(3).max(100),
			shippersidno:		Yup.string().required().min(3).max(100),
			shipperstelephone:	Yup.string().required().min(3).max(100),
			shippersaddress:	Yup.string().required().min(3).max(100),
			consignfullnames:	Yup.string().required().min(3).max(100),
			consignemail:		Yup.string().required().min(3).max(100),
			consigntelephone:	Yup.string().required().min(3).max(100),
			consigncompany:		Yup.string().required().min(3).max(100),
			consignaddress:		Yup.string().required().min(3).max(100),
			departurecity:		Yup.string().required().min(3).max(100),
			departurecountry:	Yup.string().required().min(3).max(100),
			departuredate:		Yup.string().required().min(3).max(100),
			departuretime:		Yup.string().required().min(3).max(100),
			collectorfullname:	Yup.string().required().min(3).max(100),
			collectortel:		Yup.string().required().min(3).max(100),
			collectoraddress:	Yup.string().required().min(3).max(100),
			itemsname:			Yup.string().required().min(3).max(100),
			arrivalcity:		Yup.string().required().min(3).max(100),
			arrivalcountry:		Yup.string().required().min(3).max(100),
			arrivaldate:		Yup.string().required().min(3).max(100),
			arrivaltime:		Yup.string().required().min(3).max(100),
			logisticstype:		Yup.string().required().min(3).max(100),
			itemsweight:		Yup.number().required().min(1).max(999999999),
			itemsweightunit:	Yup.string().required().min(3).max(100),
			itemsproducttype:	Yup.string().required().min(3).max(100),
			itemspieces:		Yup.number().required().min(1).max(999999999),
			quantifiableunit:	Yup.string().required().min(3).max(100),
			itemsquality:		Yup.string().required().min(3).max(100)
		// 	// events:				Yup.array()

		}),
		onSubmit: (values, { resetForm }) => {
			try {
				axios
					.post(
						// "https://rhinojohnbackend.herokuapp.com/api/logisticsrecords",
						// "http://localhost:9000/api/shipment/post",
						"http://localhost:7000/api/shipping/post",
						values
					)
					.then((res) => {
						// alert(JSON.stringify(values))
						alert("The response is",res)
					})
					.catch((err) => {
						console.log(err.response, "this is the error data");
						setErrors(err.response.data.error);
					});
					alert(JSON.stringify(values, null, 2));
					// console.log(values);
					resetForm({ values: "" });
				} catch (err) {
					console.log("Submit Error: ", err);
				}
			},
		});
		
		const classes = logisticsFormStyles()
		
		return (
			<Box clasName={classes.wrapper}>
			{console.log("The error state is",errors)}
				<div className="logistics-quotation-form">

				<div className="logistics-quotation-form-content">
					<form
						onSubmit={formik.handleSubmit}
						className="the-logistics-quotation-form">
						{errors ? (
							<div className="service-quotation-small-inputs">
								<div className="error-section">
									<FontAwesomeIcon
										icon={faExclamationTriangle}
										size="2x"
									/>
									<p className="error-section-p">{errors}</p>
								</div>
							</div>
						) : null}
						<div className="logistics-quotation-small-inputs">
							<div className="logistics-quotation-small-input-group">
								<label>Track number</label>
								<input
									className="logistics-input-fields"
									type="text"
									placeholder="Register a unique track number"
									name="trackno"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.trackno}
									required
								/>
								{formik.touched.trackno && formik.errors.trackno ? (
									<div className="error">
										{formik.errors.trackno}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Shipper Fullname</label>
								<input
									className="logistics-input-fields"
									type="text"
									placeholder="Enter Shipper's fullname"
									name="shippersfullname"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.shippersfullname}
									required
								/>
								{formik.touched.shippersfullname &&
								formik.errors.shippersfullname ? (
									<div className="error">
										{formik.errors.shippersfullname}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Shipper's Email</label>
								<input
									className="logistics-input-fields"
									type="email"
									placeholder="Shipper email"
									name="shippersemail"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.shippersemail}
									required
								/>
								{formik.touched.shippersemail && formik.errors.shippersemail ? (
									<div className="error">
										{formik.errors.shippersemail}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Shipper's Company</label>
								<input
									className="logistics-input-fields"
									type="text"
									placeholder="Shipper Company"
									name="shipperscompany"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.shipperscompany}
									required
								/>
								{formik.touched.shipperscompany && formik.errors.shipperscompany ? (
									<div className="error">
										{formik.errors.shipperscompany}
									</div>
								) : null}
							</div>
						
							<div className="logistics-quotation-small-input-group">
								<label>Shipper ID/Passport Number</label>
								<input
									className="logistics-input-fields"
									type="text"
									placeholder="Enter shipper's ID/Passport number"
									name="shippersidno"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.shippersidno}
									required
								/>
								{formik.touched.shippersidno &&
								formik.errors.shippersidno ? (
									<div className="error">
										{formik.errors.shippersidno}
									</div>
								) : null}
							</div>

							<div className="logistics-quotation-small-input-group">
								<label>Shipper Telephone Number</label>
								<input
									className="logistics-input-fields"
									type="tel"
									placeholder="Enter shipper's phone number"
									name="shipperstelephone"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.shipperstelephone}
									required
								/>
								{formik.touched.shipperstelephone &&
								formik.errors.shipperstelephone ? (
									<div className="error">
										{formik.errors.shipperstelephone}
									</div>
								) : null}
							</div>

							<div className="logistics-quotation-small-input-group">
								<label>Shipper's Address</label>
								<input
									className="logistics-input-fields"
									type="text"
									placeholder="Enter shipper's address"
									name="shippersaddress"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.shippersaddress}
									required
								/>
								{formik.touched.shippersaddress &&
								formik.errors.shippersaddress ? (
									<div className="error">
										{formik.errors.shippersaddress}
									</div>
								) : null}
							</div>
						
							<div className="logistics-quotation-small-input-group">
								<label>Consignee Fullnames</label>
								<input
									className="logistics-input-fields"
									type="text"
									placeholder="Enter consignee fullnames"
									name="consignfullnames"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.consignfullnames}
									required
								/>
								{formik.touched.consignfullnames &&
								formik.errors.consignfullnames ? (
									<div className="error">
										{formik.errors.consignfullnames}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Consignee Email</label>
								<input
									className="logistics-input-fields"
									type="email"
									placeholder="Consignee Email"
									name="consignemail"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.consignemail}
									required
								/>
								{formik.touched.consignemail &&
								formik.errors.consignemail ? (
									<div className="error">
										{formik.errors.consignemail}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Consignee Telephone</label>
								<input
									className="logistics-input-fields"
									type="tel"
									placeholder="Consignee Email"
									name="consigntelephone"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.consigntelephone}
									required
								/>
								{formik.touched.consigntelephone &&
								formik.errors.consigntelephone ? (
									<div className="error">
										{formik.errors.consigntelephone}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Consignee company</label>
								<input
									className="logistics-input-fields"
									type="text"
									placeholder="Enter consignee's company"
									name="consigncompany"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.consigncompany}
									required
								/>
								{formik.touched.consigncompany &&
								formik.errors.consigncompany ? (
									<div className="error">
										{formik.errors.consigncompany}
									</div>
								) : null}
							</div>
						
							<div className="logistics-quotation-small-input-group">
								<label>Consignee Address</label>
								<input
									className="logistics-input-fields"
									type="text"
									placeholder="Enter consignee's address"
									name="consignaddress"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.consignaddress}
									required
								/>
								{formik.touched.consignaddress &&
								formik.errors.consignaddress ? (
									<div className="error">
										{formik.errors.consignaddress}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Departure city</label>
								<input
									className="logistics-input-fields"
									type="text"
									placeholder="Enter the city of departure"
									name="departurecity"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.departurecity}
									required
								/>
								{formik.touched.departurecity &&
								formik.errors.departurecity ? (
									<div className="error">
										{formik.errors.departurecity}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Departure country</label>
								<input
									className="logistics-input-fields"
									type="text"
									placeholder="Enter the country of departure"
									name="departurecountry"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.departurecountry}
									required
								/>
								{formik.touched.departurecountry &&
								formik.errors.departurecountry ? (
									<div className="error">
										{formik.errors.departurecountry}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Date of departure</label>
								<input
									className="logistics-input-fields"
									type="date"
									placeholder="Enter the date of departure"
									name="departuredate"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.departuredate}
									required
								/>
								{formik.touched.departuredate &&
								formik.errors.departuredate ? (
									<div className="error">
										{formik.errors.departuredate}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Time of departure</label>
								<input
									className="logistics-input-fields"
									type="time"
									placeholder="Time in..."
									name="departuretime"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.departuretime}
									required
								/>
								{formik.touched.departuretime &&
								formik.errors.departuretime ? (
									<div className="error">
										{formik.errors.departuretime}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Collector's Fullname</label>
								<input
									className="logistics-input-fields"
									type="text"
									placeholder="Enter the collectors fullname"
									name="collectorfullname"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.collectorfullname}
									required
								/>
								{formik.touched.collectorfullname &&
								formik.errors.collectorfullname ? (
									<div className="error">
										{formik.errors.collectorfullname}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Collector's phone number</label>
								<input
									className="logistics-input-fields"
									type="text"
									placeholder="Enter collector's phone number"
									name="collectortel"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.collectortel}
									required
								/>
								{formik.touched.collectortel &&
								formik.errors.collectortel ? (
									<div className="error">
										{formik.errors.collectortel}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Collector's address</label>
								<input
									className="logistics-input-fields"
									type="text"
									placeholder="Enter collector's address"
									name="collectoraddress"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.collectoraddress}
									required
								/>
								{formik.touched.collectoraddress &&
								formik.errors.collectoraddress ? (
									<div className="error">
										{formik.errors.collectoraddress}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Name of the Item</label>
								<input
									className="logistics-input-fields"
									type="text"
									placeholder="Enter the name of the item to be shipped"
									name="itemsname"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.itemsname}
									required
								/>
								{formik.touched.itemsname &&
								formik.errors.itemsname ? (
									<div className="error">
										{formik.errors.itemsname}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Arrival city</label>
								<input
									className="logistics-input-fields"
									type="text"
									placeholder="What is your city..."
									name="arrivalcity"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.arrivalcity}
									required
								/>
								{formik.touched.arrivalcity &&
								formik.errors.arrivalcity ? (
									<div className="error">
										{formik.errors.arrivalcity}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Arrival country</label>
								<input
									className="logistics-input-fields"
									type="text"
									placeholder="What is your country..."
									name="arrivalcountry"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.arrivalcountry}
									required
								/>
								{formik.touched.arrivalcountry &&
								formik.errors.arrivalcountry ? (
									<div className="error">
										{formik.errors.arrivalcountry}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Estimated Arrival Date</label>
								<input
									className="logistics-input-fields"
									type="date"
									placeholder="Enter the estimated arrival date"
									name="arrivaldate"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.arrivaldate}
									required
								/>
								{formik.touched.arrivaldate &&
								formik.errors.arrivaldate ? (
									<div className="error">
										{formik.errors.arrivaldate}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Estimated Arrival Time</label>
								<input
									className="logistics-input-fields"
									type="time"
									placeholder="Arrival time, If not arrived leave blank"
									name="arrivaltime"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.arrivaltime}
								/>
								{formik.touched.arrivaltime &&
								formik.errors.arrivaltime ? (
									<div className="error">
										{formik.errors.arrivaltime}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Mode Of Transport</label>
								<input
									className="logistics-input-fields"
									type="text"
									placeholder="Enter the mode of transport"
									name="logisticstype"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.logisticstype}
								/>
								{formik.touched.logisticstype &&
								formik.errors.logisticstype ? (
									<div className="error">
										{formik.errors.logisticstype}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Items Weight</label>
								<input
									className="logistics-input-fields"
									type="number"
									placeholder="Enter the weight of the item"
									name="itemsweight"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.itemsweight}
									required
								/>
								{formik.touched.itemsweight && formik.errors.itemsweight ? (
									<div className="error">
										{formik.errors.itemsweight}
									</div>
								) : null}
							</div>
							<div className="logistics-quotation-small-input-group">
								<label>Weight unit</label>
								<select
									type="text"
									name="itemsweightunit"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.itemsweightunit}
									required>
									<option
										value=""
										disabled
										label="Please select an option"
									/>
									<option value="kilograms" label="Kilograms" />
									<option value="tonnes" label="Tonnes" />
									<option value="pounds" label="pounds" />
									<option value="grams" label="grams" />
									{/* <option value="l" label="Liters" />
									<option value="gal" label="Gallons" /> */}
								</select>
								{formik.touched.itemsweightunit &&
								formik.errors.itemsweightunit ? (
									<div className="error">
										{formik.errors.itemsweightunit}
									</div>
								) : null}
							</div>

							
							<div className="logistics-quotation-small-input-group">
								<label>Product type</label>
								<select
									type="text"
									name="itemsproducttype"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.itemsproducttype}
									required>
									<option value="" disabled label="Please select an option"/>
									<option value="solid" label="Solid"/>
									<option value="liquid" label="Liquid" />
									<option value="gas" label="Gas" />
									<option value="plasma" label="Plasma" />
								</select>
								{formik.touched.itemsproducttype &&
								formik.errors.itemsproducttype ? (
									<div className="error">
										{formik.errors.itemsproducttype}
									</div>
								) : null}
							</div>
					
							<div className="logistics-quotation-small-input-group">
								<label> Number Of Items </label>
								<input
									className="logistics-input-fields"
									type="number"
									placeholder="enter the number of items"
									name="itemspieces"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.itemspieces}
									required
								/>
								{formik.touched.itemspieces && formik.errors.itemspieces ? (
									<div className="error">
										{formik.errors.itemspieces}
									</div>
								) : null}
							</div>
					
							<div className="logistics-quotation-small-input-group">
								<label> Item's Qualility </label>
								<input
									className="logistics-input-fields"
									type="text"
									placeholder="enter the number of items"
									name="itemsquality"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.itemsquality}
									required
								/>
								{formik.touched.itemsquality && formik.errors.itemsquality ? (
									<div className="error">
										{formik.errors.itemsquality}
									</div>
								) : null}
							</div>

							<div className="logistics-quotation-small-input-group">
								<label>Pieces Grouped unit</label>
								<input
									className="logistics-input-fields"
									type="text"
									placeholder="Unit eg bags"
									name="quantifiableunit"
									onChange={formik.handleChange}
									onBlur={formik.handleBlur}
									value={formik.values.quantifiableunit}
									required
								/>
								{formik.touched.quantifiableunit && formik.errors.quantifiableunit ? (
									<div className="error">
										{formik.errors.quantifiableunit}
									</div>
								) : null}
							</div>

							
						</div>

						<br />
						<button onClick={(formik) => formik.handleSubmit} type="submit">
							Submit <FontAwesomeIcon icon={faPaperPlane} />
						</button>
						<button type="submit" onClick={() => setModalIsOpen(false)}>
							Close 
						</button>
					</form>
				</div>
			</div>
		</Box>
	);
};

export default LogisticsFormsContent;
