import PropTypes from 'prop-types';

// Updated this component to match the design in public/mockups/amigo-counter.png
export default function PetCounter(props) {
  const { images, numberOfPets } = props;
  return (
    <div className="bg-rose-500">
      <div className="flex">
        {images.map((image, index) => (
          <img 
              key={index}
              src={image}
              alt={`Pet ${index + 1}`}
              className="-ml-2" />
        ))}
      </div>
      <span className="italic text-2xl text-white font-bold">SO MANY PETS! {numberOfPets} Pets in your City! </span>
    </div>
  );
};

PetCounter.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  numberOfPets: PropTypes.number.isRequired,
};
