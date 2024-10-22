import PropTypes from 'prop-types';

// TODO: finish this component based on the design in
// public/mockups/header-menu.png
export default function PetHeaderMenu(props) {
  const {menuItems} = props;
  return (
    <div className="bg-rose-500 text-white flex justify-around items-center w-full">
      
        <div>{menuItems[0]}</div>
        <div>{menuItems[1]}</div>
        <div>{menuItems[2]}</div>
        <div>{menuItems[3]}</div>
    </div>
  );
}

PetHeaderMenu.propTypes = {
  menuItems: PropTypes.arrayOf(PropTypes.string).isRequired,
};
