import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { AlignHorizontalCenter, CenterFocusStrongRounded } from "@mui/icons-material";
import { Stack } from "@mui/material";
import 'typeface-inter';

export default function TaskDetails() {
  return (
    
<Stack
direction="column"
justifyContent="center"
alignItems="stretch"
spacing={1}
padding={1.5}
>
<Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        >
        <h5>Task Details</h5>
        </Stack>


        <Typography align="left" variant="h8" color="grey">
        Task Title
      </Typography>
          
      <Typography align="left" variant="h6" display="block" fontWeight="bold" fontFamily="'Inter', sans-serif">
      NFT Web App Prototype
    </Typography>
          
        
          <Typography align="left" variant="h8" color="grey">
        Description
      </Typography>
        
      <Typography align="left" fontSize={15} display="block" fontWeight="bold" fontFamily="'Inter', sans-serif">
      Last year was a fantastic year for NFTs, with the market reaching a $40 billion valuation for the first time. In addition, more than $10 billion worth of NFTs are now sold every week – with NFT..
    </Typography>
          
</Stack>
      
      
  );
}
