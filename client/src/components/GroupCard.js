import React from 'react';
import { Link } from 'react-router-dom';
// import { startSession } from '../../../models/Project';


export default function GroupCard({ _id, startStation, endStation, numOfGuests, prices, ownerEmail}) {
	console.log("group card quests")
	return (
		<div className = "group-card-bgr">
			<Link to={`/groups/${_id}`} style={{textDecoration: "none"}}>
				<div>
					<p className='from'>From: { startStation } &nbsp;&nbsp;
					</p>
					<p className='to'>
					To: { endStation }</p>
					<p>Created by : { ownerEmail }</p>
				</div>
				<div className='group-bar'>
					<img alt = 'status' src = {`/${numOfGuests}.png`}/>
				</div>
			</Link>
			<p class="marker">marker for GroupCard component</p>
		</div>

	)
}
