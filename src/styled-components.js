import styled from 'styled-components';

const TodoItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

const TodoText = styled.span`
  font-size: 16px;
  margin-right: 10px;
  text-decoration: ${({ completed }) => (completed ? 'line-through' : 'none')};
`;

const AddTodoInput = styled.input`
  margin-bottom: 10px;
`;

const AddTodoButton = styled.button`
  background-color: #43b7ff;
  color: white;
  padding: 10px;
  border-radius: 5px;
`;

const DeleteTodosButton = styled.button`
  margin-top: 20px;
`;

export {
  AddTodoInput,
  AddTodoButton,
  DeleteTodosButton,
};
