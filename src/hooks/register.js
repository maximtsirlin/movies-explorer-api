export default function register() {
    const [status, setStatus] = useState(null);

    return {
        status,
        setStatus
    };
}