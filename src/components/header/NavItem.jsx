const NavItem = ({ name }) => {
  return (
    <li>
      <a className="text-white" href="#">
        {name}
      </a>
    </li>
  );
};

export default NavItem;
