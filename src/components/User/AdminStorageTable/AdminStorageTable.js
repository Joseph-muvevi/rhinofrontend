import React, { useState, useEffect } from "react";
import axios from "axios";
import AdminStorageContentTableCard from "./AdminStorageContentTableCard";
import "./adminstoragetable.css";

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

	return (
		<div className="admin-storage-table">
			<div className="admin-storage-table-content">
				{adminStorage ? (
					<AdminStorageContentTableCard storage={adminStorage} />
				) : null}
			</div>
		</div>
	);
};

export default AdminStorageTable;
