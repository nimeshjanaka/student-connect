import Card from "../../components/home/card";
import { auth } from "../../auth";
import { redirect } from "next/navigation";

const Home = async () => {
  const session = await auth();
  if (!session?.user) redirect("/authentication/login");

  const { name, image } = session.user;

  return (
    <div>
      {name ? (
        <div>
          <Card />
        </div>
      ) : null}
    </div>
  );
};

export default Home;
