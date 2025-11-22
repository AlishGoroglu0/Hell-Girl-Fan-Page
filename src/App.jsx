import { useState,useEffect } from 'react'
import './App.css'
import firegiff from './assets/FiresOfHell.gif'

function App() {
  const [isMainVisible , SetIsMainvisible] = useState(false);
  const [isAnimationVisible , SetIsAnimationVisible] = useState(true);
  const [isRedScreenVisible , SetIsRedScreenVisible] = useState(false)
  const [targetName , setTargetName] = useState('');

  const showAfterDelay = () => {
    setTimeout(() => {SetIsMainvisible(true);SetIsAnimationVisible(false);},2000)
  }
  const HandleClick = () => {
    if (targetName.trim() === "") {
      alert("名前を入力してください")
      return;
    }
    const forbiddenNames = ["Enma Ai", "Wanyudo", "Ichimoku Ren", "Hone Onna", "菊理", "Kikuri"];

    if (forbiddenNames.some(name => targetName.toLowerCase().includes(name.toLowerCase()))) {
      alert("その名は受け付けられません。地獄の住人は裁けません。")
      setTargetName("")
      return;
    }

    SetIsMainvisible(false)
    SetIsRedScreenVisible(true)
  }
  useEffect(() => {showAfterDelay();},[])

  return (
    <>
     <main className={isMainVisible ? 'visible-main' : 'invisible'}>
      <h1 className='Title'>あ  な  た  の  怨  み 、 晴  ら  し  ま  す。</h1>
      <input type="text" className='name'
      value={targetName} onChange={(e) => setTargetName(e.target.value)}
      />
      <button className='Send' onClick={HandleClick}>送信</button>
     </main>

     <section className={isAnimationVisible ? 'Hellfire' : 'invisible'}>
      <img src={firegiff} alt="Fire" />
     </section>

    <section className={isRedScreenVisible ? "RedScreen" : "invisible"}>
      <h1 className='RedTitle'>あ  な  た  の  怨  み 、 晴  ら  し  ま  す。</h1>
  
    <p className='RedSubtitle'>ただし、代償として死後、お前の魂も地獄へ行くことになる。</p>
    </section>
    </>
  )
}

export default App
