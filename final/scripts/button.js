



function pinduct() {
  const name = document.getElementById("nameInput").value.trim();

  if (name !== "") {
    document.getElementById("demo").textContent =
      "Hello " + name + "! How are you today?";
  }
}