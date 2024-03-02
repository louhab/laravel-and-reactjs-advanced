import { Outlet } from 'react-router-dom';
import Nav from './nav';
export default function layouts() {
  return (
      <>
        <Nav/>
        <main>
          <Outlet/>
        </main>
        <footer>footer</footer>
      </>
  )
}
