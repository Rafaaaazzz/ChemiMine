// Función para enviar mensaje del usuario en el chat
function sendMessage() {
    const inputField = document.getElementById("chat-input");
    const message = inputField.value.trim();
  
    if (message) {
      addMessageToChat("usuario", message);
      inputField.value = "";
      setTimeout(() => {
        generateBotResponse(message);
      }, 500);
    }
  }
  
  // Añadir mensaje al chat
  function addMessageToChat(sender, message) {
    const chatBox = document.getElementById("chat-box");
    const messageElement = document.createElement("p");
    messageElement.classList.add(sender);
    messageElement.innerHTML = `<strong>${sender === "usuario" ? "Tú" : "Sistema"}:</strong> ${message}`;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  
  // Generar respuesta automática del bot con opciones interactivas y redirección
  function generateBotResponse(userMessage) {
    let response = "No entiendo, por favor reformula tu pregunta.";
    let options = []; // Array para almacenar las opciones de respuesta
  
    if (userMessage.toLowerCase().includes("hola")) {
      response = "¡Hola! ¿En qué puedo ayudarte hoy?";
      options = ["Registro", "Precios", "Soporte", "Información general"];
    } else if (userMessage.toLowerCase().includes("registro")) {
      response = "Para registrarte, completa el formulario de registro y haz clic en 'Registrarse'.";
      options = ["Ir a Registro", "Volver al Inicio"];
    } else if (userMessage.toLowerCase().includes("precio")) {
      response = "Consulta nuestra sección de precios para más información.";
      options = ["Ver Planes", "Contactar con Ventas"];
    } else if (userMessage.toLowerCase().includes("problema")) {
      response = "Puedes describir tu problema y nuestro equipo te ayudará lo antes posible.";
      options = ["Reportar un Problema", "Consultar Estado de Reporte"];
    } else if (userMessage.toLowerCase().includes("información")) {
      response = "¿Qué tipo de información necesitas?";
      options = ["Acerca de ChemiMine", "Servicios", "Contáctanos"];
    }
  
    // Redirecciones específicas basadas en las opciones
    if (userMessage === "Ir a Registro") {
      window.location.href = "register.html";
      return;
    } else if (userMessage === "Ver Planes") {
      window.location.href = "precio.html";
      return;
    } else if (userMessage === "Volver al Inicio") {
      window.location.href = "index.html";
      return;
    } else if (userMessage === "Contactar con Ventas") {
      window.location.href = "contacto.html";
      return;
    }
  
    // Respuesta por defecto y opciones en pantalla
    addMessageToChat("Sistema", response);
  
    // Mostrar opciones como botones si hay opciones disponibles
    if (options.length > 0) {
      displayOptions(options);
    }
  }
  
  // Función para mostrar opciones como botones interactivos
  function displayOptions(options) {
    const chatBox = document.getElementById("chat-box");
    const optionsContainer = document.createElement("div");
    optionsContainer.classList.add("options-container");
  
    options.forEach(option => {
      const button = document.createElement("button");
      button.textContent = option;
      button.classList.add("option-button");
      button.onclick = () => handleOption(option);
      optionsContainer.appendChild(button);
    });
  
    chatBox.appendChild(optionsContainer);
    chatBox.scrollTop = chatBox.scrollHeight;
  }
  
  // Manejo de opciones seleccionadas por el usuario
  function handleOption(option) {
    addMessageToChat("usuario", option);
    setTimeout(() => {
      generateBotResponse(option);
    }, 500);
  }
  
  // Calculadora de contaminación
  function calculateContamination(event) {
    event.preventDefault();
    const chemical = document.getElementById("chemical").value.trim();
    const quantity = parseFloat(document.getElementById("quantity").value);
  
    let result;
    if (quantity > 100) {
      result = `Riesgo alto de contaminación con ${chemical}. Toma medidas de precaución.`;
    } else if (quantity > 50) {
      result = `Riesgo moderado de contaminación con ${chemical}. Usa equipo de protección.`;
    } else {
      result = `Riesgo bajo de contaminación con ${chemical}.`;
    }
  
    document.getElementById("calculator-result").textContent = result;
  }
  