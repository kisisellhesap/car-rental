import { FC, useEffect, useState } from "react";
import { fetchCars } from "../../utils/services";
import { ICar } from "../../types";
import Warning from "../Warning";
import Card from "./Card";
import { useSearchParams } from "react-router-dom";

const List: FC = () => {
  const [cars, setCars] = useState<ICar[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [params] = useSearchParams();

  const paramsObj = Object.fromEntries(params.entries());
  useEffect(() => {
    fetchCars({ ...paramsObj })
      .then((data) => setCars(data.results))
      .catch((err) => setError(err.message));
  }, [params]);

  if (!cars) return <Warning>Yükleniyor</Warning>;
  if (error) return <p>Hata Mesajı...</p>;
  if (cars.length < 1) return <p>Veri bulunamadı ...</p>;

  return (
    <div className="padding-x max-width">
      <section className="home-cars-wrapper">
        {cars.map((data, i) => {
          return <Card key={i} car={data} />;
        })}
      </section>
      <section></section>
    </div>
  );
};

export default List;
