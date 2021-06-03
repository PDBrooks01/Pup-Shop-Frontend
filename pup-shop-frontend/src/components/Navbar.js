import { Container, Menu, Button } from 'semantic-ui-react'

export default function Navbar(props) {
  return (
    <Menu
      fixed='top'
      size='large'
    >
      <Container>
        <Menu.Item href='/home'>Home</Menu.Item>
        <Menu.Item position='right'>
          {props.currentUser ?
            <>
              Hello, {props.currentUser.firstName}
              <Button onClick={props.logout} href='/users/logout' method='DELETE'>Logout</Button>
            </> :
            <>
              <Button href='/auth/signup'>Sign Up</Button>

              <Button href='/auth/login'>Log In</Button>
            </>
          }
        </Menu.Item>
      </Container>
    </Menu>
  )
}
