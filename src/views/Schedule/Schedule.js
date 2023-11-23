import usePagination from 'hooks/usePagination'

import { Box, TablePagination } from '@material-ui/core'

import { PagePaper, Header } from 'components'
import { ScheduleTable } from './ScheduleTable'

import useStyles from './styles'

const Schedule = () => {
  const classes = useStyles()
  const { perPage, page, handleChangePage, handleChangeRowsPerPage } = usePagination(10)

  return (
    <Box paddingX={6} paddingY={6}>
      <Header title="AGENDA" />
      <PagePaper>
        <ScheduleTable />
        <TablePagination
          component="div"
          count={0}
          onPageChange={(_, page) => handleChangePage(page)}
          onRowsPerPageChange={handleChangeRowsPerPage}
          page={page - 1}
          rowsPerPage={perPage}
          rowsPerPageOptions={[5, 10, 25, 100]}
          labelRowsPerPage="Por página"
          nextIconButtonProps={{ size: 'small' }}
          backIconButtonProps={{ size: 'small' }}
          className={classes.tablePagination}
        />
      </PagePaper>
    </Box>
  )
}

export default Schedule
