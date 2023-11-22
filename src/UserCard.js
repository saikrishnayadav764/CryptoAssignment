import { useState, useEffect } from "react";

const UserCard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );
        const data = await response.json();
        setUserData(data.results[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-xl mx-auto bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white rounded-xl overflow-hidden shadow-lg p-8">
      {userData && (
        <div className="flex items-center space-x-6">
          <img
            className="w-32 h-32 object-cover object-center rounded-full border-4 border-white"
            src={userData.picture.large}
            alt={`${userData.name.title} ${userData.name.first} ${userData.name.last}`}
          />
          <div>
            <p className="text-3xl font-extrabold">{`${userData.name.title} ${userData.name.first} ${userData.name.last}`}</p>
            <p className="text-lg">{userData.gender}</p>
            <p className="text-lg">{userData.phone}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserCard;
