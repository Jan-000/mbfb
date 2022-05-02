import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import GroupCard from "../components/GroupCard";
import AddGroup from "../components/AddGroup";
import GoToSearch from "../components/GoToSearch";
import { AuthContext } from "../context/auth";

export default function GroupList() {
  const [groups, setGroups] = useState([]);
  const { user } = useContext(AuthContext);
  const storedToken = localStorage.getItem("authToken");



  // get all the groups from the backend / server
  const getAllGroups = () => {
    // request 'api/groups'
    // for every request to a project route we need to also send the token
    axios
      .get("/api/groups/groups", {
        headers: { Authorization: `Bearer ${storedToken}` },
      })
      .then((response) => {
        console.log(response.data);
        // set the state of groups
        setGroups(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let ownedGroups = groups.filter((group) => {
    if (group.owner === user._id) return true;
    else return false;
  });

  let joinedGroups = groups.filter((group) => {
    for (let i = 0; i < group.guests.length; i++) {
      if (group.guests[i]._id === user._id) return true;
    }
    return false;
  });

  useEffect(() => {
    getAllGroups();
  }, []);

const drol = () => {if (ownedGroups=="")
	return "none so far"}

  return (
    <>
      <div className="created-groups">
        <h3>Groups you, {user.name}, created</h3><br></br><br></br>
		
		{drol()}




        {
			ownedGroups.map((group) => (
          <GroupCard key={group._id} {...group} />
        ))}

      </div>

      <div className="joined-groups">
        <h3>Groups you joined</h3>
        {joinedGroups.map((group) => (
          <GroupCard key={group._id} {...group} />
        ))}
      </div>
      <p class="marker"> marker for GroupList.js</p>

      <AddGroup refreshGroups={getAllGroups} />

      <GoToSearch />
    </>
  );
}
