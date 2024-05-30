import '../App.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

function cyberButton(text, primary = 0, primaryShadow = 180, secondaryShadow = 60) {
  return (
    <button className="cybr-btn" style={{
      '--primary-hue': primary,
      '--primary-shadow-hue': primaryShadow,
      '--secondary-shadow-hue': secondaryShadow,
    }}>
      <span className="cybr-btn__text" data-text={text}>{text}</span>
      <span className="cybr-btn__glitch"></span>
    </button>
  );
}


const Home = () => {

  return(
    <div className="home">
      <div className='link-bar'>
        <button className='glowing-btn' onClick={() => window.open('https://music.apple.com/us/artist/seankennedy/1606485747?app=music', '_blank')} ><span className='glowing-txt'>App<span className='faulty-letter'>le</span> Music</span></button>
        <button className='glowing-btn' onClick={() => window.open('https://open.spotify.com/artist/3KHx1b9pw7hKCDCHfLlQ5r ', '_blank')}><span className='glowing-txt'>Sp<span className='faulty-letter'>o</span>ti<span className='faulty-letter'>f</span>y</span></button>
        <button className='glowing-btn' onClick={() => window.open('https://youtube.com/@se4nkennedy?si=ATGHrCO35wSIyedX', '_blank')}><span className='glowing-txt'>Sound<span className='faulty-letter'>Cl</span>oud</span></button>
        <button className='glowing-btn' onClick={() => window.open('https://soundcloud.com/seankennedy99', '_blank')}><span className='glowing-txt'>Youtu<span className='faulty-letter'>b</span>e</span></button>
      </div>

      <div className="glitch">
        <div className="glitch__item"></div>
        <div className="glitch__item"></div>
        <div className="glitch__item"></div>
        <div className="glitch__item"></div>
        <div className="glitch__item"></div>
      </div>
    </div>
  )
}

export default Home;