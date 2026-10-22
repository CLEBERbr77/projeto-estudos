export default function Timer() {

    const [tempo, setTempo] = useState(TEMPO_EM_MS_PRA_CONTAR);

    const TEMPO_EM_MS_PRA_CONTAR = 60*10*1000;
    const INTERVALO_EM_MS = 100;

    useEffect(() => {
        let interval;

        const countDownUntilZero
    })

    return (
        <div className="timer">
            <p className="timerNumber"></p>
        </div>
    )
}