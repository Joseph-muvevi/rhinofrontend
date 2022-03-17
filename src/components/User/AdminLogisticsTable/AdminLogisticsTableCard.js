import React from 'react'
import "./adminlogisticstable.css"
import AdminLogisticsTableContent from './AdminLogisticsTableContent'
import AdminLogisticsTableHeader from './AdminLogisticsTableHeader'

const AdminLogisticsContentTableCard = ({logistics}) => {
	const logisticsItems = logistics
 

	// const lengthOf = logisticsItems.length


	return (
		<div className="admin-logistics-table-card">
			{
				logisticsItems ? (
					<>
						<AdminLogisticsTableHeader/>
						{
							logisticsItems ? logisticsItems.map((item, lengthOf) => (
								<>
									<AdminLogisticsTableContent data = {item} length = {lengthOf}/> 
									
								</>
							)) : <p>No items yet</p>
						}
					</>
				) : <p> Items doesn't exist yet </p>
			}
		</div>
	)
}

export default AdminLogisticsContentTableCard
