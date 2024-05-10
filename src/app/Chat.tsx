"use client";
import { PRESET_ANSWERS, PRESET_MESSAGE, PRESET_QUESTIONS } from "@/lib/constant";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion"
import { Minus } from "lucide-react";
import { useEffect, useState } from "react";

import { ScrollArea } from "@/components/ui/scroll-area"

const Chat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDisplay, setIsDisplay] = useState(true);
  return (
    <div className='fixed bottom-14 right-5'>
      <motion.div
      layout
      animate={{borderRadius:isOpen ? 10 : 50}}
      initial={{borderRadius:50}}
      onClick={()=>{
        if (!isOpen) {
          setIsOpen(!isOpen);
        setIsDisplay(false);
          
        }
        
      

      } }
      onAnimationComplete={()=> {
        if(!isOpen){
          setIsDisplay(true);
        }
       
      }}

       className={cn("w-20 h-20 flex items-end justify-center bg-zinc-700 shadow-2xl cursor-pointer",
        {
          "w-96 h-[34rem] cursor-default":isOpen,
        }
       )}>
       {
        isDisplay &&  <h1 className="text-5xl">👨‍💻</h1>

       }
       {
        isOpen && (
          <ScrollArea className="w-full h-full ">
        <div className="p-5 border-b flex items-center justify-between absolute top-0 w-full right-0 bg-stone-800">
          <h1 className="text-2xl">👨‍💻 chat</h1>
          <Minus 
          onClick={() => {
            setIsOpen(false);
          }}
           className="w-8 h-8 cursor-pointer"/>
        </div>
        <div className="p-5 space-y-2 mt-16">
        <Chatsupport />
        </div>
        <div id="bottom-chat"></div>
       </ScrollArea>
        )
       }
       </motion.div>
    </div>
  )
}

const Chatsupport = () => {
  const  [messages, setMessages] = useState(PRESET_MESSAGE);
  const [answered, setAnswered] = useState<string[]>([]);

  useEffect(() => {
    document.getElementById("bottom-chat")?.scrollIntoView({behavior: "smooth"});
    
    
  }, [messages.length]);

  const handlePresetQuestion = (index:number) => {
    const question = messages[index];
    const updatedAnswered = [...answered, question.answerId];
    
   


    setMessages((current)=>[
      ...current,
      {
        isBot: false,
        message: question.message,
        isPresetQuestion: false,
        answerId: "",
        isUser: true,
    },
    {
      isBot: true,
      message: PRESET_ANSWERS[question.answerId as unknown as keyof typeof PRESET_ANSWERS].message,
      isPresetQuestion: false,
      answerId: "",
      isUser: false,
    },
    ...PRESET_QUESTIONS.filter((question) => !updatedAnswered.includes(question.answerId)),
    ])
    setAnswered(updatedAnswered);
  }
  return <>
  {messages.map((message, key)=> {
    if (message.isBot) {
      return <Bot message={message.message} key={key}/>
    } else if (message.isPresetQuestion){
      return <PresetQuestions 
      message={message.message}
       key={key}
       onClick={()=>handlePresetQuestion(key)}
       />

    } else if (message.isUser){
      return <User message={message.message} key={key}/>
    }

  })}
 
  </>

};


export default Chat
const Bot = ({message}:{message:string}) => {
  return <motion.div>
    <div className="flex items-center gap-2">
      <span className="bg-zinc-900 rounded-full">
        <h1 className="text-2xl">👨‍💻</h1>
      </span>
      <h1>Code Buddy</h1>
    </div>
    <h1>
     {message}
    </h1>
  </motion.div>
};

const PresetQuestions = ({message, onClick}:{message:string, onClick: () => void;}) => {
  return <motion.div className="cursor-pointer hover:tracking-wider transition-all"
   onClick={onClick}>
    <h1 className="inline-block p-2 bg-zinc-900 rounded-md px-3 ">{message}</h1>
  </motion.div>
}


const User = ({message}:{message:string}) => {
  return <motion.div>
    <div className="flex items-center justify-end gap-2">
      <h1 className="text-gray-300">You</h1>
      <span className="bg-zinc-900 rounded-full">
        <h1 className="text-3xl">🧑</h1>
      </span>
      
    </div>
    <h1 className="text-right">
      {message}
    </h1>
  </motion.div>
};