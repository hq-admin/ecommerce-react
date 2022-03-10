import styled from "styled-components"

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url("https://i.ibb.co/307s8L1/pexels-disha-sheta-3306174.jpg") center;
`
const Wrapper = styled.div`

`
const Title = styled.h1`

`
const Form = styled.form`

`
const Input = styled.input`

`
const Agreement = styled.span`

`
const Button = styled.button`

`

const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="First Name"/>
                <Input placeholder="Last Name"/>
                <Input placeholder="Username"/>
                <Input placeholder="Email"/>
                <Input placeholder="Password"/>
                <Input placeholder="Confirm Password"/>
                <Agreement>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register