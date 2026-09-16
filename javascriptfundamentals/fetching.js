async function loadUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

    
    if (!response.ok) {
      throw new Error(`HTTP viga: ${response.status}`);
    }

    const user = await response.json();
    console.log(user);
  } catch (error) {
    console.error("Viga laadimisel:", error.message);
  }
}

loadUser();