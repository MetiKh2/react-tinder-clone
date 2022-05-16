import Header from "./components/header/Header";
import {Route, Routes} from 'react-router-dom'
import TinderCards from "./components/tinderCards/TinderCards";
import SwipeButtons from "./components/swipeButtons/SwipeButtons";
import Chats from "./components/chats/Chats";
import ChatScreen from "./components/chats/ChatScreen";
function App() {
  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={
                <>
                    <Header/>
                    <TinderCards/>
                    <SwipeButtons/>
                </>
            }/>
            <Route path={'/chat'} element={
                <>
                    <Header backButton={'/'}/>
                    <Chats/>
                </>
            }/>
            <Route path={'/chat/:person'} element={
            <>
                <Header backButton={'/chat '}/>
                <ChatScreen/>
            </>
        }/>
        </Routes>
    </div>
  );
}

export default App;
