import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});


function CoinTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
          <TableCell>
            name
          </TableCell>
          <TableCell>forkCount</TableCell>
          <TableCell>stargazers</TableCell>
          <TableCell>description</TableCell>
          <TableCell>pushedAt</TableCell>
          <TableCell>owner</TableCell>
          <TableCell>language</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          
          {
          props.data.map((dynamicData, key)=> (
            <TableRow>
              <TableCell>{dynamicData.name}</TableCell>
              <TableCell>{dynamicData.forkCount}</TableCell>
              <TableCell>{dynamicData.stargazers}</TableCell>
              <TableCell>{dynamicData.description}</TableCell>
              <TableCell>{dynamicData.pushedAt}</TableCell>
              <TableCell>{dynamicData.owner}</TableCell>
              <TableCell>{dynamicData.language}</TableCell>
            </TableRow>
          ))
        }
        </TableBody>
      </Table>
    </Paper>
  );
}

CoinTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CoinTable);
