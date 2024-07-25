import { useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    name: "",
    count: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (user.name.trim() === "") return; // Prevent adding empty names
    setUsers([...users, user]);
    setUser({
      name: "",
      count: 0,
    });
  };

  const addcount = (index) => {
    const updateduser = users.map((eachuser, i) => {
      if (i === index) {
        return {
          ...eachuser,
          count: eachuser.count + 1,
        };
      }
      return eachuser;
    });

    setUsers(updateduser);
  };

  const subcount = (index) => {
    const newusers = users.map((eachuser, i) => {
      if (i === index) {
        return {
          ...eachuser,
          count: eachuser.count > 0 ? eachuser.count - 1 : 0,
        };
      }
      return eachuser;
    });

    setUsers(newusers);
  };

  const sortedlist = [...users].sort((x, y) => y.count - x.count);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          value={user.name}
          onChange={(e) => {
            setUser((prevstate) => {
              return {
                ...prevstate,
                name: e.target.value,
              };
            });
          }}
        />
        <button type="submit">Submit</button>
      </form>
      <div>
        <h1>User Info</h1>
        <div>
          {sortedlist.map((eachUser, index) => (
            <div key={index}>
              <div>{eachUser.name}</div>
              <div>
                <button
                  onClick={() => {
                    addcount(index);
                  }}
                >
                  Add
                </button>
                <div>{eachUser.count}</div>
                <button
                  onClick={() => {
                    subcount(index);
                  }}
                >
                  Subtract
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
