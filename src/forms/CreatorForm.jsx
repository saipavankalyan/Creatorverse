import {useState} from "react";
import TextField from "../components/forms/TextField.jsx";
import TextArea from "../components/forms/TextArea.jsx";
import classes from "./forms.module.scss";
import formClasses from "../components/forms/forms.module.scss";
import Button from "../components/Buttons.jsx";

const formInitialValues = {
    name: "",
    imageURL: "",
    description: "",
    youtube: "",
    twitter: "",
    instagram: ""
}

// eslint-disable-next-line react/prop-types
const CreatorForm = ({initialValue = formInitialValues, onSubmit}) => {
    const [data, setData] = useState(initialValue);

    const onChange = (field, value) => setData(data => ({...data, [field]: value}))

    return (
        <form onSubmit={(e) => {e.preventDefault(); onSubmit(data)}}>
            <TextField name={"name"} value={data.name} label={"Name"} onEdit={(v) => onChange("name", v)} />
            <TextField name={"imageURL"} value={data.imageURL} label={"Image"} description={"Provide a link to an image of your creator. Be sure to include the http://"}
                       onEdit={(v) => onChange("imageURL", v)} />
            <TextArea name={"description"} value={data.description} label={"Description"} description={"Provide a description of the creator. Who are they? What makes them interesting?"}
                      onEdit={(v) => onChange("description", v)} />
            <h2 className={classes.subFormHeading}>SOCIAL MEDIA LINKS</h2>
            <p className={classes.description}>{"Provide at least one of the creator's social media links."}</p>
            <TextField name={"youtube"} value={data.youtube} label={"YouTube"} labelIconClass={"fa-brands fa-youtube"} onEdit={(v) => onChange("youtube", v)}
                       description={"he creator's YouTube handle (without the @)"} />
            <TextField name={"twitter"} value={data.twitter} label={"Twitter"} labelIconClass={"fa-brands fa-twitter"} onEdit={(v) => onChange("twitter", v)}
                       description={"he creator's Twitter handle (without the @)"} />
            <TextField name={"instagram"} value={data.instagram} label={"Instagram"} labelIconClass={"fa-brands fa-instagram"} onEdit={(v) => onChange("instagram", v)}
                       description={"he creator's Instagram handle (without the @)"} />
            <Button.Info type={"submit"} className={classes.submitButton}>SUBMIT</Button.Info>
        </form>
    )

}

export default CreatorForm;