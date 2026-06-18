// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { path: "/", label: "Home" },
//     { path: "/about", label: "About Us" },
//     { path: "/consultancy", label: "Consultancy" },
//     { path: "/land", label: "Land" },
//     { path: "/finance", label: "Finance" },
//     { path: "/export", label: "Export" },
//     { path: "/bank-loan", label: "Bank Loan" },
//     { path: "/contact", label: "Contact" },
//   ];

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         {/* Logo */}
//         <Link to="/" className="navbar-logo">
//           <span className="logo-text">Eagle Info Global</span>
//         </Link>

//         {/* Toggle Button (☰ Menu) */}
//         <button
//           className="menu-btn"
//           onClick={() => setIsOpen(!isOpen)}
//         >
//           ☰ 
//         </button>

//         {/* Menu Items */}
//         <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
//           {navItems.map((item) => (
//             <Link
//               key={item.path}
//               to={item.path}
//               className="navbar-item"
//               onClick={() => setIsOpen(false)}
//             >
//               {item.label}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;




// import { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css";
// import logo from "../assets/eaglelogo.png"; // <-- adjust path where your logo file is placed

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { path: "/", label: "Home" },
//     { path: "/about", label: "About Us" },
//     { path: "/consultancy", label: "Consultancy" },
//     { path: "/land", label: "Land" },
//     { path: "/finance", label: "Finance" },
//     { path: "/export", label: "Export" },
//     { path: "/bank-loan", label: "Bank Loan" },
//     { path: "/contact", label: "Contact" },
//   ];

//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         {/* Logo + Text */}
//         <Link to="/" className="navbar-logo">
//           <img src={logo} alt="Eagle Info Global Logo" className="logo-img" />
//           <span className="logo-text">Eagle Info Global</span>
//         </Link>

//         {/* Toggle Button (☰ Menu) */}
//         <button className="menu-btn" onClick={() => setIsOpen(!isOpen)}>
//           ☰
//         </button>

//         {/* Menu Items */}
//         <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
//           {navItems.map((item) => (
//             <Link
//               key={item.path}
//               to={item.path}
//               className="navbar-item"
//               onClick={() => setIsOpen(false)}
//             >
//               {item.label}
//             </Link>
//           ))}
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;


import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/eaglecard.jpg";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About Us" },
    { path: "/consultancy", label: "Consultancy" },
    { path: "/land", label: "Land" },
    { path: "/finance", label: "Finance" },
    { path: "/export", label: "Import & Export" },
    { path: "/bank-loan", label: "Bank Loan" },
    { path: "/contact", label: "Contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        {/* Logo */}
        <NavLink to="/" className="navbar-logo">
          <img src={logo} alt="Eagle Logo" className="logo-img" />
        </NavLink>

        {/* Toggle Button */}
        <button
          className="menu-btn"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Menu */}
        <div className={`navbar-menu ${isOpen ? "active" : ""}`}>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                isActive ? "navbar-item active" : "navbar-item"
              }
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;