import { BrowserRouter, Link } from "react-router-dom";



export const Navbar = () => {
  return (
    <div>
      <BrowserRouter>
        <Link to="/"> Home </Link>
        <Link to="/login"> Login </Link>
        <Link to="/connections"> Connections </Link>
        <Link to="/matching">Matching</Link>
      </BrowserRouter>
    </div>
  );
};
