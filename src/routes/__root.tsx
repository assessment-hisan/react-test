import * as React from 'react'
import { Link, Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: () => (
    <React.Fragment>
        <>
        <h1>myapp</h1>
        <ul>
            <li>
                <Link to='/'
               
                >Home</Link>
            </li>
            <li>
                <Link to='/register'
                
                >Resister</Link>
            </li>
        </ul>
        <Outlet />
        </>
    </React.Fragment>
  ),
})
