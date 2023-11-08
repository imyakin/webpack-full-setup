import React from 'react';
import Counter from './components/Counter';
import like from './images/like.svg'
import './styles/index.scss';

export default function App() {
  return (
    <section className='main'>
        <main>App
            <img src={like} alt='like' width={20} height={20} />
        </main>
        <Counter/>
    </section>
  )
}
