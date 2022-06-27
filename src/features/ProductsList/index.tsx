import { Box, Container, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";

export const ProductsList = () => {
    return (
        <Container maxWidth="md">
            <Typography sx={{ mt: 3 }} color="primary" component="h1" variant="h2">Search for products</Typography>
            <TextField fullWidth
                margin="normal"
                type="number"
                variant="outlined"
                label="Product ID" />
            <TableContainer sx={{ mt: 3 }}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>NAME</TableCell>
                            <TableCell>YEAR</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow key={1}>
                            <TableCell>1</TableCell>
                            <TableCell>name</TableCell>
                            <TableCell>2009</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Box display="flex" justifyContent="center">
                <Pagination
                    sx={{ mt: 3 }}
                    count={3}
                    page={1} />
            </Box>
        </Container>
    )
}