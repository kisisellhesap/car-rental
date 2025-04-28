import { ICar } from "../types";

type FetchCarsReturn = {
  total_count: number;
  results: ICar[];
};

type Filter = {
  make?: string;
  model?: string;
};

export const fetchCars = async ({
  make = "BMW",
  model,
}: Filter): Promise<FetchCarsReturn> => {
  const url = `https://public.opendatasoft.com/api/explore/v2.1/catalog/datasets/all-vehicles-model/records?limit20&refine=make:${make} ${
    model ? "&refine=model:${model}" : ""
  } `;
  const res = await fetch(url);
  const data = await res.json();

  return data;
};
