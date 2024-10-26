import PropTypes from 'prop-types';

// finished this component based on the design in
// public/mockups/header-menu.png
export default function PetHeaderMenu(props) {
  const {menuItems} = props;
  return (
    <div className="bg-rose-500 text-white font-bold flex justify-around items-center w-full">
      
        <div><a href="/" >{menuItems[0]}</a></div>
        <div><a href="/about">{menuItems[1]}</a></div>
        <div>{menuItems[2]}</div>
        <div>{menuItems[3]}</div>
        <div>{menuItems[4]}</div>
    </div>
  );
}

PetHeaderMenu.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};
