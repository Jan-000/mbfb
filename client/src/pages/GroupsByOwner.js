import React, { useEffect, useState, useContext } from 'react'
import axios from 'axios';
import GroupCard from '../components/GroupCard';
//import AddGroup from '../components/AddGroup';
import GoToSearch from '../components/GoToSearch'
import { AuthContext } from '../context/auth';



export default function GroupListt() {

	const [groups, setGroups] = useState([])
	const { user } = useContext(AuthContext)
	const storedToken = localStorage.getItem('authToken')

	// get all the groups from the backend / server
	const getAllGroups = () => {
		// request 'api/groups'
		// for every request to a project route we need to also send the token
		axios.get('/api/groups/groups', { headers: { Authorization: `Bearer ${storedToken}` } })
			.then(response => {
				console.log(response.data)
				// set the state of groups
				setGroups(response.data)

			})
			.catch(err => {
				console.log(err)
			})
	}
	let ownedGroups = groups.filter((group) => {

		if (group.owner === "") {
			return true}
		else {
		return false}
	} )
	console.log("owned groups are", ownedGroups)

	

	useEffect(() => {
		getAllGroups()
	}, [])

	return (
		<>
			<div className='created-groups'>
				<h3>Groups created by maybe {user.name}</h3>
				{ownedGroups.map(group => <GroupCard key={group._id} {...group} />)}
			</div>
			<div>
			{
			ownedGroups.map((group) => (
          <GroupCard key={group._id} {...group} />
        ))}
			</div>

			{/* <AddGroup refreshGroups={getAllGroups} /> */}
			<GoToSearch />
			<p class="marker">test marker</p>
		</>
	)
}
