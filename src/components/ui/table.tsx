
import { Table as MUITable, TableRow, TableCell } from '@mui/material';
import { FC } from 'react';
const Table: FC<{ cellInfo: Record<string, string | number | boolean | undefined>[] }> = ({ cellInfo }) => {
    return (
        <MUITable>
            {cellInfo.map(({ title, value },index) => {
                if (value)
                    return (<TableRow key={`table-${title}-${index}`}>
                        <TableCell>{title}</TableCell>
                        <TableCell>{value}</TableCell>
                    </TableRow>)
            })}
        </MUITable>
    )
}


export default Table