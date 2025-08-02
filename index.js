function envioCorreo(event) {
  event.preventDefault(); 

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const asunto = document.getElementById("asunto").value;
  const cuerpo = document.getElementById("cuerpo").value;

  const body = {
    nombre: nombre,
    correo: correo,
    asunto: asunto,
    mensaje: cuerpo
  };

  console.log("Enviando JSON:", body);

  fetch("https://send-mails-tawny.vercel.app/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Error al enviar el correo.");
      }
      return response.text();
    })
    .then(data => {
      alert("✅ " + "Correo enviado con exito, pronto tendras una respuesta"); // Mostrar respuesta del backend
    })
    .catch(error => {
      console.error("❌ Error:", error);
      alert("❌ No se pudo enviar el mensaje.");
    });
}
