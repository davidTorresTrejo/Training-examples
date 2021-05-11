import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import { TextField } from '@material-ui/core';


const useStyles = makeStyles({
    root: {
        width: '100%',
    },
    container: {
        maxHeight: 440,
    },
});

/* Adapting Table to Users Component */

interface IProps {
    rows: any[];
}

export default function MyTable(props: IProps) {
    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper className={classes.root}>
            <TextField id="outlined-basic" label="User"/>
            <TableContainer className={classes.container}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {
                                Object.keys(props.rows[0]).map((key, index) => {
                                    return (
                                        index === 0 ? <TableCell key={index} style={{ minWidth: 170 }} >{key}</TableCell> : <TableCell key={index} align="right" style={{ minWidth: 170 }}>{key}</TableCell>
                                    );

                                })
                            }
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        {props.rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row: any, index: number) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                                    {
                                        Object.values<string>(row).map((value, index) => {
                                            return (
                                                index === 0 ? <TableCell key={index}>{value}</TableCell> : <TableCell key={index} align="right">{value}</TableCell>
                                            );
                                        })
                                    }
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>

            <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={props.rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
