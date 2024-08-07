export default function CoreConcepts(props) {
  return (
    <li>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </li>
  );
}

export function CoreConcepts2({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={title} />
      <h1>{title}</h1>
      <p>{description}</p>
    </li>
  );
}
