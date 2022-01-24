import { DropdownStyled, ArrowDownStyled } from './DropdownStyles';

interface DropdownProps {
  children: string;
}

const Dropdown = ({ children }: DropdownProps) => {
  return (
    <DropdownStyled>
      {children}
      <ArrowDownStyled />
    </DropdownStyled>
  );
};

export default Dropdown;
