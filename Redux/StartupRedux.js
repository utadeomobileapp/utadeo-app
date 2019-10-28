import { createActions ,  createTypes } from 'reduxsauce'
/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  startup: null
})

export const StartupTypes = createTypes(`
    START_UP
    `, {}
)

export default Creators
