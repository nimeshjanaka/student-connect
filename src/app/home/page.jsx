// import React from "react";

import Card from "../../components/home/card";

// const page = () => {
//   return (
//     <div>
//       <Card />
//     </div>
//   );
// };

// export default page;

import { auth } from "../../auth";
import { redirect } from "next/navigation";
import Logout from "../../components/Authentication/logout"

const Home = async () => {
  const session = await auth();
  if (!session?.user) redirect("/authentication/login");

  const { name, image } = session.user;

  return (
    <div>
      <h1>{session?.user?.name}</h1>

      {name ? (
        <div>
          <Card />
        </div>
      ) : (
      <div>
       Hello
      </div>)}
      <Logout/>
    </div>
  );
};

export default Home;
