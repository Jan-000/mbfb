import React from 'react';
import { Link } from 'react-router-dom';



export default function ChatCard({message, author, prp}) {
	return (
		<div>
			<br></br>
			{author} wrote as follows:
            <div>
                {message}
				Prp is : {prp}
            </div>
			<br></br>
		</div>

	)
}