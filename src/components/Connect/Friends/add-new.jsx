import NewFriends from "./new-friends";
import SearchFriends from "./search-friends";

const AddNew = () => {
  return (
    <div> 
        <div className="flex justify-center ">
        <SearchFriends />
        </div>

      <NewFriends />
    </div>
  );
};

export default AddNew;
