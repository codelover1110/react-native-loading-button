export const appStyle = {
    width: "100vu",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };
  
  export const buttonStyle = (loading, error) => ({
    outline: 0,
    textAlign: "center",
    padding: "20px 50px",
    fontSize: "60px",
    cursor: "pointer",
    backgroundColor: "lightgrey",
    width: 400,
    border: "solid 2px black",
    borderRadius: 100,
    transition: "all 150ms ease-in-out",
    borderColor: error ? "red" : loading ? "blue" : "black",
    color: error ? "red" : loading ? "blue" : "black",
    transform: error ? "scale(1.2)" : "scale(1.0)",
  });
  