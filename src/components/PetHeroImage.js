import PropTypes from 'prop-types';
//import PetHeroImage from './PetHeroImage';

// TODO: in storybook, create a story for this component
// update the value for src in the story
// The image is located in public/img/hero-dog.png
export default function PetHeroImage (props) {
  let image = props.src;
  return (
    <div className= "size-80 p-1 flex-col items-center justify-center" >
      <div class="card justify-center">
        <center><img src={image} alt="hero-dog" /></center> 
      </div>
    </div>
  );
};

PetHeroImage.propTypes = {
  src: PropTypes.string.isRequired,
};
