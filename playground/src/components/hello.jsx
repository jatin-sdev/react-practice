function Hello() {
  const date = new Date();
  const currentTime = new Date().getHours();
  let greeting;

  const customStyle = {
    color: "",
  };

  if (currentTime < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Night";
    customStyle.color = "blue";
  }
  return (
    <div>
      <h1>hello</h1>
      <h2 style={customStyle}>{greeting}</h2>
      <h2>Year :{date.getFullYear()}</h2>
    </div>
  );
}

export default Hello;
