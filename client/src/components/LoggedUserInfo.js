import GoToSearch from "../components/GoToSearch"

import React, { useContext } from 'react'
import { AuthContext } from "../context/auth"



export default function Home() {

	const {user}  = useContext(AuthContext)



	return (
	<> {user ?  <p>You logged as:  {user.email}<br></br>this is redeployment #4
		</p> : <p>Unlogged in</p>
		}
		</>



	//	<GoToSearch />
)
}