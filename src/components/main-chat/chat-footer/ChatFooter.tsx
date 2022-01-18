import {
  ContainerOuter,
  Line,
  Container,
  PlusAction,
  PlusIcon,
  NavigationAction,
  NavigationIcon,
  SmileIcon,
  Form,
  Input,
} from './ChatFooterStyles';

const ChatFooter = () => {
  return (
    <ContainerOuter>
      <Line />
      <Container>
        <PlusAction>
          <PlusIcon />
        </PlusAction>
        <Form>
          <Input placeholder="Type a message here" />
          <SmileIcon />
          <NavigationAction type="submit">
            <NavigationIcon />
          </NavigationAction>
        </Form>
      </Container>
    </ContainerOuter>
  );
};

export default ChatFooter;
