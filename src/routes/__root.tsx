import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'
const activeProps = {
    style : {
        fontweight : "bold"
    }
 }
export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
        <>
        <h1>myapp</h1>
        <ul>
            <li>
                <Link to='/'
                activeProps={activeProps}
                >Home</Link>
            </li>
            <li>
                <Link to='/register'
                activeProps={activeProps}
                >Resister</Link>
            </li>
        </ul>
        <Outlet />
        </>
    </React.Fragment>
  ),
})
