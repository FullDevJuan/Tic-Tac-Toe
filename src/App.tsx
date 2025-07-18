interface Props {
  name: string;
}

function App({ name }: Props) {
  return (
    <h1>
      Hola, soy <span className="tagName">{name}</span>
    </h1>
  );
}

export default App;
