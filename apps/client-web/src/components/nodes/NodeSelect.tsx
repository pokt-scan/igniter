import React, { useCallback, useMemo } from 'react'
import { useTheme } from '@mui/material/styles'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import CheckIcon from '@mui/icons-material/Check'
import Select from '@mui/material/Select'
import Radio from '@mui/material/Radio'
import FullWidthDivider from '../common/FullWidthDivider'
import { Button, ListItemText, Stack, Typography } from '@mui/material'
import { getShortAddress } from '../../utils/helpers'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 8 + ITEM_PADDING_TOP,
    },
  },
  disableScrollLock: true,
}

export default function NodeSelect({ selectedNodes, onChange, binOptions, options }) {
  const theme = useTheme()
  const [binFilter, setBinFilter] = React.useState(binOptions[0])
  const [open, setOpen] = React.useState(false)

  const newNodesSelected = React.useMemo(() => selectedNodes.includes('new_nodes'), [selectedNodes])

  const addressColor = theme.isLight ? theme.customColors.blue1_L : theme.customColors.blue1_D
  const binBackgroundColor = theme.isLight ? theme.customColors.pink1 : theme.customColors.purple1

  const handleClose = useCallback(() => setOpen(false), [])

  const handleOpen = useCallback(() => setOpen(true), [])

  const handleChange = (event) => {
    const {
      target: { value },
    } = event

    if (selectedNodes.includes('new_nodes') && value.some((s) => s !== 'new_nodes')) {
      onChange(value.filter((node) => node !== 'new_nodes'))
    } else if (!selectedNodes.includes('new_nodes') && value.includes('new_nodes')) {
      onChange(['new_nodes'])
      handleClose()
    } else {
      onChange(value)
    }
  }

  const filteredNodes = useMemo(
    () => options.filter((node) => node.bin === binFilter.label || binFilter.value === 0),
    [options, binFilter]
  )

  return (
    <FormControl fullWidth size="small">
      <InputLabel sx={{ color: theme.palette.text.primary }}>Node</InputLabel>
      <Select
        multiple
        open={open}
        onClose={handleClose}
        onOpen={handleOpen}
        value={selectedNodes}
        onChange={handleChange}
        input={<OutlinedInput label="Node" />}
        MenuProps={MenuProps}
        renderValue={(selected) => {
          if (selected.includes('new_nodes')) {
            return <Typography color="textPrimary">New Nodes</Typography>
          }

          if (selected.length === 1) {
            const node = options.find((node) => node.address === selected[0])
            return (
              <Stack direction="row" spacing={1}>
                <Typography>Node</Typography>
                <Typography variant="overpass" color={addressColor}>
                  {getShortAddress(node.address)}
                </Typography>
                <Typography variant="overpass">{node.bin}</Typography>
              </Stack>
            )
          }

          const bins = selected.reduce((acc, address) => {
            const bin = options.find((node) => node.address === address).bin
            acc[bin] = (acc[bin] || 0) + 1
            return acc
          }, {})

          return (
            <Stack direction="row" spacing={1} alignItems="baseline">
              <Typography>{selected.length} Nodes Selected</Typography>
              {Object.entries(bins).map(([bin, count], index) => (
                <Typography variant="overpass" key={bin}>
                  {count}x{bin} {index !== Object.entries(bins).length - 1 && ','}
                </Typography>
              ))}
            </Stack>
          )
        }}
        fullWidth
      >
        <MenuItem value="new_nodes">
          <Stack direction="row" justifyContent="space-between" width="100%">
            <Typography>New Nodes</Typography>
            {newNodesSelected && <CheckIcon fontSize="small" />}
          </Stack>
        </MenuItem>
        <FullWidthDivider />
        <Stack direction="row" alignItems="center" p="0px 6px">
          {binOptions.map((bin, index) => (
            <Button
              key={bin.value}
              onClick={() => setBinFilter(bin)}
              sx={{
                border: 'none',
                fontFamily: !index ? 'Jost' : 'Overpass Mono',
                fontWeight: 400,
                height: '28px',
                backgroundColor: binFilter.value === bin.value ? binBackgroundColor : 'transparent',
                '&:hover': {},
              }}
            >
              {bin.label}
            </Button>
          ))}
        </Stack>
        {filteredNodes.map((node) => (
          <MenuItem value={node.address} key={node.address} disabled={node.bin === '60K'}>
            <Radio
              checked={selectedNodes.includes(node.address)}
              size="small"
              sx={{
                color: theme.palette.divider,
                '&.MuiRadio-root': {
                  padding: '2px 10px 2px 5px',
                },
                '&.Mui-checked': {
                  color: theme.isLight ? theme.customColors.blue1_L : theme.customColors.blue1_D,
                },
              }}
            />
            <ListItemText>
              <Stack direction="row" spacing="6px" alignItems="baseline">
                <Typography>Node</Typography>
                <Typography variant="overpass" color={addressColor}>
                  {getShortAddress(node.address)}
                </Typography>
                <Typography variant="overpass">{node.bin}</Typography>
              </Stack>
            </ListItemText>
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
