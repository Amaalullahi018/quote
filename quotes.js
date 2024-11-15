var arrayOfQuotes = [
    {
        "author":"Thomas Edinson",
        "quote":"The value of an idea lies in the using of it."
    },
    {
        "author":"Bill Gates",
        "quote":"If you show people the problems and you show people the solutions, they will be moved to act."
    },
    {
        "author":"Jim Rohn",
        "quote":"Beware of what you become in pursuit of what you want."
    },
    {
        "author":"Katherine Pearson",
        "quote":"A drum without a plan is nothing more than a wish."
    },
    {
        "author":"Lyndon B. Johnson",
        "quote":"Yesterday is not ours to recover, but tomorrow is our to win or lose."
    },
    {
        "author":"Martin Luther King, Jr.",
        "quote":"If I cannot do great things, I can do small things in a great way."
    },
    {
        "author":"Mahatma Ghandi",
        "quote":"Be the change that you wish to see in the world."
    },
    {
        "author":"Madam C.J. Walker",
        "quote":"Don't sit down and wait for the opportunities to come. Get up and make them."
    },
    {
        "author":"Thomas Edison",
        "quote":"Opportunity is missed by most people because it is dressed in overalls and looks like work"
    },
    {
        "author":"Amelia Earhart",
        "quote":"The most difficult thing is the decision to act; the rest is merely tenacity."
    },
    {
        "author":"Jennifer Lopez",
        "quote":"You get what you give."
    },
    {
        "author":"Queen Elizabeth II",
        "quote":"It is often the small steps, not the giant leaps, that bring about the most lasting change."
    },
    {
        "author":"Mikhail Gorbachev",
        "quote":"If what you have done yesterday still looks big to you, you haven't done much today."
    },
    {
        "author":"Muhammad Ali",
        "quote":"If my mind can conceive it, if my heart can believe it, then I can achieve it."
    },
    {
        "author":"Theodore Roosevelt",
        "quote":"Believe you can and you're halfway there."
    },
    {
        "author":"Mae Jemison",
        "quote":"Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination"
    },
    {
        "author":"Marie Curie",
        "quote":"We must believe that we are gifted for something, and that this thing, at whatever cost, must be attained."
    },
    {
        "author":"Steve Jobs",
        "quote":"The people who are crazy enough to think they can change the world are the ones who do."
    },
    {
        "author":"André Leon Talley",
        "quote":"I scorched the earth with my talent and I let my light shine."
    },
    {
        "author":"Audrey Hepburn",
        "quote":"Nothing is impossible. The word itself says 'I'm possible!"
    },
    {
        "author":"Helen Keller",
        "quote":"Never bend your head. Always hold it high. Look the world straight in the eye."
    },
    {
        "author":"Eleanor Roosevelt",
        "quote":"Never allow a person to tell you no who doesn’t have the power to say yes."
    },
    {
        "author":"C.S. Lewis",
        "quote":"You are never too old to set another goal or to dream a new dream."
    },
    {
        "author":"Carol Burnett",
        "quote":"When you have a dream, you've got to grab it and never let go."
    },
    {
        "author":"Walt Disney",
        "quote":"All our dreams can come true — if we have the courage to pursue them."
    },
    {
        "author":"Alexander the Great",
        "quote":"There is nothing impossible to they who will try."
    }
        
]
  function randomSelector(arrayLength){
    return Math.floor(Math.random() * arrayLength);
  }


  function generateQuote(){
    var randomNumber = randomSelector(arrayOfQuotes.length);
    document.getElementById("quoteOutput").innerHTML = '"' + arrayOfQuotes[randomNumber].quote + '"';
    document.getElementById("authorOutput").innerHTML = '"' + arrayOfQuotes[randomNumber].author;
  }