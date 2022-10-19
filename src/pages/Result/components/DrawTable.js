import * as React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { styled } from "@mui/material/styles";
import TableCell from "@mui/material/TableCell";
import Paper from "@mui/material/Paper";
import { AutoSizer, Column, Table } from "react-virtualized";
import { Link } from "react-router-dom";
import { Box, FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const classes = {
  flexContainer: "ReactVirtualizedDemo-flexContainer",
  tableRow: "ReactVirtualizedDemo-tableRow",
  tableRowHover: "ReactVirtualizedDemo-tableRowHover",
  tableCell: "ReactVirtualizedDemo-tableCell",
  noClick: "ReactVirtualizedDemo-noClick",
};

const styles = ({ theme }) => ({
  // temporary right-to-left patch, waiting for
  // https://github.com/bvaughn/react-virtualized/issues/454
  "& .ReactVirtualized__Table__headerRow": {
    ...(theme.direction === "rtl" && {
      paddingLeft: "0 !important",
    }),
    ...(theme.direction !== "rtl" && {
      paddingRight: undefined,
    }),
  },
  [`& .${classes.flexContainer}`]: {
    display: "flex",
    alignItems: "center",
    boxSizing: "border-box",
  },
  [`& .${classes.tableRow}`]: {
    cursor: "pointer",
  },
  [`& .${classes.tableRowHover}`]: {
    "&:hover": {
      backgroundColor: theme.palette.grey[200],
    },
  },
  [`& .${classes.tableCell}`]: {
    flex: 1,
  },
  [`& .${classes.noClick}`]: {
    cursor: "initial",
  },
});

class MuiVirtualizedTable extends React.PureComponent {
  static defaultProps = {
    headerHeight: window.innerWidth < 600 ? 64 : 80,
    rowHeight: window.innerWidth < 600 ? 112 : 54,
  };

  getRowClassName = ({ index }) => {
    const { onRowClick } = this.props;

    return clsx(classes.tableRow, classes.flexContainer, {
      [classes.tableRowHover]: index !== -1 && onRowClick != null,
    });
  };

  cellRenderer = ({ cellData, columnIndex }) => {
    const { columns, rowHeight, onRowClick } = this.props;
    return (
      <TableCell
        component='div'
        className={clsx(classes.tableCell, classes.flexContainer, {
          [classes.noClick]: onRowClick == null,
        })}
        variant='body'
        style={{ height: rowHeight }}
        align={
          (columnIndex != null && columns[columnIndex].numeric) || false
            ? "right"
            : "left"
        }
      >
        {columnIndex !== 3 ? (
          cellData
        ) : (
          <Link
            to={`/result/${cellData}`}
            style={{ TextDecoration: "none" }}
          >
            <Box className='text-sm text-blueGray-400 mt-4'>
              <Box
                variant='span'
                className='uppercase whitespace-nowrap'
                sx={{
                  transition: "0.2s all ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.01)",
                  },
                }}
              >
                View Result
              </Box>
            </Box>
          </Link>
        )}
      </TableCell>
    );
  };

  headerRenderer = ({ label, columnIndex }) => {
    const { headerHeight, columns } = this.props;

    return (
      <TableCell
        component='div'
        className={clsx(
          classes.tableCell,
          classes.flexContainer,
          classes.noClick
        )}
        variant='head'
        style={{
          height: headerHeight,
          fontWeight: "bold",
          textTransform: "uppercase",
        }}
        align={columns[columnIndex].numeric || false ? "right" : "left"}
      >
        <span>{label}</span>
      </TableCell>
    );
  };

  render() {
    const { columns, rowHeight, headerHeight, ...tableProps } = this.props;
    return (
      <AutoSizer>
        {({ height, width }) => (
          <Table
            height={height}
            width={width}
            rowHeight={rowHeight}
            gridStyle={{
              direction: "inherit",
            }}
            headerHeight={headerHeight}
            {...tableProps}
            rowClassName={this.getRowClassName}
          >
            {columns.map(({ dataKey, ...other }, index) => {
              return (
                <Column
                  key={dataKey}
                  headerRenderer={(headerProps) =>
                    this.headerRenderer({
                      ...headerProps,
                      columnIndex: index,
                    })
                  }
                  className={classes.flexContainer}
                  cellRenderer={this.cellRenderer}
                  dataKey={dataKey}
                  {...other}
                />
              );
            })}
          </Table>
        )}
      </AutoSizer>
    );
  }
}

MuiVirtualizedTable.propTypes = {
  columns: PropTypes.arrayOf(
    PropTypes.shape({
      dataKey: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      numeric: PropTypes.bool,
      width: PropTypes.number.isRequired,
    })
  ).isRequired,
  headerHeight: PropTypes.number,
  onRowClick: PropTypes.func,
  rowHeight: PropTypes.number,
};

const VirtualizedTable = styled(MuiVirtualizedTable)(styles);

const DrawTable = ({ rows, selectedYear, yearList, handleYearChange }) => {
  return (
    <Paper style={{ height: 500, width: "960px" }}>
      <VirtualizedTable
        rowCount={rows.length}
        rowGetter={({ index }) => rows[index]}
        columns={[
          {
            width: 500,
            label: "Tournament Name",
            dataKey: "eventName",
          },
          {
            width: 150,
            label: "Start Date",
            dataKey: "eventEndDate",
          },
          {
            width: 150,
            label: "End Date",
            dataKey: "eventStartDate",
          },
          {
            width: 150,
            label: (
              <FormControl sx={{ width: 120, marginInline: "-1rem 0rem" }}>
                <InputLabel
                  id='demo-simple-select-label'
                  sx={{ fontWeight: "bold" }}
                >
                  Year
                </InputLabel>
                <Select
                  label='Year'
                  value={selectedYear}
                  onChange={handleYearChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  {yearList &&
                    yearList.map((year, index) => {
                      return (
                        <MenuItem key={index} value={year}>
                          {year}
                        </MenuItem>
                      );
                    })}
                </Select>
              </FormControl>
            ),
            dataKey: "_id",
          },
        ]}
        sx={{ border: "1px solid #332861" }}
      />
    </Paper>
  );
};

export default DrawTable;
