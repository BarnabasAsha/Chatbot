const trigger = [
    //0 
    ["hi", "hey", "hello"],
    //1
    ["how are you", "how are things"],
    //2
    ["what is going on", "what is up","How is the lockdown going", "whats up"],
    //2
    ["I'm good", "I'm not fine", "well", "alright"],
    //3
    ["who are you", "what do we talk about"],
    //4
    ["happy", "good", "well", "fantastic", "cool"],
    //5
    ["bad", "bored", "tired", "sad"],
    //6
    ["tell me story", "tell me joke"],
    //7
    ["thanks", "thank you"],
    //8
    ["bye", "good bye", "goodbye"],
    //9
    ["love", "hope"],
    //9
    ["Robot", "Bot", "Machine", "Computer"],
    //6
    ["Yes", "No"],
    //10
    ["Money", "Rich", "Dollars"]
    ];
    
    const reply = [
    //0 
    ["Hello!", "Hi!", "Hey!", "Hi there!"], 
    //1
    [
        "Fine... how are you?",
        "Pretty well, how are you?",
        "Fantastic, how are you?"
      ],
    //2
    [
        "Nothing much",
        "Exciting things!"
      ],
      //2
    ["Good to hear", "Wow, cool", "Pretty Nice"],
      //3
    ["Human as you, So lets talk...", "Anything is fine"],
    //4
    ["Glad to hear it"],
    //5
    ["Why?", "Cheer up buddy"],
    //6
    ["What about?", "Once upon a time..."],
    //7
    ["You're welcome", "No problem"],
    //8
    ["Goodbye", "See you later"],
    //9
    ["Have you found love?", "Hope is not a strategy"],
    //9
    ["I'm not a bot, I just do what i'm asked", "I code", "I can see you"],
    //
    ["Wow, You are a genius", "Why is that?"],
    //10
    ["Work hard money will come", "Your account number?"]
    ];
    
    const alternative = [
      "Same",
      "Go on...",
      "Try again",
      "I'm listening...",
      "Bro...",
      "E be things",
      "I no hear you",
      "Huh?",
      "Do you code?"
    ];

    const robot = ["How do you do, fellow human", "I am not a bot"];


    function compare(triggerArray, replyArray, text) {
        let item;
        for (let x = 0; x < triggerArray.length; x++) {
          for (let y = 0; y < replyArray.length; y++) {
            if (triggerArray[x][y] == text) {
              items = replyArray[x];
              item = items[Math.floor(Math.random() * items.length)];
            }
          }
        }
        return item;
      }
      
      function addChat(input, product) {
        const mainDiv = document.getElementById("chat-area");
        let userDiv = document.createElement("div");
        userDiv.id = "user";
        userDiv.innerHTML = `You: <span id="user-response">${input}</span>`;
        mainDiv.appendChild(userDiv);
      
        let botDiv = document.createElement("div");
        botDiv.id = "bot";
        botDiv.innerHTML = `Chatbot: <span id="bot-response">${product}</span>`;
        mainDiv.appendChild(botDiv);
        // speak(product);
      }
      




document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input")
    const submit = document.getElementById('submit')
    submit.addEventListener("click", function(e) {
        if (e) {
            let input = inputField.value;
            // document.getElementById("user").innerHTML = input;
            output(input);
    }
    function output(input) {
        let product;
        let text = input.toLowerCase().replace(/[^\w\s\d]/gi, "");
        text = text
          .replace(/ a /g, " ")
          .replace(/i feel /g, "")
          .replace(/whats/g, "what is")
          .replace(/please /g, "")
          .replace(/ please/g, "");
      
      //compare arrays
      //then search keyword
      //then random alternative
      
        if (compare(trigger, reply, text)) {
          product = compare(trigger, reply, text);
        } else if (text.match(/robot/gi)) {
          product = robot[Math.floor(Math.random() * robot.length)];
        } else {
          product = alternative[Math.floor(Math.random() * alternative.length)];
        }
      
        //update DOM
        addChat(input, product);
        // document.getElementById("chatbot").innerHTML = product;
    // speak(product);

    //clear input value
    document.getElementById("input").value = "";
      }
      
  });
});

