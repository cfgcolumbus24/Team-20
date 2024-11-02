import { BrowserRouter, Link } from "react-router-dom";



export const Navbar = () => {
  return (
    <BrowserRouter>
      <div>
        <Link to="/"> Home </Link>
        <Link to="/login"> Login </Link>
        <Link to="/matching">Matching</Link>
      </div>
    </BrowserRouter>
  );
};
