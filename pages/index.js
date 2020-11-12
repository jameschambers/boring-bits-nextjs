import Head from 'next/head'
import Button from '../components/Button'
import Heading from '../components/Heading'
import { useAuth } from '../services/AuthContext'
import { membersOnly } from '../services/TokenService'

const Dashboard = () => {
  const [user, dispatch] = useAuth();
  return (
    <>
      <Head>
        <title>Dashboard</title>
      </Head>
      <Heading 
        type="h1"
        text={`Logged in as ${user.email}`}
      />
      <Button 
        label="Logout"
        type="link"
        href='/logout'
      />
    </>
  )
}

export async function getServerSideProps(context) {
  membersOnly(context)
  return { props: {} };
}

export default Dashboard
