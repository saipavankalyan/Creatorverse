import classes from "./forms.module.scss";

// eslint-disable-next-line react/prop-types
const TextArea = ({label, name, description, value, onEdit}) => {
    return (
        <div className={classes.formField}>
            <label className={classes.label}>
                {label}
            </label>
            {description && <p className={classes.description}>{description}</p>}
            <textarea name={name} className={classes.input} rows={4}  value={value} onChange={(e) => onEdit(e.target.value)} />
        </div>
    )
}

export default TextArea