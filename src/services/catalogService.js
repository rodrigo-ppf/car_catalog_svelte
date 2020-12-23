/* let catalogs = [];

export default catalogs; */

export const getCatalog = async (car) => {
  if (car.Year == null) car.Year = 0;
  if (car.Price == null) car.Price = 0;

  var queryString = Object.keys(car)
    .map((key) => key + "=" + car[key])
    .join("&");

  let response = await fetch(
    "http://localhost:4000/v1/catalog/query/?" + queryString
  );

  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const json = await response.json();

  return json;
};

export const deleteCar = async (id) => {
  let response = await fetch("http://localhost:4000/v1/catalog/" + id + "/", {
    method: "DELETE",
  });
  return response;
};

export const updateCar = async (car) => {
  let response = await fetch("http://localhost:4000/v1/catalog/", {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(car),
  });

  return response;
};

export const insertCar = async (car) => {
  let response = await fetch("http://localhost:4000/v1/catalog/", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(car),
  });
  return response;
};
