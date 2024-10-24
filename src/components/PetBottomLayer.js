import PropTypes from 'prop-types';

export default function PetBottomLayer ( props ) {
    return (
        <div className='justify-center'>
            {props.PetBottomLayer}
        </div>
    );
}

PetBottomLayer.PropTypes = {
    src: PropTypes.string.isRequired,
};