from flask import Flask, request, jsonify

app = Flask(__name__)

# Sample hardcoded schedule data
schedules = {
    "Alex": {
        "Monday":    { "date": "2023-08-21", "time": "09:00-17:00", "event": "Technical Service", "jobNumber": "JOB00123" },
        "Tuesday":   { "date": "2023-08-22", "time": "10:00-15:00", "event": "Client Meeting", "jobNumber": "JOB00124" },
        "Wednesday": { ""}
    }
    # Add other employees similarly...
}

@app.route('/chatbot', methods=['POST'])
def chatbot_response():
    message = request.json['message']

    # Extracting day from message
    days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    matched_day = None
    for day in days:
        if day.lower() in message.lower():
            matched_day = day  
            break

    if matched_day:
        day_schedule = schedules.get("Alex", {}).get(matched_day)
        if day_schedule:
            response = (f"Here's Alex's schedule for {matched_day}:<br>"
                        f"<b>Date:</b> {day_schedule['date']} "
                        f"<b>Time:</b> {day_schedule['time']} "
                        f"<b>Event:</b> {day_schedule['event']} "
                        f"<b>Job Number:</b> {day_schedule['jobNumber']}")
        else:
            response = f"Sorry, I couldn't find a schedule for Alex on {matched_day}."
    else:
        response = "Thank you for your message. We'll get back to you soon!"

    return jsonify({"response": response})


if __name__ == '__main__':
    app.run(debug=True)
