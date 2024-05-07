import { Box, Stack } from '@mui/material'
import React from 'react'
import { Chat_History } from '../../data'
import { MediaMsg, ReplyMsg, TextMsg, Timeline, LinkMsg, DocMsg } from './MsgType'

const Message = ({menu}) => {
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
                            return <MediaMsg el={el} menu={menu}/>
                            
                        case "doc":
                            //Doc msg
                            return <DocMsg el={el} menu={menu}/>
                        case "link":
                            //Link msg
                            return <LinkMsg el={el} menu={menu}/>
                            
                        case "reply":
                            //Reply msg
                           return <ReplyMsg el={el} menu={menu}/>
                            
                        default:
                            //Txt msg
                           return <TextMsg el={el} menu={menu}/>
                           
                    }
                    
                default:
                    break;
                
              }  
            })}
        </Stack>
    </Box>
  )
}

export default Message