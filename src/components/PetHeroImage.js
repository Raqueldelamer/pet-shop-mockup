import PropTypes from 'prop-types';

// TODO: in storybook, create a story for this component
// update the value for src in the story
// The image is located in public/img/hero-dog.png
export default function PetHeroImage (props) {
  let image = props.src;
  return (
    <div className= "size-80 bg-gradient-to-b from-rose-300 flex-col items-center justify-center" >
        <img src={image} alt="hero-dog-img" />
      </div>
  );
};

PetHeroImage.propTypes = {
  src: PropTypes.string.isRequired,
};
