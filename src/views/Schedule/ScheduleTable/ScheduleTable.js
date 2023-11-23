import { useState } from 'react'
import {
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  Box,
  Button,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
} from '@material-ui/core'
import { MdAdd } from 'react-icons/md'

import { Table as TableComponent, TableRow, MenuButton } from 'components'

import useStyles from './styles'

const ScheduleTableRow = ({ index, atividade, data, professor, horario, onEdit, onDelete }) => {
  const classes = useStyles()

  return (
    <>
      <TableRow>
        <TableCell className={classes.text}>{atividade}</TableCell>
        <TableCell className={classes.text}>{data}</TableCell>
        <TableCell className={classes.text}>{horario}</TableCell>
        <TableCell className={classes.text}>{professor}</TableCell>
        <TableCell align="right" className={classes.text}>
          <MenuButton id={`schedule-${index}`}>
            <Button fullWidth size="small" onClick={() => onEdit(index)}>
              Editar
            </Button>
            <Button fullWidth size="small" onClick={() => onDelete(index)}>
              Excluir
            </Button>
          </MenuButton>
        </TableCell>
      </TableRow>
    </>
  )
}

const ScheduleTable = () => {
  const classes = useStyles()

  const [open, setOpen] = useState(false)
  const [activities, setActivities] = useState([])
  const [atividade, setAtividade] = useState('')
  const [data, setData] = useState('')
  const [professor, setProfessor] = useState('')
  const [horario, setHorario] = useState('')
  const [editIndex, setEditIndex] = useState(null)

  const handleOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setAtividade('')
    setData('')
    setProfessor('')
    setHorario('')
    setOpen(false)
  }

  const handleAdicionar = () => {
    const novaAtividade = {
      atividade: atividade,
      data: data,
      professor: professor,
      horario: horario,
    }

    if (editIndex !== null) {
      const updatedActivities = [...activities]
      updatedActivities[editIndex] = novaAtividade
      setActivities(updatedActivities)
      setEditIndex(null)
    } else {
      setActivities([...activities, novaAtividade])
    }

    handleClose()
  }

  const handleEdit = (index) => {
    const activityToEdit = activities[index]
    setAtividade(activityToEdit.atividade)
    setData(activityToEdit.data)
    setProfessor(activityToEdit.professor)
    setHorario(activityToEdit.horario)
    setEditIndex(index)
    setOpen(true)
  }

  const handleDelete = (index) => {
    const updatedActivities = [...activities]
    updatedActivities.splice(index, 1)
    setActivities(updatedActivities)
  }

  return (
    <TableContainer>
      <Box mb={2} style={{ textAlign: 'center' }}>
        <Button className={classes.addButton} onClick={handleOpen}>
          ADICIONAR <MdAdd className={classes.addIcon} />
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperProps={{ style: { backgroundColor: '#231F20', color: 'white' } }}
        >
          <DialogTitle>Adicionar Nova Atividade</DialogTitle>
          <DialogContent>
            <TextField
              label="Atividade"
              value={atividade}
              onChange={(e) => setAtividade(e.target.value)}
              fullWidth
              margin="normal"
              variant="outlined"
              className={classes.inputs}
              InputLabelProps={{
                className: classes.inputs,
              }}
            />
            <TextField
              label="Data"
              value={data}
              onChange={(e) => setData(e.target.value)}
              fullWidth
              variant="outlined"
              margin="normal"
              className={classes.inputs}
              InputLabelProps={{
                className: classes.inputs,
              }}
            />
            <TextField
              label="Horário"
              value={horario}
              onChange={(e) => setHorario(e.target.value)}
              fullWidth
              variant="outlined"
              margin="normal"
              className={classes.inputs}
              InputLabelProps={{
                className: classes.inputs,
              }}
            />
            <TextField
              label="Professor"
              value={professor}
              onChange={(e) => setProfessor(e.target.value)}
              fullWidth
              variant="outlined"
              margin="normal"
              className={classes.inputs}
              InputLabelProps={{
                className: classes.inputs,
              }}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} className={classes.addButton}>
              Cancelar
            </Button>
            <Button onClick={handleAdicionar} className={classes.addButton}>
              {editIndex !== null ? 'Editar' : 'Adicionar'}
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
      <Divider style={{ backgroundColor: 'white' }} />
      <TableComponent aria-label="listagem dos incidentes">
        <TableHead>
          <TableRow>
            <TableCell align="left" width="30%" className={classes.text}>
              Atividade
            </TableCell>
            <TableCell align="left" width="20%" className={classes.text}>
              Data
            </TableCell>
            <TableCell align="left" width="20%" className={classes.text}>
              Horario
            </TableCell>
            <TableCell align="left" width="25%" className={classes.text}>
              Professor
            </TableCell>
            <TableCell align="center" width="5%" className={classes.text}>
              Acoes
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {activities.map((item, index) => (
            <ScheduleTableRow
              key={index}
              index={index}
              atividade={item.atividade}
              data={item.data}
              professor={item.professor}
              horario={item.horario}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </TableBody>
      </TableComponent>
    </TableContainer>
  )
}

export default ScheduleTable
