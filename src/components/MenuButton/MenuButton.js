import { useState } from 'react'
import { Box, Button, IconButton, Menu } from '@material-ui/core'
import { MoreVertical as MoreVerticalIcon } from 'react-feather'

const MenuButton = ({ id, icon, title, children }) => {
  const [anchorEl, setAnchorEl] = useState(null)

  const openMenu = anchorEl
  const buttonId = `${id}`
  const menuId = `basic-menu-${buttonId}`

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleCloseMenu = () => {
    setAnchorEl(null)
  }

  return (
    <Box>
      {!title && icon && (
        <IconButton
          id={buttonId}
          aria-controls={openMenu ? menuId : undefined}
          aria-haspopup="true"
          aria-expanded={openMenu ? 'true' : undefined}
          onClick={handleOpenMenu}
        >
          {icon}
        </IconButton>
      )}

      {title && (
        <Button
          id={buttonId}
          aria-controls={openMenu ? menuId : undefined}
          aria-haspopup="true"
          aria-expanded={openMenu ? 'true' : undefined}
          onClick={handleOpenMenu}
        >
          {title}
        </Button>
      )}

      <Menu
        id={menuId}
        anchorEl={anchorEl}
        open={openMenu}
        onClose={handleCloseMenu}
        MenuListProps={{ 'aria-labelledby': buttonId }}
      >
        {children}
      </Menu>
    </Box>
  )
}

MenuButton.defaultProps = {
  icon: <MoreVerticalIcon />,
}

export default MenuButton
