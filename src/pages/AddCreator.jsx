import supabase from "../client.js";
import {useNavigate} from "react-router";
import CreatorForm from "../forms/CreatorForm.jsx";

const AddCreator = () => {
  const navigate = useNavigate();

  const handleSubmit = async (formData) => {
    const {error} = await supabase.from("creators")
        .insert(formData);

    if(!error) {
      navigate("/")
    }
  }

  return (
      <CreatorForm onSubmit={handleSubmit} />
  )

};

export default AddCreator;
