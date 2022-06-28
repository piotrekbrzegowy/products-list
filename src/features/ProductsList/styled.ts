import { TableRow } from "@mui/material";
import styled from "styled-components";

export const StyledTableRow = styled(TableRow).attrs((props: { color: string }) => props)`
    &&{
        background-color: ${(props) => props.color}
    }
`