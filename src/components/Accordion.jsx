import React, {useState} from 'react'

const Accordion = () => {
    const [isOpen1, setIsOpen1] = useState(false)
    const [isOpen2, setIsOpen2] = useState(false)
    const [isOpen3, setIsOpen3] = useState(false)
    const [isOpen4, setIsOpen4] = useState(false)
    const [isOpen5, setIsOpen5] = useState(false)
    const [isOpen6, setIsOpen6] = useState(false)
    const getAnswerClass = (isOpen) => {
    if(isOpen)
        return 'open'
    else
        return 'closed'
    }
    const handleClick = (isOpen, setIsOpen) => {
        if (isOpen) {
            setIsOpen(false)
        }
        else {
            setIsOpen(true)
        }       
    }

  return (
    <div className="long-box">   
    <div className={"question-box " + getAnswerClass(isOpen1)} onClick={() => handleClick(isOpen1, setIsOpen1)}>
        <div className="questionbox-header">
            <p className="txt-clr">Is any of my personal information stored in the App?</p>
        <button className="btn-round btn-gray">
            <i className="fa-solid fa-chevron-down"></i>
        </button>
            </div>
            <div className={"expandable answer small"}>
    <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus.
        Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis
        accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus
        gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse
        ut consequat.</p>
</div> 
    </div>
<div className={"question-box " + getAnswerClass(isOpen2)} onClick={() => handleClick(isOpen2, setIsOpen2)}>
    <div className="flex questionbox-header">
    <p>What formats can I download my transaction history in?</p>        
    <button className="btn-round btn-gray">
        <i className="fa-solid fa-chevron-down"></i>
    </button>            
    </div>
    <div className="expandable answer small">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta libero, aperiam similique architecto atque amet?</p>
    </div>
</div>
<div className={"question-box " + getAnswerClass(isOpen3)} onClick={() => handleClick(isOpen3, setIsOpen3)}>
    <div className="flex questionbox-header">
        <p>Can I schedule future transfers?</p>       
    <button className="btn-round btn-gray">
        <i className="fa-solid fa-chevron-down"></i>        
    </button> 
        </div>
    <div className="expandable answer small">
    <p>Nunc duis id aenean gravida tincidunt eu, tempor ullamcorper. Viverra aliquam arcu, viverra et, cursus.
        Aliquet pretium cursus adipiscing gravida et consequat lobortis arcu velit. Nibh pharetra fermentum duis
        accumsan lectus non. Massa cursus molestie lorem scelerisque pellentesque. Nisi, enim, arcu purus
        gravida adipiscing euismod montes, duis egestas. Vehicula eu etiam quam tristique tincidunt suspendisse
        ut consequat.</p>
</div>    
</div>     
<div className={"question-box " + getAnswerClass(isOpen4)} onClick={() => handleClick(isOpen4, setIsOpen4)}>
    <div className="flex questionbox-header">
    <p>When can I use Banking App services?</p>
    <button className="btn-round btn-gray">
        <i className="fa-solid fa-chevron-down"></i>
    </button>
    </div>
    <div className="expandable answer small">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est quasi suscipit alias maiores accusamus, voluptatibus voluptatem aliquam minus atque totam?</p>    </div>
</div>


<div className={"question-box " + getAnswerClass(isOpen5)} onClick={() => handleClick(isOpen5, setIsOpen5)}>
    <div className="flex questionbox-header">
    <p>Can I create my own password that is easy for me to remember?                
    </p>
    <button className="btn-round btn-gray">
        <i className="fa-solid fa-chevron-down"></i>
    </button>
    </div>
    <div className="expandable answer small">
        <p>Lorem ipsum dolor sit amet.</p>
    </div>  

</div>
<div className={"question-box " + getAnswerClass(isOpen6)} onClick={() => handleClick(isOpen6, setIsOpen6)}>
    <div className="flex questionbox-header">
    <p>What happens if I forget or lose my password?</p>
    <button className="btn-round btn-gray">
        <i className="fa-solid fa-chevron-down"></i>
    </button>
    </div>
    <div className="expandable answer small">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati dicta, fugit hic illo iste aperiam!</p>
    </div>  
</div>
</div>
  )
}

export default Accordion