// Sample hardcoded schedule data
var schedules = {
  Alex: {
    Monday: {
      date: "2023-09-08",
      time: "09:00-17:00",
      event: "Technical Service",
      jobNumber: "JOB00123",
    },
    Tuesday: {
      date: "2023-08-02",
      time: "10:00-15:00",
      event: "Client Meeting",
      jobNumber: "JOB00124",
    },
    // ... Other days
  },
  // Add other employees similarly...
};

function sendMessage() {
  var input = document.getElementById("userInput");
  var messages = document.querySelector(".chatbot-messages");

  // Append user message
  var userMsg = document.createElement("p");
  userMsg.textContent = input.value;
  userMsg.style.textAlign = "right";
  messages.appendChild(userMsg);

  // Bot's response
  var botResponse = document.createElement("p");
  botResponse.className = "chatbot-response";

  var matchedDay = null;
  var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  for (var day of days) {
    if (input.value.toLowerCase().includes(day.toLowerCase())) {
      matchedDay = day;
      break;
    }
  }

  if (matchedDay) {
    var daySchedule = schedules["Alex"][matchedDay];
    if (daySchedule) {
      botResponse.innerHTML = `Here's Alex's schedule for ${matchedDay}:<br>
            <b>Date:</b> ${daySchedule.date}<br>
            <b>Time:</b> ${daySchedule.time}<br>
            <b>Event:</b> ${daySchedule.event}<br>
            <b>Job Number:</b> ${daySchedule.jobNumber}`;
    } else {
      botResponse.textContent = `Sorry, I couldn't find a schedule for Alex on ${matchedDay}.`;
    }
  } else {
    botResponse.textContent =
      "Thank you for your message. We'll get back to you soon!";
  }

  messages.appendChild(botResponse);

  // Clear input field
  input.value = "";

  // Auto scroll to bottom
  messages.scrollTop = messages.scrollHeight;
}
