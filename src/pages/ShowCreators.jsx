import {useEffect, useState} from "react";
import supabase from "../client.js";
import classes from "./showCreators.module.scss";
import CreatorCard from "../components/CreatorCard.jsx";

const ShowCreators = () => {
  const [creators, setCreators] = useState([]);

  useEffect(() => {

    const fetchCreators = async () => {
        const {data,error } = await supabase.from("creators").select();

        if(!error) {
          setCreators([...data])
        }
    }

    fetchCreators();
  }, []);

    return (
        <div className={classes.page}>
            {creators.map((creator, _idx) => <div key={_idx} className={classes.pageItem}> <CreatorCard {...creator} key={_idx} /></div>)}
        </div>
    )
};

export default ShowCreators;
