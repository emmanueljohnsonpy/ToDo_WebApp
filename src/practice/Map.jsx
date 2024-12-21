const List = () => {
  const myArray = ["apple", "banana", "orange"];
  const myList = myArray.map((item) => <p key={item}>{item}</p>);
  return <div>{myList}</div>;
};

export default List;
