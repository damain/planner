import React,{useContext} from 'react'
import { AuthContext } from '../context/AuthContext'

const Layout: React.FC = ({children}) => {
    const user = useContext(AuthContext)
    return (
        <>
            {user === 'Loading' ? 
                <div>...Authenticating</div>:
                !user ? 
                <div>redirect to login</div>:
                <div>{children}</div>
            }
        </>
    )
}

export default Layout
