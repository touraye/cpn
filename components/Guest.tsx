import { SignInButton } from "@clerk/nextjs";

const Guest = () => {
    return (<>
    <h1>Welcome</h1>
        <p>Please login to manage your transactions</p>
        <SignInButton /></>);
}
 
export default Guest;