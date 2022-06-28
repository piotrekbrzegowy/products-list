import { ErrorOutlineOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

export const ErrorScreen = () => (
    <Box sx={{ mt: 3 }} display="flex" alignItems="center" flexDirection="column">
        <ErrorOutlineOutlined fontSize="large" color="error" />
        <Typography sx={{ mt: 3 }} component="h2" variant="h5" >Ooops! Something went wrong...</Typography>
        <Typography sx={{ mt: 1 }} >1. Please check your network connection and try again</Typography>
        <Typography>2. There is no product with this ID number</Typography>
    </Box>
)