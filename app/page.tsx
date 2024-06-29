import Guest from '@/components/Guest'
import {	
	UserButton,
	SignedIn,
} from '@clerk/nextjs'
import { currentUser } from '@clerk/nextjs/server'


export default async function Home() {
  const user = await currentUser()
	if (!user) {
		return <Guest />
	}
	return (
		<>			
			<SignedIn>
				<UserButton />
      </SignedIn>
      <h3>Welcome, {user.firstName}</h3>
		</>
	)
}
