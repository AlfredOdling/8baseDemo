export const neumorph = {
  borderRadius: '10px',
  boxShadow:
    '0px 40px 80px 0px rgba(0, 0, 0, 0.16), 4px 4px 26px 0px rgba(255, 255, 255, 0.05) inset, 0px 4px 2px 0px rgba(255, 255, 255, 0.05) inset, 0px -4px 2px 0px rgba(0, 0, 0, 0.15) inset',
  backgroundColor: 'rgba(255, 255, 255, 0.055)',
}

export const neumorphButton = {
  ...neumorph,

  color: 'white',
  background: 'transparent',
  cursor: 'pointer',
  backgroundSize: '260% 100%',
  transition: 'all .3s ease-in-out',
  backgroundImage:
    'linear-gradient(to right, transparent, transparent, rgb(2, 128, 155), transparent)',
}

export const neumorphIconButton = {
  ...neumorph,

  color: 'white',
  background: 'transparent',
  cursor: 'pointer',
  backgroundSize: '230% 100%',
  transition: 'all .3s ease-in-out',
  backgroundImage:
    'linear-gradient(to right, transparent, transparent, rgb(2, 128, 155), rgb(2, 148, 175))',
}
