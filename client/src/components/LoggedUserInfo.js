import GoToSearch from "../components/GoToSearch"

import React, { useContext } from 'react'
import { AuthContext } from "../context/auth"



export default function Home() {

	const {user}  = useContext(AuthContext)



	return (
	<> {user ?  <p>You logged as email:<b>  {user.email}</b> and name :<b> {user.name}</b><br></br>This is deployment #3 <br></br> Education purpose only.
		</p> : <p>Unlogged in</p>
		}
		</>



	//	<GoToSearch />
)
}