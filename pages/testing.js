export default function App() {
  const result = [
    {
      name: "shanu",
      items: [
        { label: "ak", value: 1 },
        { label: "pk", value: 2 },
        { label: "plk", value: 3 },
        { label: "k", value: 5 },
      ],
    }
  ];

  return result.map((el) => {
    return (
      <div>
        <h1>{el.name}</h1>
        <div className="vart">
          <div>
            {el.items.map((e, index) => {
              return (
                <p>
                  {e.label} : {e.value}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    );
  });
}