const qBank  = [
  {
    question:
      "What does HTML stand for?   ",
    answers: ["Hyper Text Markup Language", "High Text Markup Language", "Hyper Tabular Markup Language", "None"],
    correct: "Hyper Text Markup Language",
    questionId: "099099"
  },
  {
    question:
      " which of the following tag is used to mark a begining of paragraph",
    answers: ["<TD>", "<br>", "<P>", "<TR>"],
    correct: "<P>",
    questionId: "183452"
  },
  {
    question:
      "From which tag descriptive list starts ??",
    answers: ["<LL>", "<DD>", "<DL>", "<DS>"],
    correct: "<DL>",
    questionId: "267908"
  },
  {
    question: "Correct HTML tag for the largest heading is",
    answers: [
      "<head>",
      "<h6>",
      "<heading>",
      "<h1>"
    ],
    correct: "<h1>",
    questionId: "333247"
  },
  {
    question: "What is the most common surname Wales?",
    answers: ["Jones", "Williams", "Davies", "Evans"],
    correct: "Jones",
    questionId: "496293"
  },
  {
    question:
      "The attribute of <form> tag",
    answers: [
      "Method",
      "Action",
      "Both (a)&(b)",
      "none"
    ],
    correct: "Both (a)&(b)",
    questionId: "588909"
  },
  {
    question:
      'Markup tags tell the web browser',
    answers: ["How to organise the page",
     "How to display the page",
      "How to display message box on page",
       "none"],
    correct: "How to display the page",
    questionId: "648452"
  },
  {
    question: "What is the first book of the Old Testament?",
    answers: ["Genesis", "Exodus", "Leviticus", "Numbers"],
    correct: "Genesis",
    questionId: "786649"
  },
  {
    question:
      "In the video-game franchise Kingdom Hearts, the main protagonist, carries a weapon with what shape?",
    answers: ["Key", "Sword", "Pen", "Cellphone"],
    correct: "Key",
    questionId: "839754"
  },
  {
    question:
      "www is based on which model?",
    answers: [
      "Local-server",
      "client-server",
      "both a and b",
      "none"
    ],
    correct: "client-server",
    questionId: "98390"
  },
  {
    question: "What does a funambulist walk on?",
    answers: ["A Tight Rope", "Broken Glass", "Balls", "The Moon"],
    correct: "A Tight Rope",
    questionId: "1071006"
  },
  {
    question: "In past times, what would a gentleman keep in his fob pocket?",
    answers: ["Watch", "Money", "Keys", "Notebook"],
    correct: "Watch",
    questionId: "1174154"
  },
  {
    question:"Web pages starts with which ofthe following tag?",
    answers: ["<Body>", "<Title>", "<HTML>", "<Form>"],
    correct: "<HTML>",
    questionId: "1226535"
  },
  {
    question: "The tag which allows you to rest other HTML tags within the description is",
    answers: ["<TH>", " <TD>", "<TR>", "<CAPTION>"],
    correct: "<CAPTION>",
    questionId: "1310938"
  },
  {
    question: "What is the largest organ of the human body?",
    answers: ["Skin", "Heart", "large Intestine", "Liver"],
    correct: "Skin",
    questionId: "1436873"
  },
  {
    question: "Which sign of the zodiac is represented by the Crab?",
    answers: ["Cancer", "Libra", "Virgo", "Sagittarius"],
    correct: "Cancer",
    questionId: "1515110"
  },
  {
    question: "<Base> tag is designed to appear only between",
    answers: ["<HEAD>", "<TITLE>", "<BODY>", "<FORM>"],
    correct: "<HEAD>",
    questionId: "1642728"
  }
];

const qb = (n = 5) =>
  Promise.resolve(qBank.sort(() => 0.5 - Math.random()).slice(0, n));

  export default qb;
