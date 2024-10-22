import PropTypes from "prop-types";

export default function PetCallToAction(props) {
  let { button }= props

  return (
    <div className="mt-20 ml-20">
      <button class="flex items-center px-10 py-2 bg-blue-100 text-black font-semibold rounded-md hover:bg-blue-500">
        Access Now
        <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 12h14m-7-7l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

PetCallToAction.propTypes = {
  ctaText: PropTypes.string.isRequired
};
