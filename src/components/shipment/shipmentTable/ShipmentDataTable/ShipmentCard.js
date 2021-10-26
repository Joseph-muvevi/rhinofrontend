import React, {useState, useEffect} from 'react'
import ShipmentTableHeader from './ShipmentTableHeader'
import ShipmentTableContent from './ShipmentTableContent'
import moment from "moment"
// import "../../shipment.css"
import "./shipmentdatatable.css"
// import StorageTableHeader from '../StorageTable/StorageTableHeader'

const ShipmentCard = ({result, filtered}) => {

	// const [dateList, setDateList] = useState([])

	let filter = filtered

	// let filteredDateArr 

	return (
		<div className="shipment-card"> 
			<div className="shipment-card-content">
			{
				filtered ? (
					<>
						<div className="track-shipment-top-info">
							<h2 className="track-shipment-top-h2">
								Track Shipments
							</h2>
							<p className="track-shipment-top-p">
								Our online results give you real time, detailed progress 
								as your shipment speeds through our logistics network.
							</p>
						</div>
						{
							result? <ShipmentTableHeader headers = {result}/> : (
								<p className="terniary-condition-p">
									Track your shipment
								</p>
							)
						}
						{
							filter ? filter.map(filterResults => 
									(<ShipmentTableContent 
										array = {filterResults} 
										filtered = {filtered}
										results = {result} 
										dates ={filterResults.createdAt}  /> )) 
									: null
						}

						{
							console.log(typeof(filtered.createdAt), "i am the content date")
						/* {
							filter.map(item => {console.log("we are fetched dates", item.date)})
						} */}
					</>
				) : <p className="terniary-condition-p">
						Track your shipment
					</p>
			}
			</div>
			{console.log("I am the result underneath track",filtered)}
		</div>
	)
}

export default ShipmentCard
