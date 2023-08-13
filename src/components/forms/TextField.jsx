import classes from "./forms.module.scss";
import clsx from "clsx";

// eslint-disable-next-line react/prop-types
const TextField = ({label, name, labelIconClass, description, value, onEdit}) => {
    return (
        <div className={classes.formField}>
            <label className={classes.label}>
                {labelIconClass && <span className={clsx(classes.labelIcon, labelIconClass)} />}
                {label}
            </label>
            {description && <p className={classes.description}>{description}</p>}
            <input className={classes.input} type={"text"} name={name} value={value} onChange={(e) => onEdit(e.target.value)} />
        </div>
    )
}

export default TextField;