import { Box, Container, Pagination, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from "@mui/material";
import { useEffect } from "react";
import { StateChecker } from "../../common/StateChecker";
import { useAppDispatch, useAppSelector, useReplaceQueryParameter } from "../../core/hooks";
import { useChangeUrlParameters, useUrlParameter } from "../../core/urlHooks";
import { fetchProductsLoading, selectError, selectLoading, selectProducts } from "./productsSlice";
import { StyledTableRow } from "./styled";

export const ProductsList = () => {
    const dispatch = useAppDispatch();
    const changeUrlParameters = useChangeUrlParameters();
    const replaceQueryParameters = useReplaceQueryParameter()
    const products = useAppSelector(selectProducts);
    const isLoading = useAppSelector(selectLoading);
    const isError = useAppSelector(selectError);
    const urlPageParam = useUrlParameter("page");
    const urlSearchParam = useUrlParameter("search");

    const onPageChange = (event: React.ChangeEvent<unknown>, value: number) => {
        changeUrlParameters([{
            key: "page",
            value: value === undefined ? 1 : value
        }])
    };

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        replaceQueryParameters([{
            key: "page",
            value: "1"
        }, {
            key: "search",
            value: event.target.value
        }])
    };

    useEffect(() => {
        dispatch(fetchProductsLoading({ urlPageParam, urlSearchParam }))
    }, [dispatch, urlPageParam, urlSearchParam])

    return (
        <Container maxWidth="md">
            <Typography sx={{ mt: 3 }} color="primary" component="h1" variant="h2">Search for products</Typography>
            <TextField fullWidth
                margin="normal"
                type="number"
                value={urlSearchParam === null || urlSearchParam === "0" ? "" : urlSearchParam}
                variant="outlined"
                label="Product ID"
                helperText={products?.total === undefined ? "" : `Enter the product ID from 1-${products?.total}`}
                onChange={onInputChange} />
            <StateChecker isLoading={isLoading} isError={isError}>
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
                            {products && Array.isArray(products.data)
                                ? products.data.map(({ id, name, year, color }) => (
                                    <StyledTableRow key={id} color={color}>
                                        <TableCell>{id}</TableCell>
                                        <TableCell>{name}</TableCell>
                                        <TableCell>{year}</TableCell>
                                    </StyledTableRow>
                                )) :
                                <StyledTableRow key={products?.data.id} color={products?.data.color}>
                                    <TableCell>{products?.data.id}</TableCell>
                                    <TableCell>{products?.data.name}</TableCell>
                                    <TableCell>{products?.data.year}</TableCell>
                                </StyledTableRow>
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </StateChecker>
            {products && <Box display="flex" justifyContent="center">
                <Pagination
                    sx={{ mt: 3 }}
                    count={products?.total_pages}
                    page={urlPageParam === null ? 1 : +urlPageParam}
                    onChange={onPageChange} />
            </Box>}
        </Container>
    )
}
