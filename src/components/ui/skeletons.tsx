import { Table, TableCell, TableRow } from '@material-ui/core';
import { Skeleton } from '@material-ui/lab';
import React, { FC } from 'react';

export const SkeletonRows: FC<{ cellInfo: Record<string, string | number | boolean | undefined>[] }> = ({ cellInfo }) => {
    return <Table>
        {cellInfo.map(({ title, value }, index) => {
            return (<TableRow key={`table-${title}-${index}`}>
                <TableCell>{title}</TableCell>
                <TableCell><Skeleton width={100}/></TableCell>
            </TableRow>)
        })}
    </Table>
};
