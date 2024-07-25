export default async function fetchSearch({queryKey}) {
  const {animal, location, breed} = queryKey[1];

  console.log(queryKey)
  const res = await fetch(
    `http://pets-v2.dev-apis.com/pets?animal=${animal}&location=${location}&breed=${breed} `,
  );


  if (!res.ok) {
    throw new Error(`pet search no ok : ${animal} ${location} ${breed}`);
  }
  return res.json();
}
