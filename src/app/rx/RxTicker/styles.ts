
export const rawClasses = {
  container: {
    display: 'flex',
    flexDirection: 'column' as 'column',
    alignItems: 'center' as 'center',
    justifyContent: 'center' as 'center',
    width: '800px',
  },
  rowBase: {
    alignItems: 'center' as 'center',
    cursor: 'default',
    display: 'flex',
    justifyContent: 'space-between' as 'space-between',
    width: '100%',

    '& > div': {
      fontSize: '12px',
      width: '100%',
    }
  },
  rowHheader: {
    fontWeight: 'bold' as 'bold',
    lineHeight: '30px',
    minHeight: '30px',
  },
  row: {
    lineHeight: '20px',
    minHeight: '20px',

    '&:hover': {
      background: 'rgba(0,0,0,0.1)',
    },
  },
};