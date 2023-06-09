import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function TodoItem({ todo, remove, toggle }) {
  const labelId = `checkbox-list-label-${todo.id}`;
  const removeTodo = () => {
    remove(todo.id);
  };

  return (
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="comments" color="error" onClick={removeTodo}>
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
    >
      <ListItemButton role={undefined} dense>
        <ListItemIcon>
          <Checkbox
            edge="start"
            checked={todo.completed}
            tabIndex={-1}
            disableRipple="false"
            inputProps={{ "aria-labelledby": labelId }}
            onChange={toggle}
            label="CheckCircleIcon"
        UncheckedIcon={<CheckCircleIcon />}
        checkedIcon={<CheckCircleIcon />}
            color="secondary"/>
        </ListItemIcon>
<ListItemText id={labelId} width="8"
primary={
  <Typography fontSize={15} fontWeight="bold">
        {todo.text}
      </Typography> 
    }  
      />
      </ListItemButton>
    </ListItem>
  );
}
