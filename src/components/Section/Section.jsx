import { Container, Feedback} from "components/Reviews.styled"

export const Section = ({title, children}) => (
    
    <Container>
        <Feedback>{title}</Feedback>
        {children}
    </Container> 
    );