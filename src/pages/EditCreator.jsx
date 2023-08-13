import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import supabase from "../client.js";
import CreatorForm from "../forms/CreatorForm.jsx";

const EditCreator = () => {
  const {id} = useParams();
  const [creator, setCreator] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDetail = async () => {
      const {data, error} = await supabase.from("creators")
          .select()
          .eq("id", id);

      if(!error) {
        setCreator(data[0]);
      }
    }

    fetchDetail();
  }, []);

  const onSubmit = async ({id, ...formData}) => {
    const {error} = await supabase.from("creators")
        .update(formData)
        .eq("id", id);

    if(!error) {
      navigate(`/${id}`);
    }
  }

  if(!creator) {
    return null;
  }

  return (
      <CreatorForm initialValue={creator} onSubmit={onSubmit} />
  )
};

export default EditCreator;
