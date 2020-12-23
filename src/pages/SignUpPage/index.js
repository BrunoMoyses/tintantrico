import {useState} from 'react';
import {useHistory} from 'react-router-dom';
import {AnimatePresence, motion} from 'framer-motion';
import {
    Container,
    Button,
    Header,
    LogoWrap,
    DoYouLikeMassageContainer,
    GenderContainer,
    LookingForContainer,
    CheckboxLookingFor,
    CheckboxButton,
    AddressContainer,
    SignUpFinishedContainer
} from './styles';
import Logo from '../../components/Logo';

// DO YOU LIKE MASSAGE
const DoYouLikeMassage = ({nextStep, ...motionProps}) => {
    return (
        <DoYouLikeMassageContainer
            {...motionProps}
        >
            <p>First of all...</p>
            <p>Do you like massage?</p>
            <div>
                <Button
                    onClick={() => nextStep()}
                >Óbvio</Button>
                <Button
                    onClick={() => nextStep()}
                >Com Certeza</Button>
            </div>
        </DoYouLikeMassageContainer>
    )
}

// GENDER 
const Gender = ({nextStep, ...motionProps}) => {
    return (
        <GenderContainer
            {...motionProps}
        >
            <p>Aí sim!</p>
            <p>Você quer <b>ser tratado(a)</b> como?</p>
            
            <div>
                <Button
                    onClick={ nextStep.bind(null, 'deusa')}
                >DEUSA</Button>
                <Button
                    onClick={ nextStep.bind(null, 'tubarão')}
                >TURABÃO</Button>
            </div>
        </GenderContainer>
    )
}

// LOKING-FOR 
const LookingFor = ({nextStep, ...motionProps}) => {
    
    const [lookingFor, setLookingFor] = useState({
        deusa: false,
        tubarao: false,
    })
    return (
        <LookingForContainer
            {...motionProps}
        >
            <p>Quem você procura para trocar presença e contemplação?</p>
            
            <CheckboxLookingFor>
                <p>procuro por:</p>
                <div>
                    <CheckboxButton
                        checked={lookingFor.deusa}
                        onClick={() => setLookingFor({...lookingFor, deusa: !lookingFor.deusa})}
                    >Deusas</CheckboxButton>
                    <CheckboxButton
                        checked={lookingFor.tubarao}
                        onClick={() => setLookingFor({...lookingFor, tubarao: !lookingFor.tubarao})}
                    >Tubarões</CheckboxButton>
                </div>
            </CheckboxLookingFor>
            <div>
                <Button
                    onClick={() => nextStep(lookingFor)}
                >PRONTO</Button>
            </div>
        </LookingForContainer>
    )
}

// ADDRESS
const Address = ({nextStep, gender, ...motionProps}) => {
    
    const [address, setAddress] = useState({
        state: "",
        city: "",
    })

    const onChangeHandle = ({target}) => {
        const name = target.name;

        if (name === "state") setAddress({...address, state: target.value});
        else if (name === "city") setAddress({...address, city: target.value});
    }

    return (
        <AddressContainer
            {...motionProps}
        >
            <p>Estamos <i>quase lá</i> {gender === "deusa" ? "Deusa!" : "Tubarão!"}</p>
            
            <p>Para ajudar a gente a encontrar aquele <span>Match Tântrico</span> para você, me conta onde você mora:</p>

            <input onChange={onChangeHandle} type="text" name="state" value={address.state} placeholder="Estado" />
            <input onChange={onChangeHandle} type="text" name="city" value={address.city} placeholder="Cidade" />
            
            <div>
                <Button
                    onClick={() => nextStep(address)}
                >PRONTO</Button>
            </div>
        </AddressContainer>
    )
}

// SIGNUP FINISHED
const SignUpFinished = ({nextStep, ...motionProps}) => {

    return (
        <SignUpFinishedContainer
            {...motionProps}
        >
           <p><b>Agora Sim!</b></p>
           <p>Bora encontrar uma alma maravilhosa para contemplar!</p>

            <div>
                <Button
                    onClick={() => nextStep()}
                >BORA!</Button>
            </div>
        </SignUpFinishedContainer>
    )
}

const SignUp = () => {

    const [likeMassage, setLikeMassage] = useState(false);
    const [gender, setGender] = useState(false);
    const [lookingFor, setLookingFor] = useState({
        deusa: null,
        tubarao: null,
    });
    const [address, setAddress] = useState({
        state: "",
        city: ""
    });

    //
    const history = useHistory();

    return (
        <motion.div
            initial={{y: '-100px'}}
            animate={{y: 0}}
        >
        <AnimatePresence initial={false}>
            <Container>
                <Header>
                    <LogoWrap>
                        <Logo />
                    </LogoWrap>
                </Header>

                {
                    (!likeMassage)
                        ? <DoYouLikeMassage
                            nextStep={() => setLikeMassage(true)}
                            
                            key="likeMassage"
                            initial={{ x: '100px' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100px' }}
                        />

                        : (!gender)
                            ? <Gender
                                nextStep={ value => setGender(value) }
                                
                                key="gender"
                                initial={{ x: '100px' }}
                                animate={{ x: 0 }}
                                exit={{ x: '100px' }}
                            />

                            : (!lookingFor.deusa && !lookingFor.tubarao)
                                ? <LookingFor
                                    nextStep={ value => setLookingFor(value)} 
                                    
                                    key="lookingFor"
                                    initial={{ x: '100px' }}
                                    animate={{ x: 0 }}
                                    exit={{ x: '100px' }}
                                />

                                : (!address.state || !address.city)
                                    ? <Address
                                        nextStep={ value => setAddress(value)} gender={gender}
                                        
                                        key="Address"
                                        initial={{ x: '100px' }}
                                        animate={{ x: 0 }}
                                        exit={{ x: '100px' }}
                                    />
                                
                                    : <SignUpFinished
                                        nextStep={ () => history.push('/people')}
                                        
                                        key="SignUp"
                                        initial={{ x: '100px' }}
                                        animate={{ x: 0 }}
                                        exit={{ x: '100px' }}
                                    />


                }

            </Container>
        </AnimatePresence>
        </motion.div>
    )
}

export default SignUp;