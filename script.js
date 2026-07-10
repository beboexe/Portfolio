const form = document.getElementById("contactForm");

form.addEventListener("submit", async (event) => {
  event.preventDefault(); // stop default page reload

  const formData = new FormData(form);

  try {
    const response = await fetch(form.action, {
      method: form.method,
      body: formData,
      headers: { Accept: "application/json" }
    });

    if (response.ok) {
      alert("Message sent successfully!");
      form.reset();
    } else {
      alert("Oops! Something went wrong.");
    }
  } catch (error) {
    alert("Error: " + error.message);
  }
});
