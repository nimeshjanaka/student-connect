"use client"
import { doLogout } from "../../app/actions/index";
import { Button } from "../ui/button";
const Logout = () => {
    return ( 
        <div>
            <form action={doLogout}>
                <Button type="submit">
                    Logout
                </Button>
            </form>
        </div>
     );
}
 
export default Logout;
<div>
    Logout
</div>