import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/auth"

export default function SearchGroup(props) {
  const [startStation, setStartStation] = useState("");
  const [endStation, setEndStation] = useState("");
  const [date, setDate] = useState("");
  const [owner, setOwner] = useState("");
  const [ownerNamex, setOwnerNamex] = useState("");
  const [ownerEmail, setOwnerEmail]= useState("")
  const [allGroups, setAllGroups] = useState(null);


  const storedToken = localStorage.getItem("authToken");

  useEffect(() => {
    axios
      .get("/api/groups/groups", {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((groups) => {
        console.log("this is groups", groups);
        setAllGroups(groups);
      });
  }, []);
  console.log("this is allGroups: ", allGroups);

  let dynamicSearch;

  if (allGroups) {
    
    dynamicSearch = allGroups.data.filter((group) => {
      if (
        group.date.includes(date) &&
        group.endStation.includes(endStation) &&
        group.startStation.includes(startStation)&&
        group.owner.includes(owner)&&
        group.ownerName.includes(ownerNamex)&&
        group.ownerEmail.includes(ownerEmail)
      )
        return group;
    });

  }

  if (allGroups === null) {
    return <>"Loading.."</>;
  }

  return (
    <>
      <div className="search-train">
        <h1>Search for a train</h1>

        <label htmlFor="startStation">From: </label>
        <input
          id="startStation"
          type="text"
          value={startStation}
          onChange={(e) => setStartStation(e.target.value)}
        />
        <br></br>
        <br></br>
        <label htmlFor="endStation">To: </label>
        <input
          id="endStation"
          type="text"
          value={endStation}
          onChange={(e) => setEndStation(e.target.value)}
        />
        <br></br>
        <br></br>

        <label htmlFor="date">Date: </label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <br></br>
        <br></br>

        <label htmlFor="owner">Owner (id): </label>
        <input
          id="owner"
          type="text"
          value={owner}
          onChange={(e) => setOwner(e.target.value)}
        />

        <br></br>
        <br></br>

        <label htmlFor="ownerNamex">OwnerNamex : </label>
        <input
          id="ownerNamex"
          type="text"
          value={ownerNamex}
          onChange={(e) => setOwnerNamex(e.target.value)}
        />
         <br></br>
        <br></br>

        <label htmlFor="ownerEmail">Owner Mail: </label>
        <input
          id="ownerEmail"
          type="email"
          value={ownerEmail}
          onChange={(e) => setOwnerEmail(e.target.value)}
        />
        <p class="marker">marker for SearchGroup.js</p>


      </div>
      <div className="search-dyn-list">
        {dynamicSearch.map((group) => {
          let _id = group._id;
          return (
            <>
              <div className="search-dyn-element">
                <Link to={`/groups/${_id}`} style={{ textDecoration: "none" }}>
                  <h2 className="element-date">Date: {group.date}</h2>
				  
                  <div className="element-stations">
                    <h2 className="from">From:<h2 className="start"> {group.startStation}</h2></h2>
                    <h2 className="to">To:<h2 className="end">{group.endStation}</h2> </h2>
                    <h4 className="to">Creator:
                    {group?.ownerName&& <> {group.ownerName}</>}
                    
                    </h4>
                  </div>
                </Link>
                <a href="/groupex">
                Creator:
                    {group?.ownerName&& <> {group.ownerName}</>}</a>
                    

              </div><p class="marker">marker for anotherSearchGroup.js</p>
            </>
          );
        })}
      </div>
    </>
  );
}
