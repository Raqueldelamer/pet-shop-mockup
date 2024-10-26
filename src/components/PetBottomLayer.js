import PropTypes from 'prop-types';

export default function PetBottomLayer ( props ) {
    let image = props.src;
    return (
        <div className='justify-center p-4'>
            <img src={image} alt="animal bottom layer" />
        </div>
    );
}

PetBottomLayer.PropTypes = {
    src: PropTypes.string.isRequired,
};