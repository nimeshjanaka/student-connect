"use client"
import  useStore  from "../../store/useStore";

import Persons from "../../components/chat/persons"
const ChatList = () => {

    const setPerson = useStore(state => state.setPerson)

    const handleUserClick = (user) => {
        setPerson(user)
      };

    return ( 
        <div className="rounded-md p-10">
       
            <Persons onPersonClick={handleUserClick}/>

        </div>
     );
}
 
export default ChatList;