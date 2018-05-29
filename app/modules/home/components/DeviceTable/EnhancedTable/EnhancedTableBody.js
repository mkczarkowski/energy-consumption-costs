import React from "react";
import TableBody from "@material-ui/core/es/TableBody/TableBody";
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import Checkbox from "@material-ui/core/es/Checkbox/Checkbox";

class EnhancedTableBody extends React.Component {
  render() {
    const {
      data,
      selected,
      page,
      rowsPerPage,
      handleRowClick,
      emptyRows
    } = this.props;
    const isSelected = id => selected.indexOf(id) !== -1;

    return (
      <TableBody>
        {data
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map(row => {
            const isRowSelected = isSelected(row.id);
            return (
              <TableRow
                hover
                onClick={event => handleRowClick(event, row.id)}
                role="checkbox"
                aria-checked={isRowSelected}
                tabIndex={-1}
                key={row.id}
                selected={isRowSelected}
              >
                <TableCell padding="checkbox">
                  <Checkbox checked={isRowSelected} />
                </TableCell>
                <TableCell component="th" scope="row" padding="none">
                  {row.name}
                </TableCell>
                <TableCell component="th" scope="row" padding="none">
                  {row.powerConsumption}
                </TableCell>
                <TableCell component="th" scope="row" padding="none">
                  {row.timeUsed}
                </TableCell>
              </TableRow>
            );
          })}
        {emptyRows > 0 && (
          <TableRow style={{ height: 49 * emptyRows }}>
            <TableCell colSpan={6} />
          </TableRow>
        )}
      </TableBody>
    );
  }
}

export default EnhancedTableBody;
