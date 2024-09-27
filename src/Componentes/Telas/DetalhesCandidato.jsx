import { Container } from "react-bootstrap";
import Candidato from "./elementos/Candidato";

export default function DetalhesCandidato(props) {
    return (
        <Container>
            <h1>Detalhes Candidato</h1>
            {
                <Candidato candidato={props.candidato}></Candidato>
            }
        </Container>
    );
}