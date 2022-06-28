import { Box, CircularProgress, Typography } from "@mui/material";

export const Loader = () => (
    <Box sx={{ mt: 3 }} display="flex" alignItems="center" flexDirection="column">
        <CircularProgress />
        <Typography sx={{ mt: 3 }} component="h2" variant="h5" >Loading...</Typography>
        <Typography sx={{ mt: 1 }} >Please wait</Typography>
    </Box>
)