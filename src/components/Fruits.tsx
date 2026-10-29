export default function Fruits({ fruits }: { fruits: string[] }) {
  return (
    <ul>
      {fruits.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
}

//"Fruits" is the component, "fruits" is the prop, and "name" is the variable 
// that represents each fruit in the array.