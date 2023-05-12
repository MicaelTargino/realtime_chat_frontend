// import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced';
import {projectId} from './secrets.js'
import { PrettyChatWindow } from 'react-chat-engine-pretty';
const ChatsPage = (props) => {
  // const chatProps = useMultiChatLogic(projectId, props.user.username, props.user.secret)
  return (
    <div style={{height: '100vh'}}>
      <PrettyChatWindow
        projectId={projectId}
        username={props.user.username}
        secret={props.user.username}
        style={{height: '100%'}}
       />
      {/* <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{height: '100%'}} /> */}
    </div>
  );
};

export default ChatsPage;