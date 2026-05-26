// This list stores all the random suggestions.
var suggestions = [
    "Study for 15 minutes, then take a short break.",
    "Drink water and eat a simple snack.",
    "Rest for 10 minutes, but do not sleep for hours.",
    "Clean one small thing near you.",
    "Send one message you have been avoiding.",
    "Stand up, stretch, and reset your brain.",
    "Open your homework and do the easiest question first.",
    "Put your phone away for 10 minutes.",
    "Write one sentence for your assignment.",
    "Check your class schedule for tomorrow.",
    "Take a quick walk around the room.",
    "Make your desk a little cleaner.",
    "Review your notes for five minutes.",
    "Drink water before deciding anything else.",
    "Do one small task you can finish fast.",
    "Set a timer for 20 minutes and focus.",
    "Eat something simple if you are hungry.",
    "Close extra tabs on your computer.",
    "Charge your phone or laptop.",
    "Pack one thing you need for tomorrow.",
    "Read one paragraph from your textbook.",
    "Make a short to-do list with three items.",
    "Reply to one important message.",
    "Take a deep breath and start again.",
    "Do your easiest chore first.",
    "Clean your screen or keyboard.",
    "Find your notebook before you forget.",
    "Sit up straight and try again.",
    "Choose one thing and finish it today.",
    "Take a break, but set an alarm.",
    "Organize one folder on your computer.",
    "Review one slide from class.",
    "Write down what is due next.",
    "Do two minutes of stretching.",
    "Start with the task that takes the least time.",
    "Prepare a snack and then return to work.",
    "Check your email for one important thing.",
    "Throw away one piece of trash near you.",
    "Wash your cup or water bottle.",
    "Open the assignment page and read the instructions.",
    "Save your work before you forget.",
    "Put one item back where it belongs.",
    "Do five jumping jacks.",
    "Look outside for one minute.",
    "Make your bed a little bit.",
    "Put your charger in your bag.",
    "Clear your desktop screen.",
    "Name your file properly.",
    "Check your calendar for deadlines.",
    "Listen to one calm song.",
    "Turn on a light if the room is dark.",
    "Move your laundry to the right place.",
    "Write the title of your assignment.",
    "Read the first question slowly.",
    "Put your phone face down.",
    "Take three deep breaths.",
    "Do one math problem.",
    "Study one vocabulary word.",
    "Drink water and sit back down.",
    "Open your textbook to the right page.",
    "Clean one corner of your desk.",
    "Ask a classmate one simple question.",
    "Check if your laptop battery is okay.",
    "Make a simple plan for the next hour.",
    "Put on comfortable clothes.",
    "Find a quiet place to work.",
    "Close your game or video for now.",
    "Write your name on your paper.",
    "Read one page and stop.",
    "Start your homework for only five minutes.",
    "Do one thing before checking your phone.",
    "Put your notes in order.",
    "Sharpen a pencil or find a pen.",
    "Delete one file you do not need.",
    "Clean your downloads folder a little.",
    "Check the weather for tomorrow.",
    "Pack your school ID.",
    "Set one reminder on your phone.",
    "Review yesterday's lesson.",
    "Write one question to ask later.",
    "Do the task you are avoiding for two minutes.",
    "Take your dishes to the kitchen.",
    "Make a quick cup of tea or coffee.",
    "Open a blank document.",
    "Write three words about your idea.",
    "Check if you submitted your work.",
    "Put your backpack near the door.",
    "Choose your clothes for tomorrow.",
    "Put headphones away if you are done.",
    "Clean one app notification.",
    "Read your teacher's announcement.",
    "Start with the first step only.",
    "Fix one small mistake in your work.",
    "Look at your rubric for one minute.",
    "Print or save something you need.",
    "Take a short screen break.",
    "Turn down the volume and focus.",
    "Move one distracting thing away.",
    "Open your browser only for school work.",
    "Check your spelling on one paragraph."
];

// This function runs when the Random button is clicked.
function showRandomSuggestion() {
    // This finds the result paragraph in game.html.
    var resultText = document.getElementById("result");

    // This chooses one random suggestion from the list.
    var randomNumber = Math.floor(Math.random() * suggestions.length);
    var suggestion = suggestions[randomNumber];

    // This changes the page text. This is DOM manipulation.
    resultText.textContent = suggestion;
    resultText.style.color = "#1d5f90";
}

// This finds the Random button in game.html.
var randomButton = document.getElementById("randomButton");

// This waits for a click. This is an event listener.
randomButton.addEventListener("click", showRandomSuggestion);
