import {useState,useEffect} from 'react';
import {AnimatePresence} from 'framer-motion';
import Modal from '../../components/Modal';
import {
    Container,
    PersonWrapper,
    Person,
    Controls,
    Button,
    NopeIcon,
    LikeIcon,
    PersonInfo,
    DailyLikesIsOver,
    IsOverIcon,
    TantricMatch,
    IntentioPrimaSemper,
    LogoWrapper,
    CloseIcon,
} from './styles';
import Logo from '../../components/Logo';


// ANIMATION
const personAnimate = {
    initial: {rotate: '0deg', x: 0, opacity: 1 },
    like: {rotate: '45deg', x: '100%', opacity: 0 },
    nope: {rotate: '-45deg', x: '-100%', opacity: 0 },
}

const People = () => {

    const [people, setPeople] = useState([
        {
            name: 'Ester Lampard',
            age: 23,
            info: 'Nutricionista',
            img: 'ester.jpg',
            liked: true,
        },{
            name: 'Sheron Barbosa',
            age: 24,
            info: 'Publicitária',
            img: 'sheron.jpg',
            liked: true,
        },{
            name: 'Lucia Meneses',
            age: 29,
            info: 'Pintura Artistica',
            img: 'lucia.jpg',
            liked: true,
        },{
            name: 'Marieva Santos',
            age: 27,
            info: 'UI Designer',
            img: 'marieva.jpg',
            liked: true,
        },{
            name: 'Natacha Nogueira',
            age: 28,
            info: 'Empresaria Digital',
            img: 'natacha.jpg',
            liked: true,
        },{
            name: 'Tabata Cury',
            age: 23,
            info: 'Software Engineer',
            img: 'tabata.jpg',
            liked: false,
        },{
            name: 'Juliana Costa',
            age: 27,
            info: 'Engineering',
            img: 'juliana.jpg',
            liked: false,
        },
    ])

    // modal dailyLikesIsOver
    const [dailyLikesIsOver, setDailyLikesIsOver] = useState(false);

    // modal tantricMatch
    const [tantricMatch, setTantricMatch] = useState({
        isOpen: false,
        person: null
    });

    // modal intentioPrimaSemper
    const [intentioPrimaSemper, setIntentioPrimaSemper] = useState(false);

    useEffect( () => {
        setTimeout(setIntentioPrimaSemper.bind(null,true), 4000)
    }, [])

    // ANIMATION
    const [personAnimateExit, setPersonAnimateExit] = useState({})
    
    const btnControlsHandle = async action => {
        
        if (action === "like") await setPersonAnimateExit(personAnimate.like)
        else await setPersonAnimateExit(personAnimate.nope)

        if (people.length > 1) {
            const newPeople = [...people];
            const person = newPeople.pop();
            setPeople(newPeople);

            // match occurs?
            if (action === 'like' && person.liked)
                setTantricMatch({...tantricMatch, isOpen: true, person });

        } else {
            setDailyLikesIsOver(true);
        }
    }

    return (
        <Container>
            <LogoWrapper>
                <p>Tin<span>Tântrico</span></p>
            </LogoWrapper>

            <PersonWrapper>
                <AnimatePresence>
                {
                    people.map( (person, i) => (
                        <Person
                            // animation
                            initial={personAnimate.initial}
                            exit={personAnimateExit}
                            // and animation

                            key={i}
                            active={ (i===people.length-1) ? true: false }
                        >
                            <img src={require(`../../img/${person.img}`).default} alt={person.name}/>
                            <PersonInfo>
                                <h1>{person.name} <span>{person.age}</span></h1>
                                <p>{person.info}</p>
                            </PersonInfo>
                        </Person>
                    ))
                }
                </AnimatePresence>
            </PersonWrapper>

            <Controls>
                <Button
                    btnNope
                    onClick={btnControlsHandle.bind(null, "nope")}
                ><NopeIcon /></Button>
                <Button
                    btnLike
                    onClick={btnControlsHandle.bind(null, "like")}
                ><LikeIcon /></Button>
            </Controls>

            {/* Modal dailyLikesIsOver */}
            <Modal
                isOpen={dailyLikesIsOver}
                onRequestClose={setDailyLikesIsOver.bind(null, false)}
                btnClose={false}
                locationHash="#daily-likes-is-over"
            >
                <DailyLikesIsOver>
                    <IsOverIcon />
                    <p>Suas curtidas gratuitas de hoje acabaram.</p>
                </DailyLikesIsOver>
            </Modal>

            {/* Modal TantricMatch */}
            <Modal
                isOpen={tantricMatch.isOpen}
                onRequestClose={setTantricMatch.bind(null, false)}
                btnClose={false}
                locationHash="#tantric-match"
            >
                <TantricMatch>
                    {
                        tantricMatch.person
                            ?
                            <>
                                
                                <div>
                                    <CloseIcon onClick={setTantricMatch.bind(null, false)} />
                                    <h1>It's a <span>TANTRIC</span> Match!</h1>
                                    <p>Você e <b>{tantricMatch.person.name}</b> estão interessados em<br/><span>CONTEMPLAR UM AO OUTRO!</span></p>
                                </div>

                                <div>
                                    <img src={require(`../../img/${tantricMatch.person.img}`).default} alt={tantricMatch.person.name}/>
                                </div>
                            </>
                            : null
                    }
                </TantricMatch>
            </Modal>
            
            {/* Modal intentioPrimaSemper */}
            <Modal
                isOpen={intentioPrimaSemper}
                onRequestClose={ setIntentioPrimaSemper.bind(null, false) }
                locationHash="#intentio-prima-semper"
                closeOnClickBackground={false}
            >
                <IntentioPrimaSemper>
                    <p>Antes de começar, LEMBRE-SE:</p>
                    <h1>Intentio Prima Semper</h1>
                    <p>Tenha a mentalidade e a postura de ENTREGAR contemplação e energia genuína, primeiro, para depois ter a possibilidade de receber.</p>
                    <button
                        onClick={setIntentioPrimaSemper.bind(null, false)}
                    >Combinado!</button>
                </IntentioPrimaSemper>
            </Modal>
        </Container>
    )
}

export default People;