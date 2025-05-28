import { createRoot } from "react-dom/client"
import Helloworld from "./Helloworld";
import Container from "./Container";
import './custom.css';

createRoot(document.getElementById("root"))
    .render(
        <div>
            <Container>
                <Helloworld/>
            </Container>
        </div>
    )