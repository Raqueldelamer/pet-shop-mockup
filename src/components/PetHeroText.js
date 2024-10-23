import PropTypes from "prop-types";

export default function PetHeroText(props) {
    const { title, description } = props;
    return (
        < div >
            <h1 className="text-6xl font-bold ml-2">{title}</h1>
            <h2 className="text-white text-3xl font-bold p-2">{description}</h2>
        </div>

    );
}

PetHeroText.PropTypes = { 
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
};