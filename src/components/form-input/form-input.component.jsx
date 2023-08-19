import './form-input.styles.scss';

const FormInput = ({...otherProps }) => {
    return (
        <div className="group">
            <input className="form-input" {...otherProps} />
            <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}  >{otherProps.label}</label>
        </div>
    )
}

export default FormInput;