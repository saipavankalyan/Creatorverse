import ContentCreator from "../components/ContentCreator.jsx";
import {useEffect, useState} from "react";
import supabase from "../client.js";
import {useParams, useNavigate} from "react-router";

const ViewCreator = () => {
  let navigate = useNavigate();
  const {id} = useParams()
  const [creator, setCreator] = useState(null)

  useEffect(() => {
    const fetchCreator = async () => {
      const {data, error} = await supabase.from("creators")
          .select()
          .eq('id', id)

      if(!error) {
        setCreator(data[0]);
      }
    }

    fetchCreator();
  }, []);

  if(!creator) {
    return null;
  }

  const handleDelete = async () => {
    const {error} = await supabase.from("creators")
        .delete()
        .eq("id", id);

    if(!error) {
      navigate("/");
    }
  }

  return <ContentCreator {...creator} onDelete={handleDelete} />;
};

export default ViewCreator;
