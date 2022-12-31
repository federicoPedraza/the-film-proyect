import { FC, useEffect } from "react";
import { Dialog as Modal } from "@material-ui/core";
import { DialogInterface } from "../../interfaces/ui.interface";
export const Dialog:FC<DialogInterface> = ({isOpen,onClose,content, onOpen}) => {
    useEffect(()=>{
        if ( isOpen ){
            onOpen()
        }
    },[isOpen])
    
    return <Modal
        PaperProps={{ style: { opacity: .935, maxWidth: 900 } }}
        style={{position: 'absolute', bottom: '1%', opacity: 1}}
        open={isOpen}
        onClose={onClose}
      >
        {content}
      </Modal>
}