"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion"
import { Minus } from "lucide-react";
import { useState } from "react";

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
          <div className="w-full h-full ">
        <div className="p-5 border-b flex items-center justify-between">
          <h1 className="text-2xl">👨‍💻 chat</h1>
          <Minus 
          onClick={() => {
            setIsOpen(false);
          }}
           className="w-8 h-8 cursor-pointer"/>
        </div>
        <div className="p-5 space-y-2">
        <Bot/>
        <PresetQuestions/>
        <User/>
        </div>
       </div>
        )
       }
       </motion.div>
    </div>
  )
}

export default Chat
const Bot = () => {
  return <motion.div>
    <div className="flex items-center gap-2">
      <span className="bg-zinc-900 rounded-full">
        <h1 className="text-2xl">👨‍💻</h1>
      </span>
      <h1>Code Buddy</h1>
    </div>
    <h1>
      Hi, I am your code buddy. How can I help you today?
    </h1>
  </motion.div>
};

const PresetQuestions = () => {
  return <motion.div className="cursor-pointer" onClick={() => {
    alert("I am sorry, I am just a dummy component. I can't help you with that.")
  }}>
    <h1 className="inline-block p-2 bg-zinc-900 rounded-md">What do you want to learn today?</h1>
  </motion.div>
}

const User = () => {
  return <motion.div>
    <div className="flex items-center justify-end gap-2">
      <h1 className="text-gray-300">You</h1>
      <span className="bg-zinc-900 rounded-full">
        <h1 className="text-3xl">🧑</h1>
      </span>
      
    </div>
    <h1>
      Hi, I am your code buddy. How can I help you today?
    </h1>
  </motion.div>
};