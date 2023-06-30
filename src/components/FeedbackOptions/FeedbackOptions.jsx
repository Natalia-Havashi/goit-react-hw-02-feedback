import { Button, ContainerBtn } from 'components/Reviews.styled';

export const FeedbackOption = ({ options, handleFeedback }) => (
  <ContainerBtn>
    {options.map((option, index) => (
      <Button 
      onClick={() => handleFeedback(option)} 
      key={index}
      >
        {option}
      </Button>
    ))}
  </ContainerBtn>
);
