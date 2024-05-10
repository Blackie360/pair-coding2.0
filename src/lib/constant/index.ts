
export const PRESET_QUESTIONS = [
    {
        isBot: false,
        message: "Tell me about code buddy",
        isPresetQuestion: true,
        answerId: 1,
        isUser: false,
    },
    {
        isBot: false,
        message: "What are rooms?",
        isPresetQuestion: true,
        answerId: 2,
        isUser: false,
    },
    {
        isBot: false,
        message: "What are the features of code buddy?",
        isPresetQuestion: true,
        answerId: 3,
        isUser: false,
    },
];
export const PRESET_MESSAGE =[
    {
        isBot: true,
        message:
        "Hi, I am your code buddy. Try this questions to get started.",
        isPresetQuestion: false,
        answerid: "",
        isUser: false,
    },
    ...PRESET_QUESTIONS,

];

export const PRESET_ANSWERS = {
    "1":{
        message: "Code buddy is a pair coding platform  that helps you connect with other developers ."
    },
    "2": {
        message: "Rooms are public and anyone can join them. You can also create private rooms."
    },
    "3": {
        message: "Code buddy allows you to share your screen, chat with other developers, and code together."
    },
    "4": {
        message: "You can join a room by clicking on the join button on the room card."
    },
    "5": {
        message: "You can create a room by clicking on the create room button."
    },
    "6": {
        message: "You can invite someone to a room by sharing the room link with them."
    },
    "7": {
        message: "You can share your screen by clicking on the share screen button."
    },
    "8": {
        message: "You can chat with someone in a room by typing in the chat box."
    },

}