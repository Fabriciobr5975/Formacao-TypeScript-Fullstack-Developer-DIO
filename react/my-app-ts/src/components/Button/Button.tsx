import styled from "styled-components";
import { loginMessage } from "../../services/loginMessage";

type TypeButton = "button" | "reset" | "submit";

interface ButtomComponent {
  label: string;
  backgroundColor?: string;
  title?: string;
  type?: TypeButton;
  onClick?: Function | void;
}

const Button = styled.button`
  color: #fff;
  width: 100%;
  height: 40px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  transition: all 0.3s ease;

  &:hover {
    opacity: 0.9;
    border: 2px solid inherit;
  }
`;

const ButtonComponent = (props: ButtomComponent) => {
  return (
    <Button
      style={{ background: props.backgroundColor ?? "#2f2f31" }}
      title={props.title ?? ""}
      onClick={() => props.onClick?.()}
    >
      {props.label}
    </Button>
  );
};

export default ButtonComponent;
