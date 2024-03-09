import { Box, Stack } from '@mui/material'
import React from 'react'
import { Chat_History } from '../../data'
import { MediaMsg, ReplyMsg, TextMsg, Timeline, LinkMsg, DocMsg } from './MsgType'

const Message = () => {
  return (
    <Box p={3}>
        <Stack spacing={3}>
            {Chat_History.map((el)=>{
              switch(el.type){
                case "divider":
                    // Timeline
                   return <Timeline el={el} />
                    
                case "msg":
                    switch(el.subtype){
                        case "img":
                            return <MediaMsg el={el}/>
                            
                        case "doc":
                            //Doc msg
                            return <DocMsg el={el}/>
                        case "link":
                            //Link msg
                            return <LinkMsg el={el}/>
                            
                        case "reply":
                            //Reply msg
                           return <ReplyMsg el={el}/>
                            
                        default:
                            //Txt msg
                           return <TextMsg el={el}/>
                           
                    }
                    break;
                default:
                    break;
                
              }  
            })}
        </Stack>
    </Box>
  )
}

export default Message